import styled from 'styled-components';
import { Menu } from 'antd';

const StyledMenu = styled(Menu)`
  &&& {
    background: transparent;
    li {
      color: white;
      height: 35px;
      margin: auto;
      border-radius: 8px !important;
      &:hover {
        color: #000a68 !important;
        background-color: #dcdffb !important;
        div {
          color: #000a68 !important;
        }
      }
      &:after {
        border-bottom: 0 !important;
      }
      div {
        color: white;
        width: 100% !important;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
      }
    }
    span {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
  }
`;

export default StyledMenu;
