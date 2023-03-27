import styled from 'styled-components';
import { Typography, Input, Space, Row, Image } from 'antd';

const { Title } = Typography;
const { Search } = Input;

const StyledTitle = styled(Title)`
  &&& {
    font-weight: normal;
    margin-top: 5px;
    margin-left: 25px;
  }
`;

const StyledSearch = styled(Search)`
  &&& {
    width: 300px;
  }
`;

const StyledSpace = styled(Space)`
  &&& {
    padding: 15px 0 0 0 !important;
    min-width: max-content;
    width: 100% !important;
    gap: 0px !important;
  }
`;

const StyledRow = styled(Row)`
  &&& {
    border-bottom: 1px solid #000a68;
    padding-bottom: 15px;
  }
`;

const StyledImage = styled(Image)`
  &&& {
    width: 45px;
    margin-right: 15px;
  }
`;

export { StyledTitle, StyledSearch, StyledSpace, StyledRow, StyledImage };
