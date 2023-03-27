import styled from 'styled-components';
import { Layout, Typography, Avatar } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const StyledHeader = styled(Header)`
  &&& {
    background-color: #000a68;
    padding: 0 20px;
    min-width: max-content;
  }
`;

const StyledTitle = styled(Title)`
  &&& {
    margin: auto 20px;
    color: white;
    font-weight: normal;
  }
`;

const StyledAvatar = styled(Avatar)`
  &&& {
    background-color: #87d068;
    margin-bottom: 6px;
  }
`;

export { StyledHeader, StyledTitle, StyledAvatar };
