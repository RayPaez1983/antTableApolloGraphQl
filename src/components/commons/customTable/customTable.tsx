/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useEffect } from 'react';
import { Table, Space, Typography } from 'antd';
import { ExclamationCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import { TableContext } from 'src/context/table.context';
import { CompaniesContext } from 'src/context/companies.context';
import { CustomModal } from 'src/components/commons/customModal';
import ReactDragListView from 'react-drag-listview';
import { CustomTableTypes } from '../../../../types/contactsTypes';
import StyledCol from './CustomTable.styles';
import ResizableTitle from '../resizableTitle';
import CustomButton from '../customButton';

const CustomTable = ({ data, columns }: CustomTableTypes) => {
  const {
    rowsDisplay,
    moveToRightTable,
    enterPage,
    totalPages,
    handleSetCompaniesCol,
    randomColumns,
    filteredColumns,
  } = useContext(TableContext);

  const {
    handleAllDataSelection,
    noSelectedRowModal,
    handleNoSelectedRowModal,
    undoMoment,
    handleUndoMoment,
    handleOneDeleteSelection,
    pagination,
  } = useContext(CompaniesContext);
  useEffect(() => {
    randomColumns(columns);
  }, [columns]);
  console.log(rowsDisplay, 'vamos ramon');
  const components = {
    header: {
      cell: ResizableTitle,
    },
  };
  const noSelectedRowModalElement = (
    <CustomModal
      modalStatus={noSelectedRowModal}
      onCancelAction={() => 0}
      onOkAction={() => 0}
      centered
      closable={false}
      modalTitle={
        <Space>
          <ExclamationCircleFilled style={{ fontSize: 'large', color: '#faad14' }} />
          <Typography.Title level={5} style={{ marginBottom: '3px', marginTop: 0 }}>
            Warning
          </Typography.Title>
        </Space>
      }
      modalBody={
        <Space>
          <Typography.Text>You need to select at least one item to remove it.</Typography.Text>
        </Space>
      }
      footer={
        <Space>
          <CustomButton
            type='primary'
            title='OK'
            onClick={handleNoSelectedRowModal}
            style={{
              fontSize: '14px',
              height: '32px',
              padding: '4px 15px',
            }}
          />
        </Space>
      }
    />
  );

  const undoModal = (
    <CustomModal
      modalStatus={undoMoment}
      onCancelAction={handleUndoMoment}
      onOkAction={handleOneDeleteSelection}
      centered
      closable={false}
      cancelText='Undo'
      okText='Done'
      modalTitle={
        <Space>
          <CheckCircleOutlined style={{ fontSize: 'large', color: '#84d253' }} />
          <Typography.Title level={5} style={{ marginBottom: '3px', marginTop: 0 }}>
            The record was deleted
          </Typography.Title>
        </Space>
      }
      modalBody={
        <Space>
          <Typography.Text>
            Not what you want? Click on te UNDO button and the information will be recovered.
          </Typography.Text>
        </Space>
      }
    />
  );

  const onDragEnd = (fromIndex: number, toIndex: number) => {
    const nextColumn = [...filteredColumns];
    const item = nextColumn.splice(fromIndex - 1, 1)[0];
    nextColumn.splice(toIndex - 1, 0, item);
    randomColumns(nextColumn);
  };

  const handleResize =
    (index: number) =>
    (e: React.FormEvent<HTMLInputElement>, { size }: any) => {
      const nextColumns = [...filteredColumns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };

      handleSetCompaniesCol(nextColumns);
    };

  const columnsData = filteredColumns.map((col, index) => ({
    ...col,
    onHeaderCell: (column: any) => ({
      width: column.width,
      minWidth: column.minWidth,
      onResize: handleResize(index),
    }),
  }));
  return (
    <StyledCol span={24} moveToRight={moveToRightTable}>
      {noSelectedRowModalElement}
      {undoModal}
      <ReactDragListView.DragColumn
        onDragEnd={onDragEnd}
        nodeSelector='th'
        handleSelector='.dragHandler'
        ignoreSelector='react-resizable-handle'
      >
        <Table
          pagination={{
            defaultPageSize: rowsDisplay,
            pageSize: rowsDisplay,
            position: ['topRight'],
            simple: true,
            onChange: (e: number) => {
              enterPage(e);
            },
            current: pagination.current,
            showTotal: (total) => totalPages(Math.ceil(total / rowsDisplay))!,
          }}
          rowKey={(record: { id: string }) => record.id}
          components={components}
          rowSelection={{
            onChange: (e) => {
              handleAllDataSelection(e);
            },
          }}
          dataSource={data as []}
          columns={columnsData as []}
          rowClassName='editable-row'
          scroll={{ y: 'calc(100vh - 360px)', x: '100vw' }}
          data-testid='userTest'
        />
      </ReactDragListView.DragColumn>
    </StyledCol>
  );
};
export default CustomTable;
