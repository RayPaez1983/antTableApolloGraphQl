import React from 'react';
import { Button } from 'antd';

interface PrimaryButtonProps {
  title: string;
  onClick: () => void;
  ClassName: string;
}
const PrimaryButton = ({ title, onClick, ClassName }: PrimaryButtonProps) => (
  <Button type='primary' size='large' onClick={onClick} className={ClassName}>
    {title}
  </Button>
);

export default PrimaryButton;
