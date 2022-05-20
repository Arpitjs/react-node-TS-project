import styled from 'styled-components';

export const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  & label {
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  & input {
    cursor: pointer;
    margin: 10px 0;
  }
`;
