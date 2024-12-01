'use client'

import Button from './Button'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

const HeroComponent = () => {
  return (
    <div className="text-center py-12 bg-white">
      <h1 className="text-black text-5xl font-bold mb-5 font-sans">
        Digital Marketing Agency <br />
        Template Design
      </h1>
      <p className="text-black text-xs mb-5">
        ForgeByte webflow template includes 10+ pages in total, with more than
        40+ <br />
        sections and 1 home page, and amazing features
      </p>
      <div className="mb-5">
        <Button className="mt-1" text="Purchase Template" />
        <button className="ml-2 py-2 px-4 bg-inherit text-black font-bold rounded inline-flex items-center">
          Explore <FaArrowDown className="ml-1" />
        </button>
      </div>
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
          <div className="flex-none border border-gray-300 p-5 rounded-lg w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
            <Image
              src="/assets/trexo_updated.png"
              alt="Trexo Template"
              width={500}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-none border border-gray-300 p-5 rounded-lg w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
            <Image
              src="/assets/yoom_updated.png"
              alt="YOOM Template"
              width={500}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-none border border-gray-300 p-5 rounded-lg w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
            <Image
              src="/assets/fleetr_enhanced.png"
              alt="Third Template"
              width={500}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
