import { render, screen, fireEvent } from '@testing-library/react'
import ChildrenList from './ChildrenList'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../global/Theme'
import { useChildrenData } from '../../hooks/useChildrenData'
import { mockChildrenData } from './mockData'

jest.mock('axios', () => {
  // @ts-ignore
  const mockAxios = {
    // @ts-ignore
    create: jest.fn(() => mockAxios),
    get: jest.fn(() => Promise.resolve({ data: { children: [] } })),
    post: jest.fn(() => Promise.resolve({})),
  }
  return mockAxios
})

jest.mock('../../hooks/useChildrenData')

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('ChildrenList', () => {
  beforeEach(() => {
    jest.resetAllMocks()

    jest.mocked(useChildrenData).mockReturnValue({
      childrenData: mockChildrenData,
      loading: false,
      error: null,
      DEFAULT_CHECKOUT_TIME: '16:00',
      checkInChild: jest.fn(),
      checkOutChild: jest.fn(),
      isPastTime: jest.fn(() => false),
      formatToLocalTime: jest.fn((time) => `Formatted time for ${time}`),
    })
  })

  it('renders loading state', () => {
    jest.mocked(useChildrenData).mockReturnValue({
      childrenData: [],
      loading: true,
      error: null,
      DEFAULT_CHECKOUT_TIME: '16:00',
      checkInChild: jest.fn(),
      checkOutChild: jest.fn(),
      isPastTime: jest.fn(),
      formatToLocalTime: jest.fn(),
    })

    renderWithTheme(<ChildrenList />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('renders error state', () => {
    jest.mocked(useChildrenData).mockReturnValue({
      childrenData: [],
      loading: false,
      error: 'Failed to load children data',
      DEFAULT_CHECKOUT_TIME: '16:00',
      checkInChild: jest.fn(),
      checkOutChild: jest.fn(),
      isPastTime: jest.fn(),
      formatToLocalTime: jest.fn(),
    })

    renderWithTheme(<ChildrenList />)

    expect(
      screen.getByText(/failed to load children data/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/go back/i)).toBeInTheDocument()
  })

  it('renders children data', () => {
    renderWithTheme(<ChildrenList />)

    expect(screen.getByText(/children list/i)).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()

    expect(screen.getByText(/checkout/i)).toBeInTheDocument()
    expect(screen.getByText(/check in/i)).toBeInTheDocument()
  })

  it('calls checkInChild when Check In button is clicked', () => {
    const checkInChildMock = jest.fn()

    jest.mocked(useChildrenData).mockReturnValue({
      childrenData: mockChildrenData,
      loading: false,
      error: null,
      DEFAULT_CHECKOUT_TIME: '16:00',
      checkInChild: checkInChildMock,
      checkOutChild: jest.fn(),
      isPastTime: jest.fn(() => false),
      formatToLocalTime: jest.fn(),
    })

    renderWithTheme(<ChildrenList />)

    const checkInButton = screen.getByText(/check in/i)
    fireEvent.click(checkInButton)

    expect(checkInChildMock).toHaveBeenCalledWith('2')
  })

  it('calls checkOutChild when Checkout button is clicked', () => {
    const checkOutChildMock = jest.fn()

    jest.mocked(useChildrenData).mockReturnValue({
      childrenData: mockChildrenData,
      loading: false,
      error: null,
      DEFAULT_CHECKOUT_TIME: '16:00',
      checkInChild: jest.fn(),
      checkOutChild: checkOutChildMock,
      isPastTime: jest.fn(() => false),
      formatToLocalTime: jest.fn(),
    })

    renderWithTheme(<ChildrenList />)

    const checkOutButton = screen.getByText(/checkout/i)
    fireEvent.click(checkOutButton)

    expect(checkOutChildMock).toHaveBeenCalledWith('1')
  })
})
