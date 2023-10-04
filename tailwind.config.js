/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
			{
				/* Jaguars colors */
				mytheme: {
					primary: "#006778" /* Teal */,
					secondary: "#D7A22A" /* Gold */,
					"base-100": "#000000" /* Black */,
					neutral: "#101820" /* Off Black */,
					accent: "#9F792C" /* Dark Gold */,
					"base-content": "#ffffff" /* White */,
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
