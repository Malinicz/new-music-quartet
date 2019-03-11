import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const primaryRegular = require('assets/fonts/BorgiaPro-Regular.otf');
const primaryBold = require('assets/fonts/BorgiaPro-Bold.otf');
const secondaryMedium = require('assets/fonts/GillSans-Medium.otf');

export default createGlobalStyle`
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

  @font-face {
    font-family: ${theme.secondaryFontFamily};
    src: url('${secondaryMedium}');
    font-weight: ${theme.fontWeight.medium};
    font-style: normal;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: ${theme.primaryFontFamily}, arial, sans-serif;
    font-style: normal;
    font-weight: ${theme.fontWeight.regular};
    font-size: 17px;
    color: ${theme.colors.darker};
    background-color: ${theme.colors.darker};
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
