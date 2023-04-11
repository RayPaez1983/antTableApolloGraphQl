import React, {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
  useRef,
  useReducer,
} from 'react';
import activeStatusFilterFunc from 'src/utils/functions/companiesFunctions';
import CompaniesColumns from 'src/utils/tables/companiesTable';
import CustomButton from 'src/components/commons/customButton';
import { confirmModal } from 'src/components/commons/customModal';
import { DeleteOutlined } from '@ant-design/icons';
import { GET_COMPANIES } from 'src/components/company/queries';
import { DELETE_ONE_ROW_MUTATION, DELETE_ROWS_MUTATION } from 'src/components/company/mutations';
import { OperationVariables, useLazyQuery, useMutation } from '@apollo/client';
import { showFilterOptions } from 'src/services/global-variables';

interface CompaniesContextProviderProps {
  children: ReactNode;
}

interface InitialStateProps {
  companiesDataSet: object[];
  getCompanies: () => void;
  pagination: { current: number; pageSize: number };
  companiesCol: object[];
  handleAllDataSelection: (index: any) => void;
  noSelectedRowModal: boolean;
  handleNoSelectedRowModal: () => void;
  activeStatusFilter: (data: any, operation: React.FormEvent<HTMLInputElement>) => void;
  nextPagesFetch: () => void;
  backPagesFetch: () => void;
  undoMoment: boolean;
  handleUndoMoment: () => void;
  deleteRowButtonAction: () => void;
  activeFilterValue: string;
  loadingQuery: boolean;
  getCompaniesResponse: OperationVariables;
  handleOneDeleteSelection: () => void;
  enterPage: (pge: number, totalPage: number) => void;
  lastPagesFetch: (totalPage: number) => void;
  firstPagesFetch: (totalPage: number) => void;
}

const initialState: InitialStateProps = {
  getCompanies: () => {},
  companiesCol: [],
  companiesDataSet: [],
  handleAllDataSelection: () => {},
  noSelectedRowModal: false,
  handleNoSelectedRowModal: () => {},
  activeStatusFilter: () => {},
  undoMoment: false,
  handleUndoMoment: () => {},
  deleteRowButtonAction: () => {},
  activeFilterValue: 'Show All',
  loadingQuery: false,
  getCompaniesResponse: [],
  handleOneDeleteSelection: () => {},
  nextPagesFetch: () => {},
  backPagesFetch: () => {},
  pagination: { current: 0, pageSize: 0 },
  enterPage: () => {},
  lastPagesFetch: () => {},
  firstPagesFetch: () => {},
};
export const COMPANIES_ACTIONS_TYPE = {
  SET_DATA: 'SET_DATA',
};
export const companiesReducer = (state: object, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case COMPANIES_ACTIONS_TYPE.SET_DATA:
      return { ...state, ...payload };
    default:
      throw new Error(`Wrong type ${type} in userReducer`);
  }
};
const CompaniesContext = createContext(initialState);

