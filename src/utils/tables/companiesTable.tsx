/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
import { Input, InputRef, Table } from 'antd';
import React, { useRef, useState } from 'react';
import { CompaniesTypes } from 'types/companiesTypes';
import { CloseCircleOutlined } from '@ant-design/icons';
import { FilterConfirmProps, FilterDropdownProps } from 'antd/es/table/interface';
import { TitleTableColumn } from 'src/styles/customTableStyles';

// eslint-disable-next-line no-duplicate-imports
import type { TableRowSelection } from 'antd/es/table/interface';

type DataIndex = keyof CompaniesTypes;

const CompaniesColumns = () => {
  const searchInput = useRef<InputRef>(null);
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedKeysState, setSelectedKeysState] = useState(['']);
  const [searchedColumn, setSearchedColumn] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<CompaniesTypes> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_: [], index: number) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_: [], index: number) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm({ closeDropdown: false });
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const inputStyles = { border: '1px solid #000A68', borderRadius: '8px', height: '26px' };
  const textStyles: object = { userSelect: 'none' };
  const divContainerStyles: object = { cursor: 'pointer' };

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Name</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      // filterDropdownOpen: true,
      onFilter: (value: string, record: CompaniesTypes) =>
        record.name
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (text: string) => (searchedColumn === 'name' ? text : text),
    },
    {
      key: 'companyType',
      dataIndex: 'companyType',
      sorter: (a: any, b: any) => a.companyType.name.localeCompare(b.companyType.name),
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Company Type</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.companyType.name
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (companyType: CompaniesTypes) =>
        searchedColumn === 'companyType' ? companyType.name : companyType.name,
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Phone</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.phone[0].phone
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (phone: any) => (searchedColumn === 'phone' ? phone[0].phone : phone[0].phone),
    },
    {
      key: 'salesTeam',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Sales Team</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'salesTeam',
      sorter: (a: any, b: any) => a.salesTeam.name.localeCompare(b.salesTeam.name),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.salesTeam.name
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (salesTeam: CompaniesTypes) =>
        searchedColumn === 'SALES_TEAM' ? salesTeam.name : salesTeam.name,
    },
    {
      key: 'city',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>City</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'address',
      sorter: (a: any, b: any) => a.address[0].city.localeCompare(b.address[0].city),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.address[0].city
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (address: any) => (searchedColumn === 'city' ? address[0].city : address[0].city),
    },
    {
      key: 'state',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>State</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'address',
      sorter: (a: any, b: any) => a.address[0].state.localeCompare(b.address[0].state),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.address[0].state
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (address: any) => (searchedColumn === 'state' ? address[0].state : address[0].state),
    },
    {
      key: 'POBox',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>PO Box</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'address',
      sorter: (a: any, b: any) => a.address[0].pobox.localeCompare(b.address[0].pobox),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.address[0].state
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (address: any) => (searchedColumn === 'state' ? address[0].pobox : address[0].pobox),
    },
    {
      key: 'region',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Region</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'address',
      sorter: (a: any, b: any) => a.address[0].state.localeCompare(b.address[0].state),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.address[0].state
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (address: any) => (searchedColumn === 'state' ? address[0].pobox : address[0].pobox),
    },
    {
      key: 'webSite',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Website</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'website',
      sorter: (a: any, b: any) => a.website.localeCompare(b.website),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.website
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (website: string) => (searchedColumn === 'name' ? website : website),
    },
    {
      key: 'companyCategory',
      title: (
        <div style={divContainerStyles} className='dragHandler'>
          <TitleTableColumn style={textStyles}>Category</TitleTableColumn>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            style={inputStyles}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedKeysState(e.target.value ? [e.target.value] : [searchText]);
            }}
          />
        </div>
      ),
      dataIndex: 'companyCategory',
      sorter: (a: any, b: any) =>
        (a.companyCategory.name || '').localeCompare(b.companyCategory.name || ''),
      width: 200,
      minWidth: 200,
      filtered: [searchText],
      // filterDropdownOpen: true,
      filterDropdown: (
        { setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps,
        dataIndex: DataIndex,
      ) => (
        <>
          <Input
            ref={searchInput}
            placeholder='Auto | Complete'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [searchText]);
              handleSearch(selectedKeys as string[], confirm, dataIndex);
            }}
            style={inputStyles}
          />
          <div style={{ position: 'absolute', top: '-10px' }}>
            <CloseCircleOutlined onClick={clearFilters} />
          </div>
        </>
      ),
      onFilter: (value: string, record: CompaniesTypes) =>
        record.companyCategory.name
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterIcon: () => <div />,
      render: (companyCategory: CompaniesTypes) =>
        searchedColumn === 'name' ? companyCategory.name : companyCategory.name,
    },
  ];
  return { columns, rowSelection };
};

export default CompaniesColumns;
