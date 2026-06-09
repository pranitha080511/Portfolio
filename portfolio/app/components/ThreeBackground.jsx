"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent so CSS gradient shows
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Force canvas to be fixed behind everything
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "-1";
    renderer.domElement.style.pointerEvents = "none";

    mount.appendChild(renderer.domElement);

    // Particles
    const PARTICLE_COUNT = 150;
    const positions = [];
    const velocities = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 160,
        y: (Math.random() - 0.5) * 100,
        z: (Math.random() - 0.5) * 60,
      });
      velocities.push({
        x: (Math.random() - 0.5) * 0.03, // Slower for elegance
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    // Dots
    const dotGeometry = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(PARTICLE_COUNT * 3);
    positions.forEach((p, i) => {
      dotPositions[i * 3] = p.x;
      dotPositions[i * 3 + 1] = p.y;
      dotPositions[i * 3 + 2] = p.z;
    });
    dotGeometry.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const dotMaterial = new THREE.PointsMaterial({
      color: 0xc4b5fd, // Softer pastel purple
      size: 1.2,
      transparent: true,
      opacity: 0.5, // Subtle
    });
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    // Lines
    const MAX_LINES = PARTICLE_COUNT * 4;
    const linePositions = new Float32Array(MAX_LINES * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.15 })
    );
    scene.add(lineSegments);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    let animId;
    const MAX_DIST = 26;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Majestic global scene rotation
      scene.rotation.y += 0.0005;
      scene.rotation.x += 0.0002;

      positions.forEach((p, i) => {
        p.x += velocities[i].x;
        p.y += velocities[i].y;
        p.z += velocities[i].z;
        
        // Wrap-around instead of bouncing for organic infinite feel
        if (p.x > 80) p.x = -80; else if (p.x < -80) p.x = 80;
        if (p.y > 50) p.y = -50; else if (p.y < -50) p.y = 50;
        if (p.z > 30) p.z = -30; else if (p.z < -30) p.z = 30;
        
        dotPositions[i * 3] = p.x;
        dotPositions[i * 3 + 1] = p.y;
        dotPositions[i * 3 + 2] = p.z;
      });
      dotGeometry.attributes.position.needsUpdate = true;

      let lineIdx = 0;
      for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_LINES; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_LINES; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const dz = positions[i].z - positions[j].z;
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < MAX_DIST) {
            linePositions[lineIdx * 6 + 0] = positions[i].x;
            linePositions[lineIdx * 6 + 1] = positions[i].y;
            linePositions[lineIdx * 6 + 2] = positions[i].z;
            linePositions[lineIdx * 6 + 3] = positions[j].x;
            linePositions[lineIdx * 6 + 4] = positions[j].y;
            linePositions[lineIdx * 6 + 5] = positions[j].z;
            lineIdx++;
          }
        }
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIdx * 2);

      // Smooth parallax camera easing
      camera.position.x += (mouseX * 15 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 15 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "radial-gradient(circle at center, #1a0b2e 0%, #000000 100%)",
      }}
    />
  );
}