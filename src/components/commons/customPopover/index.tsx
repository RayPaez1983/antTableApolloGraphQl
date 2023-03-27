import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';

interface CustomPopoverProps {
  children: ReactNode;
  color?: string;
  title: string;
  placement?: any;
}

const CustomToolTip: React.FC<CustomPopoverProps> = ({ children, color, title, placement }) => (
  <Tooltip title={title} color={color} placement={placement || 'top'}>
    {children}
  </Tooltip>
);

export default CustomToolTip;