const CompaniesContextProvider: React.FC<CompaniesContextProviderProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ companiesDataSet }, dispatch] = useReducer(companiesReducer, initialState);
  console.log(companiesDataSet, 'no importa');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companiesData, setCompaniesData] = useState<any>([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 25 });
  const dataSelectedToDelete = useRef([]);
  const [getCompanies, getCompaniesResponse] = useLazyQuery(GET_COMPANIES, {
    onCompleted: (data) => {
      console.log(data.getCompanies, 'que esto en getCompanies');
      dispatch({
        type: COMPANIES_ACTIONS_TYPE.SET_DATA,
        payload: {
          companiesDataSet: data.getCompanies,
        },
      });
    },
  });

  const [deleteOneCompanyRecord, deleteOneCompanyRecordResponse] = useMutation(
    DELETE_ONE_ROW_MUTATION,
    {
      refetchQueries: [{ query: GET_COMPANIES }, 'GetCompanies'],
    },
  );
  const [deleteMultipleCompaniesRecord, deleteMultipleCompaniesRecordResponse] = useMutation(
    DELETE_ROWS_MUTATION,
    {
      refetchQueries: [{ query: GET_COMPANIES }, 'GetCompanies'],
    },
  );
  useEffect(() => {
    const { current, pageSize } = pagination;
    getCompanies({
      variables: {
        page: current, // or any page number you want to load
        limit: pageSize, // or any limit you want to use
      },
    });
  }, [getCompanies, pagination]);
  const nextPagesFetch = () => {
    setPagination({ current: pagination.current + 1, pageSize: pagination.pageSize + 25 });
  };
  const backPagesFetch = () => {
    if (pagination.current > 1)
      setPagination({ current: pagination.current - 1, pageSize: pagination.pageSize - 25 });
  };
  const lastPagesFetch = (totalPage: number) => {
    if (pagination.current < totalPage)
      setPagination({ current: totalPage, pageSize: pagination.pageSize });
  };
  const firstPagesFetch = (totalPage: number) => {
    setPagination({ current: totalPage - totalPage + 1, pageSize: pagination.pageSize });
  };
  const enterPage = (pge: number, totalPage: number) => {
    if (pge < totalPage) {
      setPagination({ current: pge, pageSize: pagination.pageSize + 25 });
    }
    return null;
  };
  const { columns } = CompaniesColumns();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companiesCol, setCompaniesCol] = useState(columns);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disableDelButton, setDisableDelButon] = useState(false);
  const [noSelectedRowModal, setNoSelectedRowModal] = useState(false);
  const [undoMoment, setUndoMoment] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [activeFilterValue, setActiveFilterValue] = useState(showFilterOptions[0].label);

  useEffect(() => {
    setLoadingQuery(
      getCompaniesResponse.loading ||
        deleteOneCompanyRecordResponse.loading ||
        deleteMultipleCompaniesRecordResponse.loading,
    );
  }, [
    getCompaniesResponse.loading,
    deleteOneCompanyRecordResponse.loading,
    deleteMultipleCompaniesRecordResponse.loading,
  ]);

  const activeStatusFilter = (dataFilter: any, operation: React.FormEvent<HTMLInputElement>) => {
    const internalData = activeStatusFilterFunc(dataFilter, operation);
    const internalActiveFilterLabel = showFilterOptions.find(
      (element) => element.value === (operation as unknown as string),
    );
    setActiveFilterValue(
      internalActiveFilterLabel?.label as unknown as React.SetStateAction<string>,
    );
    if (typeof internalData === 'string') {
      throw new Error('Unrecognized operation!');
    } else {
      setCompaniesData(internalData);
    }
  };

  const handleUndoMoment = () => {
    setUndoMoment(!undoMoment);
  };

  const handleAllDataSelection = (index: any) => {
    if (index.length === 1) {
      [dataSelectedToDelete.current] = index;
      setDisableDelButon(false);
    } else {
      dataSelectedToDelete.current = index;
      setDisableDelButon(true);
    }
  };

  const handleOneDeleteSelection = () => {
    setCompaniesData([]);
    handleUndoMoment();
    if (typeof dataSelectedToDelete.current === 'string') {
      deleteOneCompanyRecord({
        variables: {
          id: dataSelectedToDelete.current,
        },
      });
      setDisableDelButon(false);
    } else {
      deleteMultipleCompaniesRecord({
        variables: {
          ids: dataSelectedToDelete.current,
        },
      });
      setDisableDelButon(false);
    }
  };

  const handleConfirmationModal = () => {
    const modalProps = {
      modalTitle: 'Are you sure you want to delete this record',
      modalBody: <p>Any information regarding this company will be lost.</p>,
      okAction: () => handleUndoMoment(),
      cancelAction: () => 0,
      okText: 'Yes',
      cancelText: 'No',
    };
    confirmModal(
      modalProps.modalTitle,
      modalProps.modalBody,
      modalProps.okAction,
      modalProps.cancelAction,
      modalProps.okText,
      modalProps.cancelText,
    );
  };

  const handleNoSelectedRowModal = () => {
    setNoSelectedRowModal(!noSelectedRowModal);
  };

  const deleteRowButtonAction = () => {
    if (dataSelectedToDelete.current.length !== 0) {
      handleConfirmationModal();
    } else {
      handleNoSelectedRowModal();
    }
  };

  useEffect(() => {
    const lastColumn: any = {
      key: 'delete',
      dataIndex: 'delete',
      width: '70px',
      fixed: 'right',
      render: () => (
        <CustomButton
          onlyIcon
          onClick={deleteRowButtonAction}
          icon={<DeleteOutlined />}
          danger
          shape='circle'
          disabled={disableDelButton}
        />
      ),
    };
    const InternalArr = companiesCol.filter((element) => element.dataIndex !== 'delete');
    InternalArr.push(lastColumn);
    setCompaniesCol(InternalArr);
  }, [disableDelButton]);

  const companiesValue = useMemo(
    () => ({
      getCompanies,
      companiesCol,
      companiesDataSet,
      handleAllDataSelection,
      noSelectedRowModal,
      handleNoSelectedRowModal,
      activeStatusFilter,
      undoMoment,
      handleUndoMoment,
      deleteRowButtonAction,
      activeFilterValue,
      loadingQuery,
      getCompaniesResponse,
      handleOneDeleteSelection,
      dataSelectedToDelete,
      nextPagesFetch,
      backPagesFetch,
      pagination,
      enterPage,
      lastPagesFetch,
      firstPagesFetch,
    }),
    [
      {
        getCompanies,
        companiesDataSet,
        companiesCol,
        handleAllDataSelection,
        noSelectedRowModal,
        handleNoSelectedRowModal,
        activeStatusFilter,
        undoMoment,
        handleUndoMoment,
        deleteRowButtonAction,
        activeFilterValue,
        loadingQuery,
        getCompaniesResponse,
        handleOneDeleteSelection,
        nextPagesFetch,
        backPagesFetch,
        pagination,
        enterPage,
        lastPagesFetch,
        firstPagesFetch,
      },
    ],
  );

  return <CompaniesContext.Provider value={companiesValue}>{children}</CompaniesContext.Provider>;
};

export { CompaniesContext, CompaniesContextProvider };
