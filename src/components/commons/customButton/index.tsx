import React, { ReactNode } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import StyledCustomButton from './CustomButton.styles';
import CustomToolTip from '../customPopover';

interface CustomButtonProps {
  title?: string;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  size?: 'large' | 'middle' | 'small';
  icon?: ReactNode;
  disabled?: boolean;
  shape?: 'default' | 'circle' | 'round';
  block?: boolean;
  danger?: boolean;
  ghost?: boolean;
  onlyIcon?: boolean;
  href?: string;
  loading?: boolean | { delay: number };
  onClick?: () => void;
  ClassName?: string;
  dataTestId?: string;
  style?: object;
  tooltipText?: string;
  tooltipColor?: string;
  placement?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  type,
  size,
  onlyIcon,
  icon = onlyIcon && <QuestionCircleOutlined />,
  disabled,
  shape,
  block,
  danger,
  ghost,
  loading,
  ClassName,
  onClick,
  href,
  dataTestId,
  style,
  tooltipText,
  tooltipColor,
  placement,
}) => (
  <CustomToolTip title={tooltipText as string} color={tooltipColor} placement={placement}>
    <StyledCustomButton
      type={type || 'default'}
      shape={shape || 'default'}
      size={size || 'large'}
      icon={icon}
      disabled={disabled}
      block={block}
      danger={danger}
      ghost={ghost}
      loading={loading}
      href={href}
      onClick={onClick}
      className={ClassName}
      data-testid={dataTestId || 'customButton'}
      style={style}
    >
      {onlyIcon ? '' : title || 'unknown'}
    </StyledCustomButton>
  </CustomToolTip>
);

export default CustomButton;
