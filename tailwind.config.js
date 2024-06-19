/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#030303",
        lightRed: "#B2493A",
        darkRed: "#6A3C3E",
        lightGold: '#D5B869',
        darkGold: '#C6A054',
        highGold:'#fbf304',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
  plugins: [],
};
