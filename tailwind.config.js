import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#171f31",
        "secondary": "#f8b179",
        "accent": "#bae55e",
        "neutral": "#2c2938",
        "base-100": "#171f31",
        "base-200": "#2c3251",
        "base-300": "#424769",
        "info": "#14bdf0",
        "success": "#1c824c",
        "warning": "#cc840f",
        "error": "#eb3770",
      },
    }, "dark"],
  },
}