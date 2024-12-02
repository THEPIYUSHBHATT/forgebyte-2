/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        "gradient-start": "#fbc02d",
        "gradient-end": "#64b5f6",
        'hero-section' : '#050414',
        
      },
    },
  },
  plugins: [],
};
