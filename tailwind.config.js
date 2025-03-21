export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oceanBlue: "#A8E6CF",
        sunsetPink: "#FFAAA5",
        sandBeige: "#FFD3B6",
        tropicalGreen: "#D4E157",
        deepNavy: "#2C3E50",
      },
      fontFamily: {
        tropical: ["'Pacifico'", "cursive"],
        modern: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        'tropical-gradient': "linear-gradient(to bottom right, #FFAAA5, #FFD3B6, #A8E6CF)",
      },
    },
  },
  plugins: [],
};
