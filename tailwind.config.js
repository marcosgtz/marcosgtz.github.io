/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			'zinc-850': '#444444',
		},
	},
  },
  plugins: [],
}
