import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import MainPage from './MainPage'
import { ThemeProvider } from 'styled-components'
import { theme } from '../global/Theme'

jest.mock('./childrenList/ChildrenList', () => () => (
  <div>Mocked ChildrenList</div>
))

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('MainPage', () => {
  it('renders the title and the mocked ChildrenList component', () => {
    renderWithTheme(<MainPage />)

    const headingElement = screen.getByRole('heading', { name: /Nursery app/i })
    expect(headingElement).toBeInTheDocument()

    const mockedChildrenListElement = screen.getByText('Mocked ChildrenList')
    expect(mockedChildrenListElement).toBeInTheDocument()
  })
})
