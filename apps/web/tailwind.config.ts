import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F54',
        emerald: '#2E8B57',
        amber: '#FF8C00',
        midnight: '#08111A',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
