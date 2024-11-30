"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
    return (
      <div className="flex items-center justify-around border-b-[1px] h-36 w-full bg-[#fff] text-black">
        <div className="flex ">
          <Image
            src="/assets/logo.png"
            alt="ForgeByte Logo"
            height={80} // Adjusted height
            width={150} // Adjusted width for 4:1 ratio
            className="h-auto mr-3"
          />
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link className="h-[19px]" href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="h-[19px]" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="h-[19px]" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="h-[19px]" href="#projects">
              Testimonial
            </Link>
          </li>
        </ul>
        <div className=" h-10">
          <Button text="Contact Us" />
        </div>
      </div>
    )
};

export default Header;
