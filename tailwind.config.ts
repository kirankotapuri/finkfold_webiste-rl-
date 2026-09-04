import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0A0A0A',
        card: '#111111',
        'light-bg': '#F5F5F5',
        'text-primary': '#FFFFFF',
        'text-secondary': '#999999',
        'text-muted': '#666666',
        accent: '#6366F1',
        saffron: '#C8600A',
        border: '#222222',
        'border-light': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
