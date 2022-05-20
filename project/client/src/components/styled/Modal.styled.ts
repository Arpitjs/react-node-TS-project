import styled from 'styled-components';

export const StyledModal = styled.div`
  .Modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }

  .Modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Modal-content {
    z-index: 100;
    position: relative;
    background-color: white;
    width: 300px;
    height: 200px;
    padding: 1rem;
    border-radius: 10px;
    opacity: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & input {
      width: 80%;
      border: 1px solid ${({ theme }) => theme.color.disabled};
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 0.8rem;

      &::placeholder {
        opacity: 0.5;
      }
    }

    & button:first-child {
      margin-right: 10px;
    }
  }
`;
