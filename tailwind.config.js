/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
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
					accent: "#9F792C" /* Dark Gold */,
					"base-content": "#ffffff" /* White */,
				},
				mythemeLight: {
					primary: "#006778" /* Teal */,
					secondary: "#D7A22A" /* Gold */,
					"base-100": "#ffffff" /* White */,
					neutral: "#101820" /* Off Black */,
					accent: "#9F792C" /* Dark Gold */,
					"base-content": "#000000" /* Black */,
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
