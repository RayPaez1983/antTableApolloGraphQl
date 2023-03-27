import styled from 'styled-components';
import { Button } from 'antd';

const StyledCustomButton = styled(Button).attrs((props) => ({
  ghost: props.ghost,
  danger: props.danger,
}))`
  &&& {
    border: none !important;
    &:hover {
      color: ${(props) => props.ghost && !props.danger && '#000a68 !important'};
      background-color: ${(props) => props.ghost && '#dcdffb !important'};
    }
  }
`;

export default StyledCustomButton;
