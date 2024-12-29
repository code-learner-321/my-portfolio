/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nutral-black':'#000000',
        'site-primary':'#FFFFFF',
        'site-secondary':'#15BFAF',
        'secondary-light':'#F7FCFF',
        'accent':'#F57E19',
        'accent-secondary':'#F5A619'
      }
    },
    fontSize: {
      defaultBase:['0.9rem'],
      smallText:['0.9rem'],
      midText: ['1rem'],
      largeText: ['1.1rem'],
      lgName:['3.052rem'],
      mdName:['1.953rem'],
      smName:['2.074rem'],
      smtextSizeskills:["0.875rem"],
      mdtextSizeskills:["1rem"],
      lgtextSizeskills:["1rem"],
      smProjectsecondaryHeading:["1.44rem"]
    },
    fontFamily:{
      'ralway':["Raleway", "sans-serif"],
      'montserrat':["Montserrat Alternates", "sans-serif"],
    }
  },
  plugins: [],
}

