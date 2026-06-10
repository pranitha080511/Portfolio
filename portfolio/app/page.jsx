"use client";
import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import ThreeBackground from "./components/ThreeBackground";

import { CgProfile } from "react-icons/cg";
import { RiGlobalFill } from "react-icons/ri";
import { FaCode, FaLightbulb, FaExplosion, FaLocationDot, FaDatabase, FaGraduationCap } from "react-icons/fa6";
import { SiSkillshare } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GiJourney } from "react-icons/gi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const purple = "#a259ff";

export default function Home() {
  const skills = [
    { name: "TypeScript", percent: 85 },
    { name: "JavaScript", percent: 88 },
    { name: "Java", percent: 80 },
    { name: "Python", percent: 50 },
    { name: "C", percent: 70 },
    { name: "React.js", percent: 88 },
    { name: "Next.js", percent: 85 },
    { name: "Node.js", percent: 82 },
    { name: "Express.js", percent: 80 },
    { name: "Spring Boot", percent: 70 },
    { name: "MySQL", percent: 82 },
    { name: "PostgreSQL", percent: 80 },
    { name: "MongoDB", percent: 75 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "Bootstrap", percent: 88 },
    { name: "GSAP", percent: 65 },
    { name: "Data Structures & Algorithms (DSA)", percent: 80 },
    { name: "Object-Oriented Programming (OOP)", percent: 83 },
    { name: "Database Management Systems (DBMS)", percent: 84 },
    { name: "Git & GitHub", percent: 80 },
  ];

  gsap.registerPlugin(ScrollTrigger);

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
              <div className="relative w-full h-4 bg-gray-900 rounded-full border border-gray-700">
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
              ScrollTrigger.create({
                trigger: bar.parentElement, 
                start: "top 80%", 
                onEnter: () => {
                  // animate bar
                  gsap.to(bar, {
                    width: `${skill.percent}%`,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: index * 0.1,
                  });

                  // animate bubble
                  gsap.to(bubble, {
                    left: `calc(${skill.percent}% - 15px)`,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: index * 0.1,
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
                },
                once: true, 
              });
            }
          });
        }, [skills]);
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <div className="relative z-10"> 
      <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-transparent text-white px-6 py-16 md:py-0">
  {/* Photo on Left with Animated Violet Bg Lines */}
  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative py-10">
    <div className="relative group flex justify-center items-center">
      {/* Animated Violet concentric rings */}
      <div className="absolute inset-0 -m-6 md:-m-8 border-2 border-dashed border-purple-500/25 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-0 -m-3 md:-m-4 border border-purple-500/40 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
      {/* Profile Image Wrapper */}
      <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={400}
          height={400}
          className="object-cover w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Content on Right */}
  <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:pl-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Hi, I'm <span className="text-purple-400">Pranitha S</span>
    </h1>
    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-xl">
      I am a skilled Full-Stack Developer and database management enthusiast with strong problem-solving and algorithmic abilities. I specialize in PERN stack development, building scalable web platforms, integrating modern frameworks, and developing secure backend architectures, while bringing a continuous learning mindset to software development.
    </p>

    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#contact"
        className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
      >
        REACH OUT
      </a>
      <a
        href="/prani_final_resume.pdf" 
        download="Pranitha_Resume.pdf"
        className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
      >
        DOWNLOAD RESUME
      </a>
    </div>
  </div>
