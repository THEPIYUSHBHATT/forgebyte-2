"use client";
import Button from "./Button";

export default function Collaborate() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffffff0a] to-[#00000050] opacity-70 pointer-events-none"></div>
    </section>
  );
}
