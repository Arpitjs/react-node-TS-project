import styled from 'styled-components';

export const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.color.bg};
  height: 100vh;
  font-family: ${({ theme }) => theme.font.fontPoppins};
  display: flex;
  justify-content: center;
  align-items: center;
`;
