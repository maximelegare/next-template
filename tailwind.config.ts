/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { gradiantGreenAccent: "#2DE282", gradiantBlueAccent: "#0DE7DA" },
      // backgroundImage: (theme) => ({
      //   gradiantAccent: `linear-gradient(to right, ${theme(
      //     "colors.gradiantGreenAccent"
      //   )}, ${theme("colors.gradiantBlueAccent")})`,
      // }),
    },
    fontFamily: {
      // display: ["Lobster", "cursive"],
    },
  },
  daisyui: {
    themes: [
      {
        base: {
          primary: "#667CE9",
          "primary-focus": "#354281",
          "primary-content": "#CACFEB",
          secondary: "#354281",
          "secondary-focus": "rgb(62, 13, 111)",
          accent: "#26c9c3",
          neutral: "#060B21",
          "neutral-content": "#060B21",
          "base-100": "#EEEFF3",
          // "base-200": "#DFE2F2",
      
          error: "#EF124E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
