/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      screens: {
        'small': { 'raw': '(max-width: 450px)' },
        'tosmall':{ 'raw': '(max-width:350px)' },
      },
      
    },
  },
  plugins: [],
}
