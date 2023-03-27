import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import ReactDragListView from 'react-drag-listview';
import ResizableTitle from '../resizableTitle';

const CustomTestTable = () => {
  const [fromIndexState, setFromIndexState] = useState(0);
  const [toIndexState, setToIndexState] = useState(0);
  const [columns, setColumns] = useState([
    {
      title: (
        <span className='dragHandler' style={{ cursor: 'pointer' }}>
          Key
        </span>
      ),
      dataIndex: 'key',
      render: (text: string) => <span>{text}</span>,
      width: 50,
    },
    {
      title: (
        <span className='dragHandler' style={{ cursor: 'pointer' }}>
          Name
        </span>
      ),
      dataIndex: 'name',
      width: 200,
    },
    {
      title: (
        <span className='dragHandler' style={{ cursor: 'pointer' }}>
          Gender
        </span>
      ),
      dataIndex: 'gender',
      width: 100,
    },
    {
      title: (
        <span className='dragHandler' style={{ cursor: 'pointer' }}>
          Age
        </span>
      ),
      dataIndex: 'age',
      width: 100,
    },
    {
      title: (
        <span className='dragHandler' style={{ cursor: 'pointer' }}>
          Address
        </span>
      ),
      dataIndex: 'address',
      width: 100,
    },
  ]);

  const data = [
    {
      key: '1',
      name: 'Boran',
      gender: 'male',
      age: '12',
      address: 'New York',
    },
    {
      key: '2',
      name: 'JayChou',
      gender: 'male',
      age: '38',
      address: 'TaiWan',
    },
    {
      key: '3',
      name: 'Lee',
      gender: 'female',
      age: '22',
      address: 'BeiJing',
    },
    {
      key: '4',
      name: 'ChouTan',
      gender: 'male',
      age: '31',
      address: 'HangZhou',
    },
    {
      key: '5',
      name: 'AiTing',
      gender: 'female',
      age: '22',
      address: 'Xi’An',
    },
  ];

  console.log('fromIndexState', fromIndexState);
  console.log('toIndexState', toIndexState);

  useEffect(() => {
    const asd = (prev: any) => {
      const nextColumns = [...prev];
      const item = nextColumns.splice(fromIndexState, 1)[0];
      nextColumns.splice(toIndexState, 0, item);
      return nextColumns;
    };
    const result = asd(columns);
    console.log(result);
  }, []);

  const onDragEnd = (fromIndex: number, toIndex: number) => {
    setColumns((prev) => {
      const nextColumns = [...prev];
      const item = nextColumns.splice(fromIndex, 1)[0];
      nextColumns.splice(toIndex, 0, item);
      setFromIndexState(fromIndex);
      setToIndexState(toIndex);
      return nextColumns;
    });
  };

  const handleSettingColumns = (internalData: any) => {
    setColumns(internalData);
  };

  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  const handleResize =
    (index: number) =>
    (e: React.FormEvent<HTMLInputElement>, { size }: any) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };

      handleSettingColumns(nextColumns);
    };

  const columnsData = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column: any) => ({
      width: column.width,
      minWidth: column.minWidth,
      onResize: handleResize(index),
    }),
  }));

  return (
    <Space data-testid='space-footer-id' align='center'>
      <ReactDragListView.DragColumn
        onDragEnd={onDragEnd}
        nodeSelector='th'
        handleSelector='.dragHandler'
        ignoreSelector='react-resizable-handle'
      >
        <Table bordered components={components} columns={columnsData as []} dataSource={data} />
      </ReactDragListView.DragColumn>
    </Space>
  );
};

export default CustomTestTable;
