/** @type {import('tailwindcss').Config} */

// https://tailwindcss.com/
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';

module.exports = {
	darkMode: 'selector',
	content: ["./src/**/*.{htm,html,js,scss}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			}
		},
		screens: {
			'm': '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1300px',
			'2xl': '1440px',
		},
		// перезапись существующих класов
		// colors: {
		// 	black,
		// 	transparent,
		// 	white,
		// 	primary: '#333',
		// 	gray: {
		// 		400: '#222222',
		// 		500: '#333333',
		// 		600: '#444444',
		// 		800: '#555555',
		// 	},
		// 	// purple: '#222222',
		// 	purple: {
		// 		200: '#222222',
		// 		500: '#333333',
		// 		700: '#444444',
		// 		800: '#555555',
		// 	},
		// 	aqua: '#00dbf1',
		// },

		// fontSize: {
		// 	sm: '1rem',
		// 	base: '1.3rem',
		// 	xl: '1.5rem',
		// 	'2xl': '1.8rem',
		// 	'3xl': '2rem',
		// 	'4xl': '3rem',
		// 	'5xl': '4rem',
		// }

		// расширение кастомными класами
		extend: {
			colors: {
				'only': '#333',
				'custom-black': {
					200: '#111',
					700: '#000',
				},
			},
			boxShadow: {
				neon: " 0 0 5px theme('colors.only'), 0 0 20px theme('colors.custom-black.700')"
			}
		},
	},
	plugins: [
		// plugin(({ theme, addUtilities }) => {
		// https://www.youtube.com/watch?v=aSlK3GhRuXA&ab_channel=Ravi-PerfectBase 08:00
		// })
	],
}