/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "12rem",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        flowdown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "50%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(50%)", opacity: 0 },
        },
      },
      animation: {
        flowdown: "flowdown 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
