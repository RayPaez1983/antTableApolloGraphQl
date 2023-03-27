// eslint-disable-next-line import/no-unresolved
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .ant-table-pagination-right {
    display: none !important;
  }
  main{
    background-color: #ffffff;
  }
  .dont-show .ant-select-selection-item {
    display: none !important;
  }
 
`;

export default GlobalStyles;
