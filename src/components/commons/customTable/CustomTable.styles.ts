import styled from 'styled-components';
import { Col } from 'antd';
import { ColProps } from 'antd/es/grid';

interface StyledColProps extends ColProps {
  moveToRight: boolean;
}

const StyledCol = styled(Col).attrs((props: StyledColProps) => ({
  moveToRight: props.moveToRight,
}))`
  &&& {
    margin-inline-start: ${(props) => (props.moveToRight ? '18%' : '3%')};
    transition: margin-inline-start 0.5s;
  }
`;

export default StyledCol;
