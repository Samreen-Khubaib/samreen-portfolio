/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        panel: "var(--panel)",
        "panel-raised": "var(--panel-raised)",
        line: "var(--line)",
        paper: "var(--paper)",
        "paper-dim": "var(--paper-dim)",
        copper: "var(--copper)",
        teal: "var(--teal)",
      },
    },
  },
  plugins: [],
};
