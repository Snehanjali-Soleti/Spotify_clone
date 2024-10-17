/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "app-black": "#121212",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #262626, #171717)',
        'c2' : 'linear-gradient(180deg, #262626, #171717)',
        'c3' : 'linear-gradient(180deg, #1F1F1F, #171717)',
        'c4' : 'linear-gradient(180deg, #1C1C1C, #171717);'
      },
    },
  },
  plugins: [],
}

