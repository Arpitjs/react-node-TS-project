import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledWelcomePage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWelcomeModal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.box};
  gap: 2rem;

  & h1 {
    font-size: 1.5rem;
    text-align: center;
    text-shadow: ${({ theme }) => theme.shadow.text};
  }

  & div {
    display: flex;
    gap: 1rem;

    & p {
      align-self: center;
    }
  }
`;

export const StyledNavLink = styled(NavLink)``;
