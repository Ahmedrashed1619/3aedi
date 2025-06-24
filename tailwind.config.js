/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Montserrat-Arabic", "Cairo", "Tajawal", "sans-serif"],
      },
      colors: {
        "success-green": "#4ade80",
        "navy-blue": "#312e81",
        primary: {
          DEFAULT: "#4857FC",
          dark: "#1B2559",
          light: "#6B7280",
        },
        background: {
          DEFAULT: "#F7F8FA",
          light: "#F9FAFB",
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
        placeholder: "#9CA3AF",
        error: "#EF4444",
        success: "#4ade80",
        "text-primary": "#1B2559",
        "text-secondary": "#6B7280",
        "text-placeholder": "#9CA3AF",
        "text-error": "#EF4444",
        "text-success": "#4ade80",
        "text-headline": "#312e81",
      },
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
  darkMode: "class",
};
