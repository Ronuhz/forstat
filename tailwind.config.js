/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-gold': '#f3af19',
				'primary-gray': '#212529',
			},
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				burbank: ['Burbank Big Regular', 'sans-serif'],
				'burbank-small-black': ['Burbank Big Regular', 'sans-serif'],
			},
			minWidth: {
				16: '16rem',
			},
			minHeight: {
				20: '20rem',
			},
			keyframes: {
				'button-not-hover': {
					from: { 'background-color': '#212529' },
					to: { 'background-color': '#f3af19' },
				},
				'button-hover': {
					from: { 'background-color': '#f3af19' },
					to: { 'background-color': '#212529', color: '#f3af19' },
				},
			},
			animation: {
				'primary-hover': 'button-hover 0.2s forwards',
				'primary-not-hover': 'button-not-hover 0.2s forwards',
			},
		},
	},
	plugins: [],
}
