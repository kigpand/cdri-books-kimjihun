module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title1: ["24px", { lineHeight: "24px", fontWeight: "700" }],
        title2: ["22px", { lineHeight: "24px", fontWeight: "700" }],
        title3: ["18px", { lineHeight: "18px", fontWeight: "700" }],
        body1: ["20px", { lineHeight: "20px", fontWeight: "500" }],
        body2: ["14px", { lineHeight: "14px", fontWeight: "500" }],
        body2Bold: ["14px", { lineHeight: "14px", fontWeight: "700" }],
        caption: ["16px", { lineHeight: "16px", fontWeight: "500" }],
        small: ["10px", { lineHeight: "10px", fontWeight: "500" }],
      },
      colors: {
        palette: {
          primary: "rgba(72, 128, 238, 1)",
          red: "rgba(232, 65, 24, 1)",
          gray: "rgba(218, 218, 218, 1)",
          lightGray: "rgba(242, 244, 246, 1)",
          white: "rgba(255, 255, 255, 1)",
          black: "rgba(34, 34, 34, 1)",
        },
        text: {
          primary: "rgba(53, 60, 73, 1)",
          secondary: "rgba(109, 117, 130, 1)",
          subtitle: "rgba(141, 148, 160, 1)",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "sans-serif"],
      },
    },
  },
};
