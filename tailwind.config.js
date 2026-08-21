/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: false,
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        mist: '#f7f7f5',
        line: '#e6e5e2',
        muted: '#6b6b6b',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.875rem, 3vw + 1rem, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.375rem, 1vw + 1rem, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(10,10,10,0.04), 0 8px 24px rgba(10,10,10,0.04)',
        card: '0 12px 40px rgba(10,10,10,0.10)',
        charcoal: '0 2px 6px rgba(54,58,64,0.10), 0 10px 28px rgba(54,58,64,0.16)',
        'charcoal-lg': '0 4px 10px rgba(54,58,64,0.14), 0 16px 36px rgba(54,58,64,0.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.4s cubic-bezier(0.4,0,0.6,1) infinite',
        reveal: 'reveal 0.6s ease-out both',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
