import React, { createContext, ReactNode, useEffect, useMemo, useReducer, useState } from 'react';
import { columnsSelected } from 'src/utils/tables/selectTableOptions/companiesOptions';
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from 'src/components/company/queries';

interface TableContextProviderProps {
  children: ReactNode;
}

interface InitialStateProps {
  selectedColumns: string[];
  filteredColumns: object[];
  handleColumnSelect: (value: string[]) => void;
  companiesData: { getCompanies: [] };
  companiesCol: object[];
  rowsDisplay: number;
  rowsDisplayedFilter: (data: number) => void;
  moveToRightTable: boolean;
  handletableMovement: () => void;
  enterPage: (pge: number) => void;
  navPagesHandle: (fn: string) => void;
  totalPages: (pages: number) => void;
  currentPage: number;
  totalPage: number;
  handleSetCompaniesCol: (data: any) => void;
  randomColumns: (cols: any) => void;
}

export const initialState: InitialStateProps = {
  selectedColumns: [],
  handleColumnSelect: () => {},
  filteredColumns: [],
  companiesData: { getCompanies: [] },
  companiesCol: [],
  rowsDisplay: 25,
  rowsDisplayedFilter: () => {},
  moveToRightTable: false,
  handletableMovement: () => {},
  currentPage: 1,
  enterPage: () => {},
  totalPages: () => {},
  navPagesHandle: () => {},
  totalPage: 1,
  handleSetCompaniesCol: () => {},
  randomColumns: () => {},
};
export const TABLE_ACTIONS_TYPE = {
  SET_DATA: 'SET_DATA',
  SET_ROW_TO_DISPLAY: 'SET_ROW_TO_DISPLAY',
};
export const tableContext = (state: object, action: any) => {
  const { type, payload } = action;
  console.log(payload.rowsDisplay, 'que sons');
  switch (type) {
    case TABLE_ACTIONS_TYPE.SET_DATA:
      return { ...state, ...payload };
    case TABLE_ACTIONS_TYPE.SET_ROW_TO_DISPLAY:
      return { ...state, ...payload.rowsDisplay };
    default:
      throw new Error(`Wrong type ${type} in userReducer`);
  }
};

const TableContext = createContext(initialState);

const TableContextProvider: React.FC<TableContextProviderProps> = ({ children }) => {
  const [moveToRightTable, setMoveToRightTable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companiesCol, setCompaniesCol] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColumns, setSelectedColumns] = useState(columnsSelected);
  const filteredColumns = companiesCol.filter((column: any) =>
    selectedColumns.includes(column.key),
  );
  const { data } = useQuery(GET_ALL_COMPANIES);

  const [{ companiesData, rowsDisplay }, dispatch] = useReducer(tableContext, initialState);
  const handleColumnSelect = (value: string[]) => {
    setSelectedColumns(value);
  };

  const randomColumns = (cols: any) => {
    setCompaniesCol(cols);
  };
  const handleSetData = () => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_DATA,
      payload: {
        companiesData: data,
      },
    });
  };
  useEffect(() => {
    handleSetData();
  }, []);

  const rowsDisplayedFilter = (dataNumber: number) => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_ROW_TO_DISPLAY,
      payload: {
        rowsDisplay: dataNumber,
      },
    });
    console.log(dataNumber, rowsDisplay, 'que estp');
  };
  const handletableMovement = () => {
    setMoveToRightTable(!moveToRightTable);
  };
  const handleSetCompaniesCol = () => {
    companiesData(data);
  };
  const navPagesHandle = (fn: string) => {
    switch (fn) {
      case 'nextPage':
        if (currentPage < totalPage) {
          setCurrentPage(currentPage + 1);
        }
        return currentPage;
      case 'backPage':
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        return currentPage;
      case 'firstPage':
        setCurrentPage(totalPage - totalPage + 1);
        return currentPage;
      case 'lastPage':
        setCurrentPage(Math.max(totalPage));
        return currentPage;

      default:
        return currentPage;
    }
  };
  const totalPages = (pages: number) => {
    setTotalPage(pages);
  };

  // eslint-disable-next-line consistent-return
  const enterPage = (pge: number) => {
    if (pge < totalPage) {
      setCurrentPage(pge);
    }
    return null;
  };
  const tableValues = useMemo(
    () => ({
      companiesData,
      companiesCol,
      rowsDisplay,
      rowsDisplayedFilter,
      moveToRightTable,
      handletableMovement,
      currentPage,
      enterPage,
      totalPage,
      totalPages,
      navPagesHandle,
      handleSetCompaniesCol,
      randomColumns,
      handleSetData,
      filteredColumns,
      handleColumnSelect,
      selectedColumns,
    }),
    [
      {
        companiesData,
        companiesCol,
        rowsDisplay,
        rowsDisplayedFilter,
        moveToRightTable,
        handletableMovement,
        currentPage,
        enterPage,
        totalPage,
        totalPages,
        navPagesHandle,
        handleSetCompaniesCol,
        randomColumns,
        handleSetData,
        filteredColumns,
        handleColumnSelect,
        selectedColumns,
      },
    ],
  );

  return <TableContext.Provider value={tableValues}>{children}</TableContext.Provider>;
};

export { TableContext, TableContextProvider };
