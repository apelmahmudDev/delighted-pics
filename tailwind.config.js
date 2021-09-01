module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'delight-banner':
					'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 38, 61, 0.5)), url(/src/images/banner.jpg)',
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

// 'delight-banner': 'url(/src/images/banner.png)',
