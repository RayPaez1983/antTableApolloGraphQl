import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { Space } from 'antd';
import CustomDropdown from '../dropdownMenu';
import CustomNavigation from '../navigation';

const CustomExtendedMenu = () => (
  <Space align='center' size='large' style={{ marginRight: 'auto' }}>
    <CustomDropdown />
    <CustomNavigation />
  </Space>
);

export default CustomExtendedMenu;
