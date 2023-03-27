import React, { ReactNode } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { Space } from 'antd';
import { useLocation } from 'react-router-dom';
import CompanySubHeader from '../subHeader/company';

interface CustomViewContainerProps {
  children: ReactNode;
}

const CustomViewContainer: React.FC<CustomViewContainerProps> = ({ children }) => {
  const location = useLocation();

  const subHeaderComponents = {
    companies: <CompanySubHeader />,
    tasks: <div>Tasks SubHeader</div>,
    activity: <div>Activity Journals SubHeader</div>,
    oportunities: <div>Oportunities SubHeader</div>,
    quotes: <div>Quotes SubHeader</div>,
    messages: <div>Messages SubHeader</div>,
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      {subHeaderComponents[location.pathname.slice(1) as keyof typeof subHeaderComponents]}
      <div>{children}</div>
    </Space>
  );
};

export default CustomViewContainer;
