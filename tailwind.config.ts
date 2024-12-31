import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'md': '640px',
      'l': '1024px',
      'xl': '1280px',
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
        secondary: {
          100: '#fdf9f3',
          300: '#faefd9', // light creamy
        },
        skin: '#ffe5c8',
        success: '#f4ffb8', // lime
        cancel: '#E5E7EB', // Slate-200
        white: 'ffffff',
        lightskin: '#faefe1',
      },
      borderRadius: {
        'xs': '4px',
        's': '8px',
        'm': '10px',
        'l': '16px',
        'xl': '20px',
        'xxl': '24px',
      },
      zIndex: {
        'z-999': '999',
      }
    },
  },
  plugins: [],
};
export default config;
