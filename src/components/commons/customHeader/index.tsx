import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { Space, Row, Col } from 'antd';
import {
  PlusCircleOutlined,
  QuestionOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { StyledHeader, StyledTitle, StyledAvatar } from './CustomHeader.styles';
import CustomButton from '../customButton';
import CustomExtendedMenu from '../extendedMenu';

const CustomHeader = () => {
  const iconsMap = [
    {
      id: '1',
      icon: <PlusCircleOutlined />,
      testid: 'plus-circle-outlined',
    },
    {
      id: '2',
      icon: <QuestionOutlined />,
      testid: 'question-outlined',
    },
    {
      id: '3',
      icon: <SearchOutlined />,
      testid: 'search-outlined',
    },
    {
      id: '4',
      icon: <BellOutlined />,
      testid: 'bell-outlined',
    },
  ];

  return (
    <StyledHeader data-testid='custom-header-id'>
      <Row align='middle' data-testid='custom-header-row-container-id'>
        <StyledTitle>Raymonds Tables</StyledTitle>
        <CustomExtendedMenu />
        <Col>
          <Space align='center' size='large' data-testid='custom-header-space-container-id'>
            {iconsMap.map((icons) => (
              <CustomButton
                key={icons.id}
                dataTestId={icons.testid}
                shape='circle'
                icon={icons.icon}
                onlyIcon
                ghost
              />
            ))}
            <StyledAvatar data-testid='avatar-view' size={40} icon={<UserOutlined />} />
          </Space>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default CustomHeader;
