/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx}",
//     './pages/**/*.{html,js}',
//     './components/**/*.{html,js}',
//   ],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica','Arial','sans-serif']
    },
    extend: {
      colors: {
        'picton-blue': {
          light: '#337AB7',
          DEFAULT: '#337AB7',
          dark: '#14b367',
        },
        'nav-hover-blue': {
          DEFAULT: '#286090',
        },
        'nav-menu-active':{
          DEFAULT: '#1d4568',
        },
        'new': {
          DEFAULT: '#D9EDF7',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};