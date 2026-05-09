/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui"] },
      colors: {
        ink: {
          950: "#070A12",
          900: "#0B1220",
          850: "#0E1730",
          800: "#101B3A"
        },
        accent: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
        glow: "0 0 0 1px rgba(34,197,94,.25), 0 15px 50px rgba(34,197,94,.12)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(600px circle at 30% 20%, rgba(34,197,94,.15), transparent 60%), radial-gradient(500px circle at 80% 30%, rgba(16,185,129,.12), transparent 55%), linear-gradient(to bottom, rgba(255,255,255,.04), transparent 35%)"
      }
    },
  },
  plugins: [],
};

