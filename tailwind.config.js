module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'sans': ['Roboto', 'sans-serif']
		},

		extend: {
			colors: {
				main: {
					50: '#D0BCFF',
					200: '#9A82DB',
					300: '#9f81e1',
					400: '#8466c4',
					500: '#7F67BE',
					600: '#6750A4'
				},
				error: '#B3261E',
				placeholder: '#CCCCCC'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
