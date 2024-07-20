import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'color-accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'color-text': 'rgb(var(--color-text) / <alpha-value>)',
        'color-overlay': 'rgb(var(--color-overlay) / <alpha-value>)',
        'color-surface': 'rgb(var(--color-surface) / <alpha-value>)',
        'color-base': 'rgb(var(--color-base) / <alpha-value>)'
      },
      spacing: {
        '90': '22.5rem',
        '160': '40rem',
        '320': '80rem'
      },
      width: {
        // FIXME
        'width-100': '29rem'
      }
    }
  }
}
