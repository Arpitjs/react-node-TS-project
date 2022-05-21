import styled from 'styled-components';

export const StyledInput = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  height: 50px;
  & label {
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  & p {
    color: ${({ theme }) => theme.color.error};
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    margin-left: 1px;
    margin: 0.4rem 2px 0;
  }
  & input {
    border: 1px solid ${({ theme }) => theme.color.disabled};
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 0.8rem;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;
