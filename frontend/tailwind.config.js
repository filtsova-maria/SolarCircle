/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"], // TODO: replace with component and page folders later on
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: "#F4B746",
      secondary: "#F8D626",
      accent: "#72ACEC",
      black: "#000000",
      white: "#FFFFFF",
      text: "#171717",
      background: "#F4F6F4",
      state: {
        error: "#DA2F24",
        success: "#97F150",
      },
      reactions: {
        like: "#DA2F24",
        comment: "#68B0FF",
        repost: "#97F150"
      },
      grey: {
        light: "F1F1F1",
        mid: "#B5B5B5",
        dark: "#747474",
      }
    },
    extend: {},
  },
  plugins: [],
}

