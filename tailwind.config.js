/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:{},
  },
  daisyui: {
    themes: [
      "light", "dark", "forest",
      {
        mytheme: {
          "primary": "#1C3F60",
          "secondary": "#AFC1D0",
          "base-100": "#0B1320",
          "neutral": "#b3cee5",
          "accent": "#B1D4E0",
          "base-content": "#B1D4E0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

