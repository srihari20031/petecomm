import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#fffaf2"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         'hero-bg': 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
        'hero-shape': 'radial-gradient(circle at 50% 50%, #f1f1f1, #f9f9f9)',
      },
      spacing: {
        '150p': '150%',
        '-50p': '-50px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
export default config;
