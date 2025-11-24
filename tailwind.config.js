// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      screens: {
        // Define a custom screen size that triggers when the viewport height is 600px or less.
        'h-short': { 'raw': '(max-height: 600px)' },
      },
    },
  },
  plugins: [],
}
