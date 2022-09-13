/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
		extend: {
			backgroundColor: ['active'],
			borderWidth: ['hover', 'focus'],
			transform: ['hover'],
		},
	},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
