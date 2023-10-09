/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"lalezar": ["Lalezar"]
		},
		fontSize: {
			navbar: ["20px", "24px"],
			xxl: [
			  "5rem",
			  {
				lineHeight: "5rem",
			  },
			],
			xl: [
			  "4rem",
			  {
				lineHeight: "4rem",
			  },
			],
			lg: [
			  "3.5rem",
			  {
				lineHeight: "3.5rem",
			  },
			],
			md: [
			  "3rem",
			  {
				lineHeight: "3rem",
			  },
			],
			sm: [
			  "2.5rem",
			  {
				lineHeight: "2.5rem",
			  },
			],
			xs: [
			  "1.5rem",
			  {
				lineHeight: "1.5rem",
			  },
			],
			xxs: [
			  "1rem",
			  {
				lineHeight: "1rem",
			  },
			],
		  },
		extend: {
			colors: {
				inactive: "#989898",
				gray: "rgba(0,0,0,.38)",
				gradient1From: "#5BC4FF",
				gradient1To: "#5C42FF",
				gradient2From: "#EDEAEA",
				gradient2To: "#D8FDFF",
			},
		},
	},
	plugins: [],
}
