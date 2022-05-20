import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSignupPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    box-shadow: ${({ theme }) => theme.shadow.box};
    & span {
      align-self: start;
    }
  }
`;

export const StyledNavLink = styled(NavLink)``;
