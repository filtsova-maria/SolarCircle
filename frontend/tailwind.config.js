/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      default: 'Ubuntu, sans-serif',
      title: 'Rubik, sans-serif',
    },
    colors: {
      main: "#F4B746",
      primary: "#F8D626",
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
    extend: {
      spacing: {
      }
    },
  },
  plugins: [],
}

