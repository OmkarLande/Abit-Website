/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontFamily: {
    Roboto: ['Roboto'],
    
  },
  colors: {
    btnpurple : '#7D7ED7',
    btnblue : '#009EFF',
    bgcolor : '#1e1e1e',
    white: '#ffffff'
  }
  },
  plugins: [],
}