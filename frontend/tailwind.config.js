import PreviousMap_ from 'postcss/lib/previous-map';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'primary-light': '#FF6036',
        'secondary': '#FFEB3B',
        'decoration': '#F48FB1',
        'contrast': '#00BFFF',
      },
      fontFamily: {
        'poppins': "'Poppins', serif",
        'openSans': "'Open Sans', serif",
        'archivoBlack': "'Archivo Black', serif",
        'montserrat': "'Montserrat', serif"
      }
    },
    backgroundImage: {
      'login': 'url("./src/assets/Wallpaper-Login.jpg")'
    }
  },
  plugins: [],
}

