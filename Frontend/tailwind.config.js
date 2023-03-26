/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins",
      },
      animation: {
        bouncy: "bouncy 3s linear infinite",
      },
      keyframes: {
        bouncy: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(7px)",
          },

          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
