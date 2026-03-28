/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        paramo: {
          50: '#f0f9eb',
          100: '#ddf2d0',
          200: '#bce5a5',
          300: '#90d271',
          400: '#65ba42',
          500: '#489f27',
          600: '#377f1c',
          700: '#2c6318',
          800: '#264f18',
          900: '#1e4215',
          950: '#0d2309',
        },
      },
    },
  },
  plugins: [],
};
