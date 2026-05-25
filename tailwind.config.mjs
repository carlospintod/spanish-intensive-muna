/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFBF4",
          100: "#FEF5E7",
          200: "#FBEACB",
        },
        terracotta: {
          50: "#FBEDE6",
          100: "#F5D2C0",
          400: "#D77A52",
          500: "#C84B31",
          600: "#A93A23",
          700: "#7E2B1A",
        },
        olive: {
          500: "#7A8450",
          600: "#5F6840",
        },
        ink: {
          900: "#3C2B2A",
          700: "#5A4544",
          500: "#80706F",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
      boxShadow: {
        warm: "0 6px 24px -8px rgba(168, 80, 50, 0.18)",
      },
    },
  },
  plugins: [],
};
