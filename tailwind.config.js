/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-950': 'rgb(3 7 18)',
        'gray-container': '#27282a',
        'gray-greenish': '#3e4a59'
      },
      backgroundImage: {
        'vert-light-gradient': 'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 13.94%, #fff 54.73%)',
        'vert-dark-gradient': 'linear-gradient(180deg,rgba(53,55,64,0),#1f2230ed 58.85%)',
      },
      screens: {
        '3xl': '1600px',
      },
      scale: {
        '97': '.97',
        '101': '1.1'
      },
      borderWidth: {
        '1': '1px',
      },
      height: {
        '18': '4.5rem',
        '19': '4.7rem'
      },
    },
  },
  plugins: [],
}
