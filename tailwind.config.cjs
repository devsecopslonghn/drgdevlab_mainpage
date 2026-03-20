/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // All tied to CSS variables — switch theme = all colors update everywhere
        primary:            'rgb(var(--color-primary) / <alpha-value>)',
        'primary-hover':    'rgb(var(--color-primary-hover) / <alpha-value>)',
        'background-dark':  'rgb(var(--color-bg) / <alpha-value>)',
        'background-light': 'rgb(var(--color-bg) / <alpha-value>)',
        'surface-dark':     'rgb(var(--color-surface) / <alpha-value>)',
        'surface-border':   'rgb(var(--color-border) / <alpha-value>)',
        'border-dark':      'rgb(var(--color-border) / <alpha-value>)',
        'card-dark':        'rgb(var(--color-surface) / <alpha-value>)',
        'text-secondary':   'rgb(var(--color-muted) / <alpha-value>)',
        'text-muted':       'rgb(var(--color-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:  '0.5rem',
        xl:  '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
