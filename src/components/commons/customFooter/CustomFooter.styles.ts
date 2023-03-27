import styled from 'styled-components';
import { Layout, Typography, Image } from 'antd';

const { Footer } = Layout;
const { Title } = Typography;

const StyledFooter = styled(Footer)`
  &&& {
    padding: 8px 50px;
    border-top: 1px solid black;
  }
`;

const StyledTitle = styled(Title)`
  &&& {
    margin: auto;
    color: #448aa0;
  }
`;

const StyledImage = styled(Image)`
  &&& {
    width: 140px;
  }
`;

export { StyledFooter, StyledTitle, StyledImage };
