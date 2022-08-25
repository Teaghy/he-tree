// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('tailwindcss/defaultConfig')

const sizeNamed = {
  sm: '30px',
  md: '34px',
  lg: '42px',
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ['Cairo', ...defaultConfig.theme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.gray,
        warning: colors.amber,
        danger: colors.red,
        success: colors.green,
      },
      borderRadius: { base: defaultConfig.theme.borderRadius.DEFAULT },
      width: { ...sizeNamed },
      height: { ...sizeNamed },
      lineHeight: { ...sizeNamed },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
