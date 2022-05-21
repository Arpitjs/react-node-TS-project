import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 1.5rem;
    text-align: center;
    text-shadow: ${({ theme }) => theme.shadow.text};
  }
`;
