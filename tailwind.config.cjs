/** @type {import('tailwindcss').Config} */

// https://tailwindcss.com/
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';

module.exports = {
	// darkMode: 'selector',
	darkMode: 'class',
	content: ["./src/**/*.{htm,html,js,scss}"],
	theme: {
		fontFamily: {
			'openSans': ['Open Sans', 'sans-serif'],
			// 'inter': ['Inter', 'sans-serif'],
			// 'poppins': ['Poppins', 'sans-serif'],
			// 'roboto': ['Roboto', 'sans-serif'],
		},
		screens: {
			'm': '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1328px',
			'2xl': '1440px',
		},
		container: {
			center: true, //centered container
			padding: { //left-right paddings 
				DEFAULT: '1rem',
			}
		},
		extend: {
			// colors: {
			// 	// accent: '#AD3143',
			// 	// accentSubtle: '#F8F3EF',
			// 	// primary: '#090808',
			// 	// secondary: '#3E3535',
			// 	// primaryLight: '#FEF8F8',

			// 	// dmSecondary: '#6B6A73',
			// 	// primaryLight: '#201F26',
			// 	// secondaryLight: '#666473',
			// 	// greyDevider: '#3D3D3D',
			// 	// dmAccent: '#ED4132',
			// 	// telegram: '#37AFE2',
			// 	// green: '#01C27E',
			// 	// grey30: '#F0F0F0',
			// 	// grey20: '#F7F7F7',
			// 	// grey40: '#D1D1D1',
			// 	// grey90: '#201F26',
			// 	// greyLight: '#F9F9F9',
			// },
			boxShadow: {
				neon: " 0 0 5px theme('colors.only'), 0 0 20px theme('colors.custom-black.700')"
			},
			keyframes: {
				animateGradient: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
			},
			borderColor: {
				DEFAULT: '#D1D1D1',
			},
			borderWidth: {
				DEFAULT: '1rem',
			},
			boxShadow: {
				'default': '0 32rem 24rem rgba(217, 217, 217, 0.16)',
			},
			// fontSize: {
			// 	'xs': ['12rem', '16rem'],
			// 	'sm': ['14rem', '20rem'],
			// 	'base': ['16rem', '24rem'],
			// 	'lg': ['18rem', '28rem'],
			// 	'xl': ['20rem', '28rem'],
			// 	'xl-menu-link': ['20rem', '20rem'],
			// 	'2xl': ['24rem', '32rem'],
			// 	'3xl': ['30rem', '36rem'],
			// 	'4xl': ['36rem', '40rem'],
			// 	'5xl': ['48rem', '1'],
			// },
		},
	},
	plugins: [
		// require("@tailwindcss/forms"),
		// require('@tailwindcss/typography'),
		// require("@headlessui/tailwindcss"),
		// require("tailwind-scrollbar"),
		// plugin(({ theme, addUtilities }) => {
		// https://www.youtube.com/watch?v=aSlK3GhRuXA&ab_channel=Ravi-PerfectBase 08:00
		// })
	],
}