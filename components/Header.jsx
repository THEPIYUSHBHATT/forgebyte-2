"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for the hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 md:px-10 border-b-[1px] h-20 w-full bg-[#fff] text-black">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="ForgeByte Logo"
          height={80} 
          width={150}
          className="h-auto mr-3"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li>
          <Link href="#home" className="font-semibold">Home</Link>
        </li>
        <li>
          <Link href="#about" className="font-semibold">About</Link>
        </li>
        <li>
          <Link href="#services" className="font-semibold">Services</Link>
        </li>
        <li>
          <Link href="#projects" className="font-semibold">Testimonial</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <Button text="Contact Us" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#fff] text-black shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium">
            <li>
              <Link href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                Testimonial
              </Link>
            </li>
            <li>
              <Button text="Contact Us" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
