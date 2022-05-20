import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledPlaygroundPage = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.box};
  height: 70vh;
  width: 60vw;
  position: relative;
`;

export const StyledUsersList = styled.table`
  width: 100%;
  border: 1px solid gray;

  thead {
    tr {
      th {
        border: 1px solid gray;
        padding: 5px 10px;
      }
    }
  }

  tbody {
    tr {
      th {
        padding: 0.5rem;

        & button {
          background-color: transparent;
          padding: 0.2rem;

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }

        &:last-child {
          display: flex;
          justify-content: space-around;
          padding: 0 1rem;
        }
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-bottom: 1rem;
  align-self: flex-start;
`;
