/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'voet-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb', // De hoofdkleur blauw
          900: '#1e3a8a', // Donkerblauw voor titels
        },
      },
    },
  },
  plugins: [],
}