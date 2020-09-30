import { createGlobalStyle } from 'styled-components';

import RecoletaWoff from './Recoleta-Bold.woff';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

    @font-face {
        font-family: "Recoleta Bold";
        src: local('Recoleta Bold'), local('Recoleta Bold'),
        url(${RecoletaWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;