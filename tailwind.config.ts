/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {

  theme: {

    extend: {
      colors: {
        merah: {
          DEFAULT: '#F22727',
          50: '#FCD4D4',
          100: '#FBC1C1',
          200: '#F99A9A',
          300: '#F77474',
          400: '#F44D4D',
          500: '#F22727',
          600: '#D40D0D',
          700: '#9F0A0A',
          800: '#6A0606',
          900: '#350303',
          950: '#1B0202',
        },
      },
      fontFamily: {
        body: ['Rethink Sans', 'Rethink Sans fallback', ...fontFamily.sans],
        title: ['Work Sans', 'Work Sans fallback', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
}
