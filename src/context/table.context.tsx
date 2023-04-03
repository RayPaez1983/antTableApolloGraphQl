import React, { createContext, ReactNode, useEffect, useMemo, useReducer, useState } from 'react';
import { columnsSelected } from 'src/utils/tables/selectTableOptions/companiesOptions';
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from 'src/components/company/queries';
import { CompaniesTypes } from 'types/companiesTypes';
import { ColumnsType } from 'antd/lib/table';

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
  handleSetCompaniesCol: (data: ColumnsType) => void;
  randomColumns: (cols: ColumnsType) => void;
}

export const initialState: InitialStateProps = {
  selectedColumns: columnsSelected,
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
  SET_MOVE_TO_RIGTH: 'SET_MOVE_TO_RIGTH',
  SET_COMPANIES_COL: 'SET_COMPANIES_COL',
  SET_SELECTED_COLUMNS: 'SET_SELECTED_COLUMNS',
};
export const tableContext = (state: object, action: any) => {
  const { type, payload } = action;
  console.log(payload, 'bebe');
  switch (type) {
    case TABLE_ACTIONS_TYPE.SET_DATA:
      return { ...state, ...payload };
    case TABLE_ACTIONS_TYPE.SET_ROW_TO_DISPLAY:
      return { ...state, rowsDisplay: payload.rowsDisplay };
    case TABLE_ACTIONS_TYPE.SET_MOVE_TO_RIGTH:
      return { ...state, moveToRightTable: payload.moveToRightTable };
    case TABLE_ACTIONS_TYPE.SET_COMPANIES_COL:
      return { ...state, companiesCol: payload.companiesCol };
    case TABLE_ACTIONS_TYPE.SET_SELECTED_COLUMNS:
      return { ...state, selectedColumns: payload.selectedColumns };
    default:
      throw new Error(`Wrong type ${type} in userReducer`);
  }
};
const TableContext = createContext(initialState);

const TableContextProvider: React.FC<TableContextProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const { data } = useQuery(GET_ALL_COMPANIES);

  const [
    { companiesData, rowsDisplay, moveToRightTable, companiesCol, selectedColumns },
    dispatch,
  ] = useReducer(tableContext, initialState);
  const filteredColumns = companiesCol.filter((column: any) =>
    selectedColumns.includes(column.key),
  );

  const handleColumnSelect = (value: string[]) => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_SELECTED_COLUMNS,
      payload: {
        selectedColumns: value,
      },
    });
  };

  const randomColumns = (cols: ColumnsType) => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_COMPANIES_COL,
      payload: {
        companiesCol: cols,
      },
    });
  };

  const handleSetData = (dataTomap: CompaniesTypes) => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_DATA,
      payload: {
        companiesData: dataTomap,
      },
    });
  };
  useEffect(() => {
    handleSetData(data);
  }, [data]);

  const rowsDisplayedFilter = (dataNumber: number) => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_ROW_TO_DISPLAY,
      payload: {
        rowsDisplay: dataNumber,
      },
    });
  };
  const handletableMovement = () => {
    dispatch({
      type: TABLE_ACTIONS_TYPE.SET_MOVE_TO_RIGTH,
      payload: {
        moveToRightTable: !moveToRightTable,
      },
    });
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
