"use client";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-[#EFE3B3] to-[#86D2FC] text-black font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition relative overflow-hidden"
      onClick={onClick}
    >
      <span className="inline-block transition-transform duration-300 transform hover:translate-y-1">
        {text}
      </span>
    </button>
  );
};

export default Button;
