/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
      primary: '#811eaf', // Warna biru khusus
      secondary: '#e09c2d', // Warna kuning khusus
    },
    fontFamily: {
      sans: ['Poppins', 'times new roman'],
    },
  },
},
  plugins: [],
}

