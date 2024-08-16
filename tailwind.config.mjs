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
			jetbrainsmonoregular: "JetBrainsMonoRegular",
			jetbrainsmonobold: "JetBrainsMonoRegular"
		},
		extend: {},
	},
	plugins: [],
}
