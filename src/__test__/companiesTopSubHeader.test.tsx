import React from 'react';
import CompanySubHeader from 'src/components/commons/subHeader/company';
import { fireEvent, render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import client from 'src/services/api';

test('render test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const CompanySubHeaderElement = screen.getByTestId('company-sub-header-id');
  expect(CompanySubHeaderElement).toBeInTheDocument();
});

test('Text companies test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const CompanySubHeaderElement = screen.getByTestId('styled-sub-header-title-id');
  expect(CompanySubHeaderElement).toBeInTheDocument();
  expect(CompanySubHeaderElement).toHaveTextContent(/companies/i);
  expect(CompanySubHeaderElement).toHaveAttribute(
    'class',
    'ant-typography sc-hLBbgP eBittz css-dev-only-do-not-override-sk7ap8',
  );
});

test('search render test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const CompanySubHeaderElement = screen.getByTestId('company-sub-header-search-id');
  expect(CompanySubHeaderElement).toBeInTheDocument();
  expect(CompanySubHeaderElement).toHaveAttribute(
    'class',
    'ant-input ant-input-lg css-dev-only-do-not-override-sk7ap8',
  );
  expect(CompanySubHeaderElement).toHaveAttribute('placeholder', 'Search Companies');
});

test('button group render test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const NewButtonElement = screen.getByText('New');
  expect(NewButtonElement).toBeInTheDocument();
  const ExportButtonElement = screen.getByText(/export/i);
  expect(ExportButtonElement).toBeInTheDocument();
  const ReimportButtonElement = screen.getByText(/re-import/i);
  expect(ReimportButtonElement).toBeInTheDocument();
  const MapButtonElement = screen.getByText(/map/i);
  expect(MapButtonElement).toBeInTheDocument();
});

test('selects render test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const GridPreferencesOptionsElement = screen.getByTestId('gridPreferencesOptions-select-id');
  expect(GridPreferencesOptionsElement).toBeInTheDocument();
  const ShowFilterOptionsElement = screen.getByTestId('showFilterOptions-select-id');
  expect(ShowFilterOptionsElement).toBeInTheDocument();
  const AllCompaniesSubHeaderElement = screen.getByTestId('all-companies-select-id');
  expect(AllCompaniesSubHeaderElement).toBeInTheDocument();
});

describe('Select', () => {
  it('fires the click event and the input event', async () => {
    const { getByTestId, container } = render(
      <ApolloProvider client={client}>
        <CompanySubHeader />
      </ApolloProvider>,
    );

    const select = getByTestId('columns-select-id');
    expect(select).toBeInTheDocument();

    const options = container.querySelector('input');
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Name' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Company Type' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Phone' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Sales Team' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Rank' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'City' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'State' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Postal Code' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'PO Box' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Fax' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Region' } });
    fireEvent.change(options as HTMLInputElement, { target: { value: 'Website' } });
  });
});

test('logo test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const CompanySubHeaderImageElement = screen.getAllByRole('img');
  expect(CompanySubHeaderImageElement).toBeTruthy();
  expect(CompanySubHeaderImageElement[1]).toHaveAttribute('alt', 'Repfabric');
  expect(CompanySubHeaderImageElement[1]).toHaveAttribute('src', 'logo.png');
});

test('grid button test', () => {
  render(
    <ApolloProvider client={client}>
      <CompanySubHeader />
    </ApolloProvider>,
  );
  const CompanySubHeaderElement = screen.getByTestId('move-grid-button-id');
  expect(CompanySubHeaderElement).toBeInTheDocument();
  expect(CompanySubHeaderElement).toHaveAttribute(
    'class',
    'ant-btn css-dev-only-do-not-override-sk7ap8 ant-btn-text ant-btn-lg ant-btn-icon-only sc-dkrFOg fehHPS',
  );
});
