/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { gradiantGreenAccent: "#2DE282", gradiantBlueAccent: "#0DE7DA" },
    },
    fontFamily: {},
  },
  daisyui: {
    themes: [
      {
        base: {
          primary: "#667CE9", // bleu principal
          "primary-focus": "#354281",
          "primary-content": "#CACFEB",
          secondary: "#354281", // bleu plus foncé
          "secondary-focus": "rgb(62, 13, 111)",
          accent: "#26c9c3",
          neutral: "#060B21", // noir
          "neutral-content": "#060B21",
          "base-100": "#EEEFF3", // blanc
          "base-200": "#DFE2F2", // blanc un peu moins blanc
          success: "#1E8A1E", // vert
          error: "#EF124E", // rouge
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
