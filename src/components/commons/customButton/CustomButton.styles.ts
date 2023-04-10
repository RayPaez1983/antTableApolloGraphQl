import styled from 'styled-components';
import { Button } from 'antd';

const StyledCustomButton = styled(Button).attrs((props) => ({
  ghost: props.ghost,
  danger: props.danger,
}))`
  &&& {
    border: none !important;
    &:hover {
      color: ${(props) => props.ghost && !props.danger && '#fffde1 !important'};
      background-color: ${(props) => props.ghost && ' #1fffff  !important'};
    }
  }
`;

export default StyledCustomButton;
