module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'delight-banner':
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(135, 80, 156, 0.9)), url(/src/images/banner.jpg)',
				// 'delight-banner': "url('/src/images/banner.jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
