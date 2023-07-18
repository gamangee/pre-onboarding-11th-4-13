/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blue: '#017be8',
        skyblue: '#cae9ff',
        lightblue: '#eef8ff',
        lightblueHover: '#e1f3ff',
        lightGray: '#a6afb7',
        lightGrayHover: '#f3f4f6',
        darkGray: '6a737b',
        borderGray: '#edf0f2',
      },
    },
  },
  plugins: [],
};
