'use client'
import { FaLaptop, FaListAlt, FaCog } from 'react-icons/fa'
// import DetailsIcon from '../public/assets/details-icon.svg';
// import StunningIcon from '../public/assets/stunning-icon.svg';
// import { FaCog } from 'react-icons/fa';

import Button from './Button'

const IncludedinForgeByte = () => {
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
    <div className="bg-white py-5">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24">
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:mt-15">
          <h2 className="text-black text-7xl font-extrabold mb-1">
            Included in
          </h2>
          <h3 className="text-black text-6xl font-semibold mb-4 ">
            ForgeByte
          </h3>
          <p className="text-black text-lg mb-8">
            ForgeByte webflow template includes 10+ pages in total,
            <br /> with more than 40+ sections and 1 different home pages <br />{' '}
            and amazing features.
          </p>
          <Button className="mt-4" text="Purchase Template" />
        </div>
        <div className="lg:w-1/2 flex flex-col space-y-4 items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] p-7 rounded-2xl shadow-md text-left transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-3/4 sm:w-full"
            >
              {item.icon}
              <h3 className="text-black text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IncludedinForgeByte
