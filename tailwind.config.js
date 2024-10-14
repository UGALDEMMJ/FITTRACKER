/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      phone: "640px",
      tablet: "768px",
      tabBig: "1024px",
      standard: "1280px",
      desktop: "1536px",
    },
    extend: {},
  },
  plugins: [],
}

