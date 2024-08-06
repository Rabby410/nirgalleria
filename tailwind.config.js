/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary" : "rgb(254 251 236)",
        "secendary" : "rgb(195 221 64)",
      },
      colors: {
        "primary": "rgb(195 221 64)",
        "secendary": "#797979",
        "third": "rgb(195 221 64)",
      },
    },
  },
  plugins: [],
};
