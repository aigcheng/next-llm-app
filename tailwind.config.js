/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
