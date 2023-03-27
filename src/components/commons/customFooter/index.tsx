import React from 'react';
import { Space } from 'antd';
import { StyledFooter, StyledTitle, StyledImage } from './CustomFooter.styles';
import logo from '../../../images/repfabric.png';

const CustomFooter = () => (
  <StyledFooter data-testid='custom-footer-id'>
    <Space data-testid='space-footer-id' align='center'>
      <StyledTitle level={5}>Powered by</StyledTitle>
      <StyledImage src={logo} preview={false} alt='Powered by Repfabric' />
    </Space>
  </StyledFooter>
);

export default CustomFooter;
