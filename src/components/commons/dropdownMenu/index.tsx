/* eslint-disable arrow-body-style */
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space, MenuProps } from 'antd';
import CustomButton from '../customButton';

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'another sub menu',
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const CustomDropdown = () => {
  return (
    <Space>
      <Dropdown menu={{ items }} placement='bottomLeft' trigger={['click']}>
        <CustomButton
          dataTestId='menu-outlined'
          shape='circle'
          icon={<MenuOutlined />}
          onlyIcon
          ghost
          tooltipText='Full Menu'
          tooltipColor='gray'
        />
      </Dropdown>
    </Space>
  );
};

export default CustomDropdown;
