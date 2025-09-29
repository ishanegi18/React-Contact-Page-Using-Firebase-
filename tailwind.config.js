/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        ocean: "#1E3A8A",
        mint: "#10B981",
        lavender: "#A78BFA",
        coral: "#FB7185",
      },
    },
  },
  plugins: [],
};