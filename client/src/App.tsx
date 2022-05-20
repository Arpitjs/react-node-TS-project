import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRoutes } from './routes/Routes';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { UsersState } from './state/usersState';
import { getAllUsers } from './services/usersService';
import { StyledApp } from './styles/App.styled';

const App = () => {
  const { users, setUsers } = UsersState();

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const res = await getAllUsers();
      setUsers(res);
    };

    fetchUsers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <BrowserRouter>
          <PagesRoutes />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
