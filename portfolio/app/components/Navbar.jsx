"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-white fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl md:text-4xl font-bold">Pranitha Saravanan</h1>
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#project" className="hover:text-purple-400">Project</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <CiMenuBurger />}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center bg-black pb-6 md:hidden gap-6 text-lg">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#project" onClick={() => setIsOpen(false)}>Project</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;