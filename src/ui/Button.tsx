import React from 'react'
import { StyledButton } from './Button.styles'

interface Props {
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
  disabled?: boolean
  variant?: "checkout" | "checkin" | "closed"
}

const Button = ({ onClick, type = "button", children, disabled, variant }: Props) => {
  return (
    <StyledButton 
      data-testid='submit-button'
      onClick={onClick} 
      type={type} 
      disabled={disabled}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}

export default Button