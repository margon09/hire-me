const breakpoints = [
  '599px', // phone
  '768px', // miniTablet
  '1024px', // tablet
  '1440px', // desktop
  '1800px', // wide
  '2400px', // ultraWide
]

export const theme = {
  borderRadius: '4px',
  colors: {
    white: '#ffffff',
    black: '#000',
    borders: '#ccc',
    checkOut: '#0a0793',
    checkIn: '#1c6b2e',
    gray: '#6c757d'
  },
  breakpoints,
  mediaQueries: {
    phone: `@media screen and (max-width: ${breakpoints[0]})`,
    miniTablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
    laptop: `@media screen and (min-width: ${breakpoints[2]}) and (max-width: ${breakpoints[3]})`,
    desktop: `@media screen and (min-width: ${breakpoints[3]}) and (max-width: ${breakpoints[4]})`,
    wide: `@media screen and (min-width: ${breakpoints[4]}) and (max-width: ${breakpoints[5]})`,
    ultraWide: `@media screen and (min-width: ${breakpoints[5]})`,
  }
}