</section>
      <section id="about" className="px-4 md:px-10 lg:px-14 py-10">
        <div className="flex justify-center">
          <button className="border-2 py-3 px-6 rounded-full text-white mb-7 flex items-center">
            <CgProfile className="text-4xl md:text-3xl mr-2 text-purple-400"  />
            <span className="text-base md:text-lg lg:text-xl">ABOUT ME</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-center h-full">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <RiGlobalFill className="text-2xl text-violet-400" />
                <h3 className="text-lg md:text-xl font-bold text-violet-400">My Journey</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                I'm Pranitha Saravanan from Madurai, currently pursuing my Bachelor's degree in Computer Science and Engineering at Kamaraj College of Engineering and Technology. My journey in software engineering is driven by a deep passion for full-stack web development, database management, and solving complex algorithmic challenges. Over the years, I have built and deployed scalable web applications, integrated secure backend architectures, and worked extensively with database management systems. With a continuous learning mindset, I thrive in fast-paced environments, actively participate in hackathons to build innovative projects, and constantly explore new frameworks and tools. Beyond my academic pursuits, I am deeply involved in exploring emerging technologies, focusing on how modern digital infrastructure can solve real-world problems. I actively engage with developer communities, keeping my skills sharp and staying ahead of industry trends. Looking ahead, I am eager to leverage my technical expertise, creative problem-solving skills, and collaborative spirit to contribute to innovative software development roles, architecting solutions that drive meaningful impact.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaCode className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Full-Stack Development</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Experienced in PERN stack development, building scalable web platforms, and integrating modern frameworks. I focus on developing secure backend architectures and designing responsive, user-friendly frontend interfaces that deliver seamless digital experiences.
                </p>
              </div>
            </div>

            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaLightbulb className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Problem Solving & Algorithms</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Possess strong problem-solving and algorithmic abilities demonstrated through hackathons and hands-on projects. I enjoy designing elegant solutions for complex logic and optimization problems using clean code.
                </p>
              </div>
            </div>

            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaDatabase className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Database Management</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Skilled in database management and design across SQL and NoSQL environments like MySQL, PostgreSQL, and MongoDB. I focus on schema modeling, query performance, data integrity, and creating robust database structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-4 md:px-10 lg:px-14 py-10 bg-transparent text-white">
        <div className="flex justify-center mb-10">
          <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
            <FaGraduationCap className="text-4xl md:text-3xl mr-2 text-purple-400" />
            <span className="text-sm md:text-base lg:text-lg">EDUCATION</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* College Card */}
          <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <FaGraduationCap className="text-2xl text-violet-400" />
                <h3 className="text-lg md:text-xl font-bold text-violet-400">Bachelor of Engineering (B.E)</h3>
              </div>
              <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">Computer Science and Engineering</h4>
              <p className="text-gray-300 text-sm md:text-base mb-4">Kamaraj College of Engineering and Technology</p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-900/30">
              <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
                <SlCalender className="text-purple-400" />
                <span>2023 – 2026</span>
              </div>
              <p className="text-purple-400 font-semibold text-lg">CGPA: 9.1 / 10 <span className="text-xs md:text-sm text-gray-400 font-normal">(Till 5th Semester)</span></p>
            </div>
          </div>

          {/* HSC Card */}
          <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <FaGraduationCap className="text-2xl text-violet-400" />
                <h3 className="text-lg md:text-xl font-bold text-violet-400">Higher Secondary Certificate (HSC)</h3>
              </div>
              <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">Secondary Education</h4>
              <p className="text-gray-300 text-sm md:text-base mb-4">Oxford Matriculation Higher Secondary School</p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-900/30">
              <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
                <SlCalender className="text-purple-400" />
                <span>Passed in 2022</span>
              </div>
              <p className="text-purple-400 font-semibold text-lg">Percentage: 92%</p>
            </div>
          </div>

          {/* SSLC Card */}
          <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <FaGraduationCap className="text-2xl text-violet-400" />
                <h3 className="text-lg md:text-xl font-bold text-violet-400">Secondary School Leaving Certificate (SSLC)</h3>
              </div>
              <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">General Schooling</h4>
              <p className="text-gray-300 text-sm md:text-base mb-4">Shri Ramana Vikaas Higher Secondary School</p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-900/30">
              <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
                <SlCalender className="text-purple-400" />
                <span>Passed in 2020</span>
              </div>
              <p className="text-purple-400 font-semibold text-lg">Percentage: 93%</p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="min-h-screen bg-transparent text-white px-6 py-16">
        <div className="flex justify-center mb-12">
          <button className="border-2 py-3 px-7 rounded-full text-white flex items-center">
            <SiSkillshare className="text-4xl md:text-3xl mr-2 text-purple-400"  />
            <span className="text-base md:text-lg lg:text-xl font-semibold">
              MY SKILLS
            </span>
          </button>
        </div>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>
      </section>
        <section id="internship" className="bg-transparent text-white px-6 pt-16 pb-30">

   <div className="flex justify-center mb-10">
     <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
       <IoLogoHtml5 className="text-4xl md:text-3xl mr-2 text-purple-400" />
       <span className="text-sm md:text-base lg:text-lg font-semibold">INTERNSHIP</span>
     </button>
   </div>

   {/* Cards Container */}
   <div className="flex justify-center">
     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">

       {/* Card 1: Kevell Global Solutions */}
       <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
         <div>
           <div className="flex items-center gap-2 mb-3 text-purple-300">
             <IoLogoHtml5 className="text-2xl text-violet-400" />
             <h3 className="text-lg md:text-xl font-bold text-violet-400">MERN Stack Intern</h3>
           </div>

           <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">
             Kevell Global Solutions
           </h4>

           <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
             <SlCalender className="text-purple-400" />
             <span>June 2025 - July 2025</span>
           </div>

           <div className="flex items-center gap-3 text-white/70 mb-3 text-sm md:text-base">
             <FaLocationDot className="text-purple-400" />
             <span>Madurai</span>
           </div>
           
           <ul className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed list-disc pl-5 space-y-2 mt-4 font-normal">
             <li>Completed a 20-day full-stack development internship.</li>
             <li>Developed frontend interfaces and integrated backend APIs.</li>
             <li>Built responsive and interactive user experiences using modern CSS frameworks and JavaScript libraries.</li>
             <li>Worked closely with mentors to meet project deadlines and improve rendering efficiency.</li>
           </ul>
         </div>
       </div>

       {/* Card 2: Cognifyz Technologies */}
       <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
         <div>
           <div className="flex items-center gap-2 mb-3 text-purple-300">
             <IoLogoHtml5 className="text-2xl text-violet-400" />
             <h3 className="text-lg md:text-xl font-bold text-violet-400">MERN Stack Developer Intern</h3>
           </div>

           <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">
             Cognifyz Technologies
           </h4>

           <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
             <SlCalender className="text-purple-400" />
             <span>December 2025 - January 2026</span>
           </div>

           <div className="flex items-center gap-3 text-white/70 mb-3 text-sm md:text-base">
             <FaLocationDot className="text-purple-400" />
             <span>Virtual</span>
           </div>

           <ul className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed list-disc pl-5 space-y-2 mt-4 font-normal">
             <li>Collaborated with a remote engineering team to design, build, and debug web components using the MERN stack.</li>
             <li>Applied responsive design practices and state management workflows.</li>
             <li>Delivered all assigned milestones within a 1-month internship period.</li>
             <li>Improved web application performance and user experience.</li>
           </ul>
         </div>
       </div>

     </div>
   </div>
 </section>
        <section id="experience" className="bg-transparent text-white px-6 pt-16 pb-30">
          <div className="flex justify-center mb-10">
          <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
            <GiJourney className="text-4xl md:text-3xl mr-2 text-purple-400"  />
            <span className="text-sm md:text-base lg:text-lg font-semibold">ACHIEVEMENTS</span>
          </button>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaProjectDiagram className="text-2xl" />
                  <h3 className="text-lg font-semibold">Hackathon</h3>
                </div>
                <h4 className="font-semibold text-white/90 text-lg mb-1">SRM Madurai Engineering College</h4>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <SlCalender className="text-purple-400" />
                  <span>14 October 2025</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <FaLocationDot className="text-purple-400" />
                  <span>Madurai</span>
                </div>
                <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Won 2nd prize in a hackathon in the domain of AI and blockchain for the project titled PatientX.
                </p>
              </div>
              <p className="text-purple-400 font-bold text-base mt-2">Won 2nd Prize</p>
            </div>

            {/* Card 2 */}
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaProjectDiagram className="text-2xl" />
                  <h3 className="text-lg font-semibold">Project Expo</h3>
                </div>
                <h4 className="font-semibold text-white/90 text-lg mb-1">Anna University Regional Campus</h4>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <SlCalender className="text-purple-400" />
                  <span>27 September 2025</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <FaLocationDot className="text-purple-400" />
                  <span>Madurai</span>
                </div>
                <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Secured 3rd prize for the project TribalEarth 360, which focuses on forest rights awareness and sustainable land management.
                </p>
              </div>
              <p className="text-purple-400 font-bold text-base mt-2">Won 3rd Prize</p>
            </div>

            
            {/* Card 4 */}
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaProjectDiagram className="text-2xl" />
                  <h3 className="text-lg font-semibold">Hackathon</h3>
                </div>
                <h4 className="font-semibold text-white/90 text-lg mb-1">VibeHacks 2.0</h4>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <SlCalender className="text-purple-400" />
                  <span>Loveable AI</span>
                </div>
                <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Emerged in the Top 20 teams during VibeHacks 2.0, presenting a high-performing project in AI development.
                </p>
              </div>
              <p className="text-purple-400 font-bold text-base mt-2">Top 20 Finalist</p>
            </div>

            {/* Card 5 */}
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaProjectDiagram className="text-2xl" />
                  <h3 className="text-lg font-semibold">Hackathon</h3>
                </div>
                <h4 className="font-semibold text-white/90 text-lg mb-1">Gyan Mitra '26</h4>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <FaLocationDot className="text-purple-400" />
                  <span>MEPCO Schlenk Engineering College</span>
                </div>
                <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Qualified and pitched as a finalist in the national-level Gyan Mitra '26 Hackathon event.
                </p>
              </div>
              <p className="text-purple-400 font-bold text-base mt-2">Finalist</p>
            </div>
            
            {/* Card: Research Paper */}
