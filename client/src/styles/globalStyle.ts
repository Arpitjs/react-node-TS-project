import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};
* {
    box-sizing: border-box;
}
html {
    color: black;
};
body { 
    box-sizing: inherit;
}
`;
