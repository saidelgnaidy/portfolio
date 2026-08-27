/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        page: 'rgba(var(--c-950), <alpha-value>)',
        fg: 'rgba(var(--c-fg), <alpha-value>)',
        ink: 'rgba(var(--c-ink), <alpha-value>)',
        dark: {
          50: 'rgba(var(--c-50), <alpha-value>)',
          100: 'rgba(var(--c-100), <alpha-value>)',
          200: 'rgba(var(--c-200), <alpha-value>)',
          300: 'rgba(var(--c-300), <alpha-value>)',
          400: 'rgba(var(--c-400), <alpha-value>)',
          500: 'rgba(var(--c-500), <alpha-value>)',
          600: 'rgba(var(--c-600), <alpha-value>)',
          700: 'rgba(var(--c-700), <alpha-value>)',
          800: 'rgba(var(--c-800), <alpha-value>)',
          900: 'rgba(var(--c-900), <alpha-value>)',
          950: 'rgba(var(--c-950), <alpha-value>)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
