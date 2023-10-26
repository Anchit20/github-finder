// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},  
  },
  variants: {
    extend:{},
  },
  plugins: [require('daisyui')],
}