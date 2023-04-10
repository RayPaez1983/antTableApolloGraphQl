import React, { useContext } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { Space, Row } from 'antd';
import {
  DoubleRightOutlined,
  CloseCircleOutlined,
  SaveOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import {
  showFilterOptions,
  gridPreferencesOptions,
  rowsDisplayedOptions,
  allCompanyFilterOptions,
} from 'src/services/global-variables';
import imagotipo from 'src/images/logo.png';
import { TableContext } from 'src/context/table.context';
import { CompaniesContext } from 'src/context/companies.context';
import { GlobalContext } from 'src/context/global.context';
import { GET_ALL_COMPANIES } from 'src/components/company/queries';
import { useQuery } from '@apollo/client';
import CustomPagination from '../../pagination/index';
import CustomSelect from '../../customSelect';
import { StyledSearch, StyledSpace, StyledRow, StyledImage } from './CompanySubHeader.styles';
import CustomButton from '../../customButton';

const CompanySubHeader = () => {
  const subHeaderStyles = {
    background: '#79c2d0',
    color: 'white',
    height: 'auto',
    padding: '2px 20px',
  };

  const {
    rowsDisplayedFilter,
    handletableMovement,
    companiesCol,
    moveToRightTable,
    handleColumnSelect,
    selectedColumns,
  } = useContext(TableContext);
  const {
    activeStatusFilter,
    deleteRowButtonAction,
    activeFilterValue,
    nextPagesFetch,
    backPagesFetch,
    pagination,
  } = useContext(CompaniesContext);
  const { clearAllFilters } = useContext(GlobalContext);

  const { data } = useQuery(GET_ALL_COMPANIES);
  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    activeStatusFilter(data?.getAllCompanies, e);
  };
  const handleRowDisplayed = (e: React.FormEvent<HTMLInputElement>) => {
    const internalData = e as unknown as number;
    rowsDisplayedFilter(internalData);
  };
  const iconRotation = moveToRightTable ? 180 : 0;
  return (
    <StyledSpace data-testid='company-sub-header-id' direction='vertical' size='middle'>
      <StyledRow data-testid='styled-row-sub-header-id' align='middle' justify='space-between'>
        <StyledSearch
          data-testid='company-sub-header-search-id'
          placeholder='Search Companies'
          allowClear
          size='large'
        />
        <Space size='middle'>
          <CustomButton
            dataTestId='new-button-id'
            type='primary'
            title='New'
            style={subHeaderStyles}
            ghost
          />
          <CustomButton
            dataTestId='export-button-id'
            type='primary'
            title='Export'
            style={subHeaderStyles}
            ghost
          />
          <CustomButton
            dataTestId='reimport-button-id'
            type='primary'
            title='Re-import'
            style={subHeaderStyles}
            ghost
          />
          <CustomButton
            dataTestId='map-button-id'
            type='primary'
            title='Map'
            style={subHeaderStyles}
            ghost
          />
        </Space>
        <CustomSelect
          options={gridPreferencesOptions as []}
          defaultValue='Grid Preferences'
          customStyle={{ width: '250px' }}
          dataTestId='gridPreferencesOptions-select-id'
        />
        <CustomButton
          type='primary'
          danger
          dataTestId='save-button-id'
          title='Save as New'
          style={{
            height: 'auto',
            fontSize: 'inherit',
            padding: '2px 15px',
            borderRadius: '0',
          }}
        />
        <StyledImage
          data-testid='logo-image-sub-header-id'
          src={imagotipo}
          preview={false}
          alt='Repfabric'
        />
      </StyledRow>
      <Row justify='space-between'>
        <Space size='middle' style={{ paddingLeft: '15px' }}>
          <CustomButton
            type='text'
            dataTestId='move-grid-button-id'
            onlyIcon
            icon={<DoubleRightOutlined rotate={iconRotation} />}
            style={{ padding: '0', height: '33px' }}
            onClick={handletableMovement}
          />
          <CustomSelect
            options={allCompanyFilterOptions as []}
            defaultValue={allCompanyFilterOptions[0].value}
            dataTestId='all-companies-select-id'
            customStyle={{ display: !moveToRightTable && 'none', width: '175px' }}
          />
        </Space>
        <Space size='middle' style={{ paddingRight: '15px' }}>
          <CustomSelect
            handleChange={handleFilter}
            options={showFilterOptions as []}
            dataTestId='showFilterOptions-select-id'
            externalValue={activeFilterValue}
          />
          <CustomSelect
            dataTestId='columns-select-id'
            multiSel
            selectedColumns={selectedColumns}
            handleColumnSelect={handleColumnSelect}
            columnsDefault={companiesCol}
          />
          <CustomSelect
            handleChange={handleRowDisplayed}
            options={rowsDisplayedOptions as []}
            defaultValue={rowsDisplayedOptions[0].label}
            dataTestId='rowsDisplayedOptions-select-id'
          />
          <CustomButton
            shape='circle'
            icon={<DeleteOutlined />}
            onClick={deleteRowButtonAction}
            onlyIcon
            tooltipText='Delete Selection'
            tooltipColor='gray'
            danger
            ghost
          />
          <CustomButton
            shape='circle'
            icon={<CloseCircleOutlined />}
            onClick={clearAllFilters}
            onlyIcon
            tooltipText='Remove Filters'
            tooltipColor='gray'
            danger
            ghost
          />
          <CustomButton
            shape='circle'
            icon={<SaveOutlined />}
            onlyIcon
            tooltipText='Save Settings'
            tooltipColor='gray'
            danger
            ghost
          />
          <CustomButton
            shape='circle'
            icon={<EditOutlined />}
            onlyIcon
            tooltipText='Edit'
            tooltipColor='gray'
            danger
            ghost
            dataTestId='edit-button-id'
          />
          <CustomPagination
            totalData={data ? data.getAllCompanies : []}
            nextPagesFetch={nextPagesFetch}
            backPagesFetch={backPagesFetch}
            currentPage={pagination.current}
          />
        </Space>
      </Row>
    </StyledSpace>
  );
};

export default CompanySubHeader;
