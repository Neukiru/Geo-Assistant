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
      backgroundImage: {
        'vert-light-gradient': 'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 13.94%, #fff 54.73%)',
        'vert-dark-gradient': 'linear-gradient(180deg, rgba(53, 55, 64, 0), #353740 45.85%)',
      },
    },
  },
  plugins: [],
}
