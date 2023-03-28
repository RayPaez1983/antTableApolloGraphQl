import React, { useContext, useState } from 'react';
import { CompaniesContext } from 'src/context/companies.context';
import CustomTable from '../commons/customTable/customTable';
import { CustomLoadingModal } from '../commons/customModal';

const Companies = () => {
  const { companiesData, companiesCol, loadingQuery } = useContext(CompaniesContext);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (e: any) => {
      setSelectedRowKeys(e);
    },
  };
  if (loadingQuery) {
    return (
      <div style={{ marginTop: '450px' }}>
        <CustomLoadingModal modalStatus={loadingQuery} />
      </div>
    );
  }

  return (
    <CustomTable
      rowSelection={rowSelection}
      data={companiesData as unknown as []}
      columns={companiesCol as []}
    />
  );
};

export default Companies;
