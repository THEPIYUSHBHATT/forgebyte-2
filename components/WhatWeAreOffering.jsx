"use client";

import { ArrowUpRight } from "lucide-react"; // Example for SVG icons; you can replace with your own icons.

const services = [
  {
    title: "Website Development",
    description:
      "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
  },
  {
    title: "App Development",
    description:
      "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
  },
  {
    title: "Desktop App Development",
    description:
      "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
  },
  {
    title: "ChatBots Development",
    description:
      "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
  },
];

export default function WhatWeAreOffering() {
  return (
    <section className="bg-black text-white py-16 px-6 rounded-t-3xl">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative">
          <div className="h-[200px] w-[200px] blur-2xl opacity-25 bg-gradient-to-b from-[#86D2FC] to-black mx-auto top-0 absolute "></div>
          <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-400 mb-4">
            Services
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12">
            What we are offering
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8  border-white bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mb-6 mx-auto group-hover:bg-gray-600 transition-all duration-300">
                <ArrowUpRight className="text-gray-300 group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
