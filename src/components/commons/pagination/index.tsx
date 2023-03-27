import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useContext, useState, useEffect } from 'react';
import { CompaniesContext } from 'src/context/companies.context';
import { TableContext } from 'src/context/table.context';
import { PaginationWrapper } from 'src/styles/customTableStyles';
import CustomToolTip from '../customPopover';

interface PaginationProps {
  totalData: [];
  nextPagesFetch: () => void;
  backPagesFetch: () => void;
  currentPage: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomPagination = ({
  totalData,
  nextPagesFetch,
  currentPage,
  backPagesFetch,
}: PaginationProps) => {
  const { rowsDisplay } = useContext(TableContext);
  const { enterPage, lastPagesFetch, firstPagesFetch } = useContext(CompaniesContext);
  const [pageWatcher, setPageWatcher] = useState(1);
  const totalPage = Math.ceil(totalData.length / rowsDisplay);
  useEffect(() => {
    setPageWatcher(currentPage);
  }, [currentPage]);
  const onFinish = (e: { page: string }) => {
    const eventNumber = Number(e.page);
    enterPage(eventNumber, totalData.length);
  };
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ page: pageWatcher });
  }, [pageWatcher]);
  console.log(currentPage, 'que es esto', totalPage, currentPage === totalPage);
  return (
    <>
      {' '}
      <PaginationWrapper>
        <CustomToolTip title='First Page' color='gray'>
          <DoubleLeftOutlined
            data-testid='first-page-arrow'
            onClick={() => firstPagesFetch(Math.ceil(totalData.length / rowsDisplay))}
            style={currentPage === 1 ? { color: '#c6c4c4' } : { color: '#1C1B1F' }}
          />
        </CustomToolTip>
        <CustomToolTip title='Previous Page' color='gray'>
          <LeftOutlined
            data-testid='back-page-arrow'
            onClick={backPagesFetch}
            style={currentPage === 1 ? { color: '#c6c4c4' } : { color: '#1C1B1F' }}
          />
        </CustomToolTip>
        <p>page</p>

        <Form
          form={form}
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          initialValues={{ page: pageWatcher }}
          style={{
            display: 'flex',
            width: '165px',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Form.Item
            name='page'
            rules={[{ required: true, message: '' }]}
            style={{ margin: '0px', width: '50px' }}
          >
            <Input value={pageWatcher} data-testid='input-enter-page' />
          </Form.Item>
          <p>of {totalPage}</p>
          <Form.Item style={{ margin: '0px', width: '50px' }}>
            <Button type='primary' htmlType='submit' data-testid='button-entered-page'>
              Go!
            </Button>
          </Form.Item>
        </Form>
        <CustomToolTip title='Next Page' color='gray'>
          <RightOutlined
            data-testid='next-page-arrow'
            onClick={nextPagesFetch}
            style={currentPage === totalPage ? { color: '#c6c4c4' } : { color: '#1C1B1F' }}
          />
        </CustomToolTip>
        <CustomToolTip title='Last Page' color='gray'>
          <DoubleRightOutlined
            data-testid='last-page-arrow'
            onClick={() => lastPagesFetch(Math.ceil(totalData.length / rowsDisplay))}
            style={currentPage === totalPage ? { color: '#c6c4c4' } : { color: '#1C1B1F' }}
          />
        </CustomToolTip>
      </PaginationWrapper>
    </>
  );
};

export default CustomPagination;
