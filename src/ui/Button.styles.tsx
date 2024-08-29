import styled from 'styled-components'

interface StyledButtonProps {
  variant?: "checkout" | "checkin" | "closed"
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 100%;
  margin: 0.5rem;
  outline: none;
  width: auto;
  min-width: 5.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  color: white;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "checkout":
        return theme.colors.checkOut;
      case "checkin":
        return theme.colors.checkIn;
      case "closed":
        return theme.colors.gray;
      default:
        return theme.colors.black;
    }
  }};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    ${({ theme }) => theme.mediaQueries.phone} {
      opacity: 0.7;
    }
  }

  ${({ theme }) => theme.mediaQueries.phone} {
    margin: 0;
  }
  ${({ theme }) => theme.mediaQueries.miniTablet} {
    margin: 0.3rem;
  }
`