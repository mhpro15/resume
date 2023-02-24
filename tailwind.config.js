/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#191A19",
      yellow: "#FFF700",
      green: "#68F590",
      grey: "#F3F3F3",
      "grey-light": "#FAFAFA",
      "green-light": "#d2eff1",
      lightGreen: "#B5F1CC",
      white: "#FFF",
      nameColor: "#C9F4AA",
      lightYellow: "#FFFBAC",
      lightDark: "#393939",
      salmon: "#e06c75;",
      blue: "#61afef",
    },
    fontFamily: {
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Roboto", "sans-serif"],
      noto: ["Noto Sans JP", "sans-serif"],
      righteous: ["Righteous", "Roboto"],
      name: ["JetBrains Mono", "monospace"],
    },
    fontSize: {
      sm: "0.8em",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    },
    minHeight: {
      extra: "155px",
    },
    extend: {
      screens: {
        sx: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
