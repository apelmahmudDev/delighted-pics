module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'delight-banner':
					'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 38, 61, 0.5)), url(/src/images/banner.jpg)',
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
