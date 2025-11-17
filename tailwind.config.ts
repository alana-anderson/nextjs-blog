import type { Config } from 'tailwindcss';

const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-card': 'var(--bg-card)',
        'bg-card-hover': 'var(--bg-card-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-dark': 'var(--text-dark)',
        'accent-purple': 'var(--text-accent-purple)',
        'accent-dark-purple': 'var(--text-accent-dark-purple)',
        'badge-green-bg': 'var(--badge-green-bg)',
        'badge-green-text': 'var(--badge-green-text)',
        'badge-purple-bg': 'var(--badge-purple-bg)',
        'badge-purple-text': 'var(--badge-purple-text)',
        'border-gray': 'var(--border-gray)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-vollkorn)', 'serif'],
      },
      borderRadius: {
        card: '18px',
        badge: '20px',
      },
      maxWidth: {
        content: '1280px',
        about: '1055px',
      },
    },
  },
  darkMode: 'class',
} satisfies Config;

export default config;

