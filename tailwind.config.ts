import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'project-skillbridge': "url('/images/portfolio/SkillBridge.png')",
          'project-admin-skillbridge': "url('/images/portfolio/SkillBrige-Dashboard.png')",
          'project-rateeat': "url('/images/portfolio/RateEat.png')",
          'project-portal': "url('/images/portfolio/Portal.png')",
          'project-arifone': "url('/images/portfolio/ArifOne.png')",
          'project-landing': "url('/images/portfolio/Landing.png')",
      },
    },
  },
  plugins: [],
};
export default config;
