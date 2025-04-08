module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'sunny': {
          50: '#fffbea',
          100: '#fef3c7',
          500: '#fbbf24',
          600: '#f59e0b',
        },
        'warm': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          400: '#fb923c',
          600: '#ea580c',
          800: '#7c2d12',
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(251, 191, 36, 0.1)',
      }
    },
  },
  plugins: [],
  
}