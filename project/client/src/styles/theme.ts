import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      disabled: string;
      primary: string;
      hover: string;
      active: string;
      error: string;
      bg: string;
      green: string;
    };
    font: {
      fontPoppins: string;
    };
    shadow: {
      box: string;
      text: string;
    };
  }
}

export const theme: DefaultTheme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    disabled: '#e5e5e5',
    primary: '#6e59ce',
    hover: '#5242a5',
    active: '#5034db',
    error: '#ff2869',
    bg: '#f5f3fd',
    green: '#00e038',
  },
  font: {
    fontPoppins: 'Poppins, sans-serif',
  },
  shadow: {
    box: '8px 9px 13px -4px rgba(159, 143, 184, 0.56)',
    text: '2px 2px 2px #e3d1f0',
  },
};
