/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'testimonial': "  url('https://www.maxitaxiperth.com.au/assets/img/ser08.jpg')"
      },
      screens :{
        "large" : "960px"
      }
    },
  },
  plugins: [],
}

