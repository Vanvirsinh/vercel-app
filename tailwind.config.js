/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    colors: {
      black: "#181C31",
      white: "#FFFFFF",
      logoBg: "#13284c",
      logoIcon: "#ff3a54",
      logoText: "#39cccc",
      lightText: "#8e8e8e"
    },
    extend: {
      maxWidth: {
        'c-1390': '86.875rem',
        'c-1315': '82.188rem',
        'c-1280': '80rem',
        'c-1235': '77.188rem',
        'c-1154': '72.125rem',
        'c-1016': '63.5rem',
      },
    },
  },
  plugins: [],
}

