import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'signupBg':"url('/app/Assets/signUp.jpeg')",
        'loginBg':"url('/app/Assets/loginBg.jpeg')",
      },
      fontFamily:{
        'default':["RobotoMono"],
      },
      gridTemplateColumns:{
          'influencer':'2fr 1fr 1fr ',
          'allInfluencers':'1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr'
      },
    },
  },
  plugins: [],
} satisfies Config;
