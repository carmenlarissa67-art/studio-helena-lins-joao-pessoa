/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf6f5',
          100: '#fbe9ea',
          200: '#f6d3d7',
          300: '#eeb2bb',
          400: '#e0849a',
          500: '#c43c64',
          600: '#b13459',
          700: '#a12d4e',
          800: '#8a2443',
          900: '#6b1b34',
          950: '#3f1020',
        },
        ink: { DEFAULT: '#3f1020', soft: '#6b1b34', mute: '#8c6f74' },
        blush: { light: '#fbe3e4', DEFAULT: '#f4bcc2', dark: '#c65d77' },
        champagne: { DEFAULT: '#C9A266', light: '#F1E2C6', dark: '#9A7433' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
