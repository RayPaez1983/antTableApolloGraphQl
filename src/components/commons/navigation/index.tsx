import React from 'react';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-duplicate-imports
import StyledMenu from './CustomNavigation.styles';

const items: MenuProps['items'] = [
  {
    label: <Link to='/companies'>companies</Link>,
    key: 'companies',
  },
  {
    label: <Link to='/tasks'>tasks</Link>,
    key: 'tasks',
  },
  {
    label: <Link to='/activity'>activity journals</Link>,
    key: 'activity-journals',
  },
  {
    label: <Link to='/oportunities'>oportunities</Link>,
    key: 'oportunities',
  },
  {
    label: <Link to='/quotes'>quotes</Link>,
    key: 'quotes',
  },
  {
    label: <Link to='/messages'>messages</Link>,
    key: 'messages',
  },
  {
    label: 'more',
    key: 'alipay7',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];

const CustomNavigation = () => <StyledMenu mode='horizontal' items={items} />;

export default CustomNavigation;
