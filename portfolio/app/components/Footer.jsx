import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="border-t border-gray-700 w-full"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 py-12">
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Pranitha Saravanan
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              I’m a passionate Frontend Developer who loves transforming ideas into intuitive,
              engaging, and responsive user interfaces. With a strong eye for design and detail,
              I specialize in crafting clean, scalable, and user-friendly applications that deliver
              seamless digital experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {['Home','About','Skills','Internship','Experience','Project','Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative inline-block hover:text-violet-400 transition group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition">
                  <FaEnvelope className="text-white" />
                </span>
                <a
                  href="mailto:pranisaravanan2005@gmail.com"
                  className="hover:text-violet-400 transition"
                >
                  pranisaravanan2005@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition">
                  <FaLinkedin className="text-white" />
                </span>
                <a
                  href="https://www.linkedin.com/in/pranitha-saravanan-329435300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition">
                  <FaGithub className="text-white" />
                </span>
                <a
                  href="https://github.com/pranitha080511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 pb-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-violet-400">Pranitha Saravanan</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
