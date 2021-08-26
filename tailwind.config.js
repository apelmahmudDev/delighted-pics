module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'delight-banner': 'url(/src/images/banner.png)',
			}),
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#00263D',
			secondary: '#003D63',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
