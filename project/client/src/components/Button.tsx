import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled/Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>, id?: string) => void;
  primary?: boolean;
  disabled?: boolean;
}

export const Button = ({ type, children, handleClick, disabled, primary }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={handleClick} disabled={disabled} primary={primary}>
      {children ? <div>{children}</div> : null}
    </StyledButton>
  );
};
