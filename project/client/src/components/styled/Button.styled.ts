import styled, { css } from 'styled-components';

type Props = {
  disabled?: boolean;
  primary?: boolean;
};

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1.5rem;

  ${props =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      &:hover {
        background-color: ${({ theme }) => theme.color.hover};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.color.active};
      }
    `}
  ${props =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.color.disabled}; ;
    `}
`;