<div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
  <div>
    <div className="flex items-center gap-2 mb-3 text-purple-300">
      <FaCode className="text-2xl" />
      <h3 className="text-lg font-semibold">Research Paper</h3>
    </div>
    <h4 className="font-semibold text-white/90 text-lg mb-1">
      International Research Journal of Advanced Engineering and Management
    </h4>
    <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
      <FaLocationDot className="text-purple-400" />
      <span>International Conference</span>
    </div>
    <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
      Published and presented a peer-reviewed research paper at an international conference, featured in the International Research Journal of Advanced Engineering and Management (IRJAEM).
    </p>
  </div>
  <div className="flex items-center justify-between mt-2">
    <p className="text-purple-400 font-bold text-base">Published</p>
    <a
      href="https://goldncloudpublications.com/index.php/irjaem/article/view/1336"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
    >
      View Paper
    </a>
  </div>
</div>

            {/* Card 6 */}
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaCode className="text-2xl" />
                  <h3 className="text-lg font-semibold">Certification</h3>
                </div>
                <h4 className="font-semibold text-white/90 text-lg mb-1">Oracle Job Readiness Certification</h4>
                <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                  <SlCalender className="text-purple-400" />
                  <span>Team Everest for Girls</span>
                </div>
                <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Successfully completed a rigorous 20-day job readiness training program, receiving a stipend and toolkit.
                </p>
              </div>
              <p className="text-purple-400 font-bold text-base mt-2">Certified</p>
            </div>
          </div>
        </section>
      <section id="project" className="min-h-screen bg-transparent text-white py-16">
        <div className="flex justify-center mb-12">
          <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
            <FaProjectDiagram className="text-4xl md:text-3xl mr-2 text-purple-400"  />
            <span className="text-sm md:text-base lg:text-lg font-semibold">PROJECTS</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {/* Card 1: Food Bridge */}
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-purple-800">
                <Image
                  src="/OIP (2).jpg"
                  alt="Food Bridge Logo"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>
              <h3 className="font-bold text-violet-400 text-center text-xl mt-4">Food Bridge</h3>
              <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Food Bridge is an AI-powered food donation platform connecting donors, NGOs, and volunteers. It optimizes food distribution and community engagement by implementing features like live map tracking, distance calculation, AI food freshness detection, and a user rating system.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/Food-Bridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Card 2: TribalEarth 360 */}
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-purple-800">
                <Image
                  src="/logo.jpg"
                  alt="TribalEarth 360 Logo"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>
              <h3 className="font-bold text-violet-400 text-center text-xl mt-4">TribalEarth 360</h3>
              <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Tribal Earth360 is a data-driven web application focused on forest rights awareness and sustainable land management. It uses AI-based asset mapping to visualize resources and land usage, providing insights for tribal communities and policymakers through an interactive and responsive design.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/DharunNagavel/Tribal-Earth-360.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                View Source Code
              </a>
              <a 
                href="https://tribal-earth-360.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Card 3: PatientX */}
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-purple-800">
                <Image
                  src="/patient.png"
                  alt="PatientX Logo"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>
              <h3 className="font-bold text-violet-400 text-center text-xl mt-4">PatientX</h3>
              <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                PatientX is a modern, responsive web application built using React.js, Tailwind CSS, and Node.js. The platform is designed to provide a seamless experience for managing patient records, appointments, and healthcare workflows. It features an intuitive user interface.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/DharunNagavel/PatientX.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                View Source Code
              </a>
              <a 
                href="https://react-project-sage-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Card 4: DNP GLOW */}
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-purple-800">
                <Image
                  src="/bg.jpg"
                  alt="DNP GLOW Logo"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>
              <h3 className="font-bold text-violet-400 text-center text-xl mt-4">DNP GLOW</h3>
              <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                DNP Glow is a modern, responsive web application built using React JS and Tailwind CSS, designed for a beauty and skincare brand. The project includes pages such as Home, Products, Offers, and Contact, with a focus on dynamic UI components, clean layouts, and interactive design elements.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/DNP-glow.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                View Source Code
              </a>
              <a 
                href="https://react-project-sage-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Card 5: Yummy's Kitchen */}
          <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-purple-800">
                <Image
                  src="/logo.png"
                  alt="Yummy's Kitchen Logo"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>
              <h3 className="font-bold text-violet-400 text-center text-xl mt-4">Yummy's Kitchen</h3>
              <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Yummy’s Kitchen is a visually appealing, frontend-only web project built using HTML and CSS. It showcases a clean and modern design for a culinary brand, featuring key pages such as Order, Offer, and Contact. The project focuses on user-friendly layouts, responsive design, and attractive styling.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a  
                href="https://github.com/pranitha080511/Yummy-s-kitchen.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                View Source Code
              </a>
              <a 
                href="https://pranitha080511.github.io/Yummy-s-kitchen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="  text-white px-6 py-16">
        <div className="flex justify-center mb-12">
          <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
            <MdPermContactCalendar className="text-4xl md:text-3xl mr-2 text-purple-400" />
            <span className="text-lg md:text-xl font-semibold tracking-wide">CONTACT</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="border border-purple-400 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-violet-400 mb-6 text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MdEmail className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <span className="font-semibold">Email: </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=pranisaravanan2005@gmail.com"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    pranisaravanan2005@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <span className="font-semibold">Phone: </span>
                  <a
                    href="https://wa.me/918925107335"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    +91 89251 07335
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <span className="font-semibold">Location: </span>
                  <a
                    href="https://maps.app.goo.gl/zymzkCuzvZHManh27?g_st=aw"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    Madurai
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border border-purple-400 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-violet-400 mb-6 text-center">
              Connect with Me
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <a
                    href="https://www.linkedin.com/in/pranitha-saravanan-329435300/"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <a
                    href="https://github.com/pranitha080511"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <SiLeetcode className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                <p className="text-lg">
                  <a
                    href="https://leetcode.com/u/Zuac1JDzNs/"
                    target="_blank"
                    className="hover:text-violet-300 transition"
                  >
                    Leetcode
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}