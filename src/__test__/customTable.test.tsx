import React from 'react';
import CustomTable from 'src/components/commons/customTable/customTable';
import dataMock from 'src/utils/mockCompaniesData.json';
import ColumnsMocked from 'src/__test__/mockData/tableMock';
import renderer from 'react-test-renderer';

it('SnapShot of the Table renders correctly', () => {
  const tree = renderer
    .create(<CustomTable data={dataMock.COMPANIES as []} columns={ColumnsMocked as []} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
