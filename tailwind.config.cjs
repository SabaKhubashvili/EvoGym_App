/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-20':'#F8F4EB',
        'gray-50':'#EFE6E6',
        'gray-100':'#DFCCCCC',
        'gray-500':'#5E0000',
        'primary-100':'#FFE1E0',
        'primary-300':'#FFA6A3',
        'primary-500':'#FF6B66',
        'secondary-400':'#FFCD58',
        'secondary-500':'#FFC132',
      },  
      backgroundColor: (theme) =>({
        'gradient-yellowred':'linear-gradient("90deg,#FF616A 0%, #FFC837 100%")',
        'mobile-home':'url("./assets/images/HomePageGraphic.png")'
      }),
      fontFamily:{
        dmsans:['DM Sans',"sans-serife"],
        monserrat:['Monserrat','sans-serif']
      },
      content:{
        evolveText:'url("../../src/assets/images/EvolveText.png")',
        abstractWaves:'url("../../src/assets/images/abstractWaves.png")',
        sparkles:'url("../../src/assets/images/sparkles.png")',
        circles:'url("../../src/wqassets/images/circles.png")',
      },
      screens:{
        xs:'480px',
        sm:'768px',
        md:'1060px'
      }
    }, 
  },
  plugins: [],
}