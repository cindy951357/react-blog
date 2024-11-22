import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '350px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['Nunito Sans', 'Merriweather', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#f43f5e', // rose-500
        },
        second: {
          300: '#faefd9',
        },
        skin: '#ffe5c8',
        success: '#f4ffb8', //lime
        white: 'ffffff',
      },
      borderRadius: {
        'xxl': '20px', // 您可以根据需要调整这个值
      },
    },
  },
  plugins: [],
};
export default config;
