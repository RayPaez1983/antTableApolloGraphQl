import React from 'react';
import { Select } from 'antd';
import { TableOutlined } from '@ant-design/icons';
import { TableTypes } from 'types/tableTypes';

interface CustomSelectProps {
  options?: [];
  defaultValue?: string | number;
  customStyle?: object;
  handleColumnSelect?: (value: string[]) => void;
  selectedColumns?: string[];
  columnsDefault?: object[];
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  multiSel?: boolean;
  externalValue?: string | number;
}
const { Option } = Select;
const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  handleChange,
  defaultValue,
  handleColumnSelect,
  selectedColumns,
  columnsDefault,
  customStyle,
  multiSel,
  dataTestId = 'custom-select-id',
  externalValue,
}) => (
  <>
    {' '}
    {multiSel ? (
      <Select
        showArrow
        suffixIcon={
          <div style={{ fontSize: '14px', color: '#000a68', width: '132px', cursor: 'none' }}>
            <TableOutlined style={{ marginRight: '16px' }} />
            Columns
          </div>
        }
        data-testid='columns-select-id'
        mode='multiple'
        style={{ width: '130px', height: '32px' }}
        placeholder='Please select columns to display'
        className='dont-show'
        value={selectedColumns}
        onChange={handleColumnSelect}
        defaultValue={['Columns']}
      >
        {columnsDefault?.map((column: TableTypes) => (
          <Option
            style={{ width: '130px', height: '36px' }}
            key={column.key}
            value={column.key && column.key.replace('delete', '')}
            data-testid='columns-options-id'
          >
            {column.title}
          </Option>
        ))}
      </Select>
    ) : (
      <Select
        defaultValue={defaultValue as unknown as React.FormEvent<HTMLInputElement>}
        style={{ ...customStyle, minWidth: '130px' }}
        data-testid={dataTestId}
        onChange={handleChange}
        options={options}
        value={externalValue as unknown as React.FormEvent<HTMLInputElement>}
      />
    )}
  </>
);

export default CustomSelect;
