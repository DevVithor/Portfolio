/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    lineClamp: {
      10: "10",
      20: "20",
    },
    backgroundImage: {
      project1: "url(./assents/ifood.webp)",
      project2: "url(./assents/efi.png)",
      project3: "url(./assents/telegram-001.jpg)",
    },
    boxShadow: {
      custom: "0 10px 30px 10px rgba(0, 0, 0, 0)",
    },
  },

  darkMode: "class",
  plugins: [],
};
