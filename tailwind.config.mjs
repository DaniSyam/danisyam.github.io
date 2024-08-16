/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      background: '#1f2335',
      backgroundAlt: '#292e42',
      foreground: '#c0caf5',
      heading: '#c3e88d',
      link: '#7dcfff',
      linkHover: '#7aa2f7',
    },
    fontFamily: {
      jetbrainsMonoRegular: ['JetBrainsMono-Regular', 'sans-serif'],
      jetbrainsMonoBold: ['JetBrainsMono-Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

// Tambahkan ini di file CSS global Anda (misalnya src/styles/global.css)
/*
@font-face {
  font-family: 'JetBrainsMono';
  src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'JetBrainsMono';
  src: url('/fonts/JetBrainsMono-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
*/