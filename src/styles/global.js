import { injectGlobal } from 'styled-components';
import theme from './theme';

const primaryRegular = require('assets/fonts/BorgiaPro-Regular.otf');
const primaryBold = require('assets/fonts/BorgiaPro-Bold.otf');

injectGlobal`
  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primaryRegular}');
    font-weight: ${theme.fontWeight.regular};
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primaryBold}');
    font-weight: ${theme.fontWeight.bold};
    font-style: normal;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: ${theme.primaryFontFamily}, arial, sans-serif;
    font-style: normal;
    font-weight: ${theme.fontWeight.regular};
    font-size: 16px;
    color: ${theme.colors.darker};
    background-color: ${theme.colors.brighter};
    overflow-x: hidden;
  }

  button, input, textarea {
    font-family: ${theme.primaryFontFamily};
    font-size: inherit;
    color: inherit;
  }

  a {
    text-decoration: none;
  }

  * {
    border: 0px solid lightgray;
    box-sizing: border-box;
  }

`;
