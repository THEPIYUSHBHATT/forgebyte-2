"use client";

import Button from '../components/Button'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import { FaLaptop, FaListAlt, FaCog } from 'react-icons/fa'

import WhatWeAreOffering from "@/components/WhatWeAreOffering";
import LetsTalk from "@/components/LetsTalk";


export default function Home() {
  const items = [
    {
      icon: <FaLaptop className="text-black mb-4" size={36} />,
      title: '1 Stunning landing pages',
      description:
        'GrowStudio has 1 stunning home pages, designed to build your personal portfolio site in the market.',
    },
    {
      icon: <FaListAlt className="text-black mb-4" size={36} />,
      title: '10+ Useful inner pages',
      description:
        'GrowStudio has 10+ inner pages that is needed for your business, you can fully customize these.',
    },
    {
      icon: <FaCog className="text-black mb-4" size={36} />,
      title: '30+ Details sections',
      description:
        'GrowStudio has 30+ Stunning sections which will help you to build a portfolio website as per your need.',
    },
  ]
  return (
    <>


      {/* -----------------hero component--------------------------- */}
      <div className="text-center py-12 bg-white">
        <div className="my-8 px-4 md:my-16 md:px-8">
          {/* Heading */}
          <h1 className="text-black text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10 font-sans leading-tight">
            We Don&apos;t Just Go Big <br className="hidden md:block" />
            - We Go Beyond
          </h1>

          {/* Description */}
          <p className="text-black text-sm md:text-base mb-5 leading-relaxed">
            Our journey from beginnings to breakthroughs has been fueled by innovation, dedication,

            <br className="hidden md:block" />
            and an unyielding commitment to excellence
          </p>
        </div>



        <div className="mb-5 my-20 ">
          <Button className="mt-1" text="Contact Us" />

          <button className="ml-2 py-2 px-4 bg-inherit text-black font-bold rounded inline-flex items-center">
            Explore <FaArrowDown className="ml-1" />
          </button>
        </div>

        {/* images */}
        <div className="flex justify-center gap-5 mt-8 overflow-x-auto relative">
          <style>
            {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scroll-container {
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
            }
            .scroll-item {
              scroll-snap-align: start;
            }
          `}
          </style>
          <div className="flex space-x-5 overflow-x-auto no-scrollbar scroll-container">
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/assets/trexo_updated.png"
                alt="Trexo Template"
                width={450}
                height={350}
                className="rounded-lg  h-auto"
              />
            </div>
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/assets/yoom_updated.png"
                alt="YOOM Template"
                width={450}
                height={350}
                className="rounded-lg  h-auto"
              />
            </div>
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/assets/fleetr_enhanced.png"
                alt="Third Template"
                width={450}
                height={350}
                className="rounded-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------include component--------------------------- */}
      <div className="bg-white py-5">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24">
          {/* Left Section */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:mt-15">
            <h2 className="text-black text-4xl md:text-6xl lg:text-7xl font-extrabold mb-1">
              Included in
            </h2>
            <h3 className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
              ForgeByte
            </h3>
            <p className="text-black text-sm md:text-lg mb-8">
              ForgeByte webflow template includes 10+ pages in total,
              <br /> with more than 40+ sections and 1 different home pages <br />
              and amazing features.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="mt-4" text="Purchase Template" />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-col space-y-4 items-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] p-5 sm:p-7 rounded-2xl shadow-md text-left transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:w-3/4"
              >
                {item.icon}
                <h3 className="text-black text-lg sm:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* -----------------what we are offering component--------------------------- */}
      <WhatWeAreOffering />


      {/* -----------------collaborate component--------------------------- */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Exploring Oppurtunities to work with ?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I specialize in creating and implementing strategies that drive online visibility,
            engagement, and growth for businesses. My expertise spans across various digital
            platforms, including social media, search engines, and email marketing.
          </p>
          <Button text="Contact Me" />
        </div>

        {/* Gradient Effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000] to-[#fff] opacity-70 pointer-events-none"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff] to-[#00000050] opacity-70 pointer-events-none"></div> */}
      </section>



      {/* -----------------lets talk component--------------------------- */}
      <LetsTalk />




    </>
  )
}
