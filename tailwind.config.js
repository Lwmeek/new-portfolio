/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {},
	},
	daisyui: {
		themes: [
			{
				/* Jaguars colors */
				mythemeDark: {
					primary: "#006778" /* Teal */,
					secondary: "#D7A22A" /* Gold */,
					"base-100": "#000000" /* Black */,
					neutral: "#101820" /* Off Black */,
					accent: "#ffffff" /* White */,
					"base-content": "#ffffff" /* White */,
				},
				mythemeLight: {
					primary: "#006778" /* Teal */,
					secondary: "#D7A22A" /* Gold */,
					"base-100": "#ffffff" /* White */,
					neutral: "#101820" /* Off Black */,
					accent: "#ffffff" /* White */,
					"base-content": "#101820" /* Off Black */,
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
