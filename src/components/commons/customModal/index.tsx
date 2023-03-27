import React, { ReactNode } from 'react';
import { Modal, Space, Typography, Spin } from 'antd';
import { ExclamationCircleFilled, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons';

const { confirm } = Modal;

interface CustomModalProps {
  modalStatus: boolean;
  onCancelAction: () => void;
  onOkAction: () => void;
  modalTitle?: ReactNode | string;
  modalBody?: string | ReactNode;
  closable?: boolean;
  footer?: boolean | ReactNode;
  centered?: boolean;
  cancelText?: string;
  okText?: string;
}

const confirmModal = (
  modalTitle: string,
  modalBody: ReactNode | string,
  okAction: () => void,
  cancelAction: () => void,
  okText?: string,
  cancelText?: string,
) =>
  confirm({
    title: modalTitle || 'Undefined',
    icon: <ExclamationCircleFilled />,
    content: modalBody || 'Undefined',
    centered: true,
    okText: okText || 'Ok',
    cancelText: cancelText || 'Cancel',
    onOk() {
      okAction();
    },
    onCancel() {
      cancelAction();
    },
  });

const CustomModal: React.FC<CustomModalProps> = ({
  modalStatus,
  onOkAction,
  onCancelAction,
  modalTitle,
  modalBody,
  closable,
  footer,
  centered,
  cancelText,
  okText,
}) => (
  <Modal
    title={modalTitle || 'Undefined'}
    centered={centered}
    closable={closable}
    open={modalStatus}
    onOk={onOkAction}
    onCancel={onCancelAction}
    footer={footer}
    okText={okText}
    cancelText={cancelText}
    data-testid='custom-modal'
  >
    {modalBody}
  </Modal>
);

interface CustomLoadingModalProps {
  modalStatus: boolean;
  modalTitle?: ReactNode | string;
}

const CustomLoadingModal: React.FC<CustomLoadingModalProps> = ({ modalStatus, modalTitle }) => {
  const customLoadingSpin = <LoadingOutlined style={{ fontSize: 40, color: '#000539' }} spin />;

  return (
    <Modal
      title={
        <Space>
          <InfoCircleOutlined style={{ fontSize: 'large', color: '#000a68' }} />
          <Typography.Title level={5} style={{ marginBottom: '3px', marginTop: 0 }}>
            {modalTitle || 'Loading System...'}
          </Typography.Title>
        </Space>
      }
      centered
      closable={false}
      open={modalStatus}
      footer={false}
      data-testid='custom-loading-modal'
    >
      <Space align='center' style={{ width: '100%', justifyContent: 'center', height: '100px' }}>
        <Spin data-testid='modal-spin' indicator={customLoadingSpin} />
      </Space>
    </Modal>
  );
};

export { CustomModal, confirmModal, CustomLoadingModal };
