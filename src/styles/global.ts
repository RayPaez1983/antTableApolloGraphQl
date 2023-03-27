// eslint-disable-next-line import/no-unresolved
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Libre Franklin';
  
  }
  main{
    background-color: #ffffff;
  }
  .dont-show .ant-select-selection-item {
    display: none !important;
  }
  .ant-table-content{
    color: #858585;

  }
  .ant-table-wrapper .ant-table {
  background-color: transparent;
  color: #858585;
  font-size: 16px;
}
.ant-table-wrapper .ant-table-container table > thead > tr:first-child > *:first-child {
  width: 5%;
  padding-top: 52px;
}

.ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child{
  background: white !important;
  z-index: 100;
  display: none;
}
.ant-table-wrapper .ant-table-thead > tr > th {
  &:nth-child(17) {
    background: transparent;
   
 };
 
}
.ant-table-wrapper .ant-table-filter-trigger.active{
  display: none;
  }
}
.ant-table-wrapper .ant-table-ping-right .ant-table-cell-fix-right-first::after{
  box-shadow: none;
}
.ant-table-wrapper .ant-table-thead >tr>td{
  background: white !important;
  border-bottom: 1px solid black;
 
}
.ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child
.ant-checkbox-inner {
  width: 22px !important;
  height: 22px !important;
  border: 1px solid #C6C4C4 !important;
  border-radius: 5px !important; 
}
.ant-table-wrapper .ant-table-thead > tr > th {
  background-color: #ffffff;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 10;
}
*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

*::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

*::-webkit-scrollbar-thumb {
  background: #858585;
  border: 1px solid #858585;
  border-radius: 5px;
  transition: .5s;
}

*::-webkit-scrollbar-thumb:hover {
  background: #858585;
}

*::-webkit-scrollbar-thumb:active {
  background: #858585;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 0;
}

*::-webkit-scrollbar-track:hover {
  background: #ffffff;
}

*::-webkit-scrollbar-track:active {
  background: #ffffff;
}

*::-webkit-scrollbar-corner {
  background: transparent;
}
.ant-table-wrapper .ant-table-thead >tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  background-color: #D9D9D9;
  top: 74%;
}

.ant-table-pagination-right {
  display: none !important;
}

.react-resizable {
  position: relative;
  background-clip: padding-box;
}

.react-resizable-handle {
  position: absolute;
  width: 10px;
  height: 100%;
  bottom: 0;
  right: -5px;
  cursor: col-resize;
  z-index: 1;
}

.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected {
  background-color: #dcdffb !important;
  color: #000a68 !important;
}

:where(.css-dev-only-do-not-override-sk7ap8).ant-table-wrapper .ant-table-column-sorter {
  margin-top: auto;
  margin-bottom: 3px;
  margin-inline-start: 7px !important;
}

.ant-modal-content {
  border-radius: 0 !important;
}
.ant-btn-primary {
  background-color: #000a68;
}
`;

export default GlobalStyles;
