"use client";

const Button = ({ text, onClick }) => {
    return (
      <button
        className="bg-gradient-to-r from-yellow-300 to-blue-400 text-black font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  