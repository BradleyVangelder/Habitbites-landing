module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ivy: ["IVY JOURNAL", 'serif']
      },
      colors: {
        'project': {
          'text': '#202C4B',
          'secondtext': '#697083',
          'main': '#215FFF',
          'secondary': '#5685FF',
          'background': '#FAFAFF',
          'light-button': '#BDC4D9'
        }
      }
    },
  },
  plugins: [],
}
