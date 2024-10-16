import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { theme } from './global/Theme'
import { ThemeProvider } from 'styled-components'

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

jest.mock('./components/MainPage', () => () => <div>MainPage Mock</div>)

describe('App', () => {
  it('renders the mocked MainPage component inside the StyledContainer', () => {
    renderWithTheme(<App />)

    expect(screen.getByText('MainPage Mock')).toBeInTheDocument()

    const containerElement = screen.getByText('MainPage Mock')
    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toHaveTextContent('MainPage Mock')
  })
})
