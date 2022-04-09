module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#50c4cf",
        "secondary": "#D926A9",
        "accent": "#1FB2A6",
        "neutral": "#181818",
        "base-100": "#fffffe",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }, ],
  },
  plugins: [require("daisyui")],
}
