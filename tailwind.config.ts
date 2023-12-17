import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comforta: [ 'comforta', "Sans"],
        dancing: [ 'Dancing Script', 'cursive'],
        montserrat: ["montserrat","sans-serif"], 
        lovers: ["Lovers Quarrel","sans-serif"],
      },
      colors: {
        primary: '#06062a',
        secondary: '#151538',
        tertiary: '#242445',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
