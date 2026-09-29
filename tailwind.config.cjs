/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'background-dark': 'rgb(var(--color-bg) / <alpha-value>)',
        'background-light': 'rgb(var(--color-bg) / <alpha-value>)',
        'surface-dark': 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-border': 'rgb(var(--color-border) / <alpha-value>)',
        'border-dark': 'rgb(var(--color-border) / <alpha-value>)',
        'card-dark': 'rgb(var(--color-surface) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-muted) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-muted) / <alpha-value>)',
        'text-subtle': 'rgb(var(--color-subtle) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        quiet: '0 18px 60px rgba(0,0,0,.18)',
      },
      borderRadius: {
        DEFAULT: '.375rem',
        lg: '.625rem',
        xl: '.875rem',
        '2xl': '1.125rem',
        full: '9999px',
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
