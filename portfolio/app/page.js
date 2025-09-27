"use client";
import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { RiGlobalFill } from "react-icons/ri";
import { FaCode, FaLightbulb, FaExplosion } from "react-icons/fa6";
import { SiSkillshare } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { gsap } from "gsap";

const purple = "#a259ff";

export default function Home() {
  const skills = [
    { name: "HTML", percent: 92 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React JS", percent: 80 },
    { name: "Next JS", percent: 79 },
    { name: "GSAP", percent: 60 },
    { name: "Java", percent: 83 },
    { name: "DSA", percent: 50 },
    { name: "Git and GitHub", percent: 75 },
  ];

  const barRefs = useRef([]);
  const bubbleRefs = useRef([]);

  const SkillItem = ({ skill, index }) => {
    const barRef = useRef(null);
    const bubbleRef = useRef(null);

    useEffect(() => {
      barRefs.current[index] = barRef.current;
      bubbleRefs.current[index] = bubbleRef.current;
    }, [index]);

    return (
      <div className="w-full mb-6">
        <p className="font-medium text-xl mb-2">{skill.name}</p>
        <div className="relative w-full h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
          <div
            ref={barRef}
            className="h-full rounded-full absolute left-0 top-0"
            style={{
              width: 0,
              background: purple,
              transition: "background 0.3s",
            }}
          />
          <div
            ref={bubbleRef}
            className="absolute top-1/2 left-0 flex items-center justify-center rounded-full font-bold text-lg select-none"
            style={{
              width: "35px",
              height: "35px",
              background: "#15161f",
              color: "white",
              border: `2px solid white`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              transform: "translateY(-50%) scale(0.82)",
              left: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            0%
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    skills.forEach((skill, index) => {
      const bar = barRefs.current[index];
      const bubble = bubbleRefs.current[index];
      if (bar && bubble) {
        gsap.to(bar, {
          width: `${skill.percent}%`,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.16,
        });
        gsap.to(bubble, {
          left: `calc(${skill.percent}% - 15px)`, 
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.16,
          onUpdate: function () {
            const progress = gsap.getProperty(bar, "width");
            let containerW = bar.parentElement.offsetWidth || 1;
            let percent =
              (parseFloat(bar.style.width || 0) / containerW) * skill.percent;
            percent = isNaN(percent) ? 0 : Math.round(percent);
            bubble.textContent = `${percent}%`;
          },
          onComplete: function () {
            bubble.textContent = `${skill.percent}%`;
          },
        });
      }
    });
  }, [skills]);

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center"
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-purple-400 mb-5 object-cover"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Hai, I'm <span className="text-purple-400">Pranitha Saravanan</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-xl max-w-2xl">
          I am a passionate Frontend Developer with experience in creating
          responsive, user-friendly, and visually appealing web applications.
          I specialize in translating design mockups into interactive interfaces using technologies like HTML, CSS, JavaScript, and modern frameworks such as React JS and GSAP for animation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer">
            REACH OUT
          </button>
          <button className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer">
            DOWNLOAD RESUME
          </button>
        </div>
      </section>
      <section id="about" className="px-4 md:px-10 lg:px-14 py-10">
  <div className="flex justify-center">
    <button className="border-2 py-3 px-6 rounded-full text-white mb-7 flex items-center">
      <CgProfile className="text-2xl md:text-3xl mr-2" />
      <span className="text-base md:text-lg lg:text-xl">ABOUT ME</span>
    </button>
  </div>

  <div className="flex flex-col md:flex-row justify-between gap-8">
    <div className="flex-1">
      <h3 className="text-white border-4 border-b-0 p-4 md:p-5 rounded-t-2xl">
        <RiGlobalFill className="text-3xl md:text-4xl inline-block text-violet-400" />
        <span className="inline-block ml-2 text-lg md:text-xl lg:text-2xl align-middle text-violet-400">
          My Journey
        </span>
      </h3>
      <p className="text-white border-4 border-t-0 p-4 md:p-5 rounded-b-2xl text-sm md:text-base lg:text-lg leading-relaxed">
        I'm Pranitha Saravanan from Madurai, currently pursuing my Bachelor's
        degree in Computer Science and Engineering at Kamaraj College of
        Engineering and Technology. Over the past year, I have gained valuable
        hands-on experience in frontend development, working on projects that
        focus on creating responsive, user-friendly, and visually engaging web
        applications. My journey in web development has been fueled by a deep
        passion for continuous learning and innovation. I enjoy exploring
        modern frameworks, libraries, and design principles that help transform
        ideas into meaningful digital experiences. With a strong foundation in
        HTML, CSS, JavaScript, React.js, Next.js, and GSAP, I specialize in
        building interfaces that blend smooth performance, intuitive layouts,
        and creative design. I am particularly fascinated by the impact of
        motion and interactivity in enhancing user experience. Whether it's
        developing pixel-perfect layouts, optimizing performance for speed and
        accessibility, or integrating engaging animations, I strive to craft
        solutions that are both functional and delightful. Beyond technical
        skills, I value collaboration and problem-solving, as I believe
        impactful projects are built through teamwork and innovation. Looking
        ahead, I aspire to grow as a frontend developer, embrace new
        challenges, and contribute to projects that make a meaningful
        difference in the ever-evolving world of web development and digital
        technology.
      </p>
    </div>
    <div className="flex-1 flex flex-col gap-6">
      <div>
        <h3 className="text-white border-4 border-b-0 p-4 md:p-5 rounded-t-2xl">
          <FaCode className="text-3xl md:text-4xl inline-block text-violet-400" />
          <span className="inline-block ml-2 text-lg md:text-xl lg:text-2xl align-middle text-violet-400">
            Practical Architecture
          </span>
        </h3>
        <p className="text-white border-4 border-t-0 p-4 md:p-5 rounded-b-2xl text-sm md:text-base lg:text-lg leading-relaxed">
          I am a Frontend Developer skilled in building responsive and
          accessible web applications using HTML, CSS, JavaScript, and
          frameworks like React, Angular, and Vue. My practical architecture
          covers UI design, application logic, API integration, and deployment,
          supported by modern tools such as Git, Webpack, and testing
          frameworks. I focus on performance optimization, scalability, and
          user experience, delivering complete and reliable frontend solutions.
        </p>
      </div>

      <div>
        <h3 className="text-white border-4 border-b-0 p-4 md:p-5 rounded-t-2xl">
          <FaLightbulb className="text-3xl md:text-4xl inline-block text-violet-400" />
          <span className="inline-block ml-2 text-lg md:text-xl lg:text-2xl align-middle text-violet-400">
            Skill Driven
          </span>
        </h3>
        <p className="text-white border-4 border-t-0 p-4 md:p-5 rounded-b-2xl text-sm md:text-base lg:text-lg leading-relaxed">
          I specialize in building full-stack web applications using the MERN
          stack with a strong focus on frontend development. My expertise lies
          in creating responsive, user-friendly, and high-performing interfaces
          using React.js, Next.js, and modern JavaScript, while applying best
          practices in performance optimization, accessibility, and modern web
          standards.
        </p>
      </div>

      <div>
        <h3 className="text-white border-4 border-b-0 p-4 md:p-5 rounded-t-2xl">
          <FaExplosion className="text-3xl md:text-4xl inline-block text-violet-400" />
          <span className="inline-block ml-2 text-lg md:text-xl lg:text-2xl align-middle text-violet-400">
            Impact Oriented
          </span>
        </h3>
        <p className="text-white border-4 border-t-0 p-4 md:p-5 rounded-b-2xl text-sm md:text-base lg:text-lg leading-relaxed">
          I specialize in frontend development, building responsive,
          user-friendly, and high-performing web interfaces using React.js,
          Next.js, JavaScript (ES6+), and modern UI frameworks. My focus is on
          delivering impactful user experiences through performance
          optimization, accessibility, and seamless integration with backend
          systems.
        </p>
      </div>
    </div>
  </div>
  </section>
      <section id="skills" className="min-h-screen bg-black text-white px-6 py-16">
          <div className="flex justify-center mb-12">
            <button className="border-2 py-3 px-7 rounded-full text-white flex items-center">
              <SiSkillshare className="text-2xl md:text-3xl mr-2" />
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                MY SKILLS
              </span>
            </button>
          </div>
          <div className="w-full max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} index={index} />
            ))}
          </div>
        </section>
      <section id="project" className="min-h-screen bg-black text-white px-6 py-14">
        <div className="flex justify-center mb-10">
          <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
            <FaProjectDiagram className="text-lg md:text-3xl mr-2" />
            <span className="text-sm md:text-base lg:text-lg">PROJECT</span>
          </button>
        </div>
        <div className="flex flex-col gap-10 p-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 max-w-sm hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
              <h3 className="font-bold text-violet-400 text-center text-xl">Yummy's Kitchen</h3>
              <p className="mt-4 text-gray-200 text-xl">
                Yummy’s Kitchen is a visually appealing, frontend-only web project built using HTML and CSS. It showcases a clean and modern design for a culinary brand, featuring key pages such as Order, Offer, and Contact. The project focuses on user-friendly layouts, responsive design, and attractive styling.
              </p>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/Yummy-s-kitchen.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                View Source Code
              </a>
              <a 
                href="https://pranitha080511.github.io/Yummy-s-kitchen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 max-w-sm hover:scale-105 transition-transform duration-300">
            <Image 
              src="/bg.jpg"
              alt="logo2"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <h3 className="font-bold text-violet-400 text-center text-xl mt-4">DNP GLOW</h3>
            <p className="mt-4 text-gray-200 text-xl">
              DNP Glow is a modern, responsive web application built using React JS and Tailwind CSS, designed for a beauty and skincare brand. The project includes pages such as Home, Products, Offers, and Contact, with a focus on dynamic UI components, clean layouts, and interactive design elements.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/DNP-glow.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                View Source Code
              </a>
              <a 
                href="https://react-project-sage-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row justify-center items-center gap-10">
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 max-w-sm hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo.jpg"
              alt="logo3"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <h3 className="font-bold text-violet-400 text-center text-xl mt-4">TribalEarth 360</h3>
            <p className="mt-4 text-gray-200 text-xl">
              Tribal Earth360 is a data-driven web application focused on forest rights awareness and sustainable land management. It uses AI-based asset mapping to visualize resources and land usage, providing insights for tribal communities and policymakers through an interactive and responsive design.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/DNP-glow.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                View Source Code
              </a>
              <a 
                href="https://react-project-sage-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
              <Image 
                src="/profile.jpg"
                alt="profile"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-violet-400 text-center text-xl mt-4">Portfolio</h3>
            <p className="mt-4 text-gray-200 text-xl">
             My portfolio website is a modern, responsive platform built using Next.js and Tailwind CSS. It showcases my projects, skills, and creativity through clean layouts, smooth animations, offering visitors a seamless browsing experience.The site also includes sections for skills, projects.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/DNP-glow.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                View Source Code
              </a>
              <a 
                href="https://react-project-sage-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="contact" className="min-h-screen bg-black text-white px-6 py-16">
         <div className="flex justify-center mb-10">
          

         </div>
      </section>
    </>
  );
}