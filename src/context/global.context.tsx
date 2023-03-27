import React, { createContext, ReactNode, useMemo, useContext } from 'react';
import { CompaniesContext } from 'src/context/companies.context';
import { columnsSelected } from 'src/utils/tables/selectTableOptions/companiesOptions';
import { TableContext } from './table.context';

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface InitialStateProps {
  clearAllFilters: () => void;
}

const initialState: InitialStateProps = {
  clearAllFilters: () => {},
};

const GlobalContext = createContext(initialState);

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const { activeStatusFilter, getCompaniesResponse } = useContext(CompaniesContext);
  const { handleColumnSelect } = useContext(TableContext);

  const clearAllFilters = () => {
    const innerEvent = 'all';
    activeStatusFilter(
      getCompaniesResponse?.data?.getCompanies,
      innerEvent as unknown as React.FormEvent<HTMLInputElement>,
    );
    handleColumnSelect(columnsSelected);
  };

  const globalValue = useMemo(
    () => ({
      clearAllFilters,
    }),
    [
      {
        clearAllFilters,
      },
    ],
  );

  return <GlobalContext.Provider value={globalValue}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };
