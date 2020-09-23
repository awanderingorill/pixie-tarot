import { createGlobalStyle } from 'styled-components';

import MariaWoff from './maria.woff';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

    @font-face {
        font-family: "Maria";
        src: local('Maria'), local('Maria'),
        url(${MariaWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;