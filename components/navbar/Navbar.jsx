"use client";

import { useState } from 'react';
import { Menu, X, Download } from "lucide-react";

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md rounded-b-2xl fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 pt-1">

                    <div className="flex items-center space-x-2">
                        <span className="font-bold">Portfolio</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 font-medium">
                        <a href="#about" className="hover:text-gray-600">About Me</a>
                        <a href="#skills" className="hover:text-gray-600">Skills</a>
                        <a href="#projects" className="hover:text-gray-600">Projects</a>
                        <a href="#experience" className="hover:text-gray-600">Exprerience</a>
                    </div>

                    {/* Resume Button */}
                    <div className="hidden md:flex">
                        <a href="final resume.pdf" download className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-1">
                        Resume <Download size={16} />
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hiddden bg-gray-800 px-6 pb-4 rounded-b-2xl shadow-md text-white">
                    <a href="#about" className="block py-2">About Me</a>
                    <a href="#skills" className="block py-2">Skills</a>
                    <a href="#projects" className="block py-2">Projects</a>
                    <a href="#experience" className="block py-2">Experience</a>
                    <a href="final resume.pdf" download className="mt-3 inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-800">
                    Resume <Download size={16} className="ml-1" />
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavbarPage;
