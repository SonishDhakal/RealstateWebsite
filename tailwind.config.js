/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primaryClr:' #7065F0',
       secondaryClr:' #2278FD',
       titleClr:' #000',
       textClr:' rgba(44, 40, 40, 0.842)',
       bodyClr:' #f3f3f317',
       yellowClr:'#FCB810',
       linearGradient:'rgb(46 39 39 / 70%)',
       tempWhite:'rgb(6 5 5 / 15%);'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        titleFont:['League Spartan', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
}

