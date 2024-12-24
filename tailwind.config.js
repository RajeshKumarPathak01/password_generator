/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { raw: "(min-width: 140px) and (max-width: 750px)" },
      lg: { raw: "(min-width: 750px) and (max-width: 900px)" },
    }
  },
  plugins: [],
}

