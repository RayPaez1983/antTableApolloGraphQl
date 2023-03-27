import { ReactNode } from 'react';

export interface ContactsType {
  id: number;
  firstName: string;
  assistantName: string;
  fullName: string;
  company: {
    name: string;
  };
}
export interface Data {
  contacts: [ContactsType];
}
export interface CustomTableTypes {
  data: [];
  columns: [];
  scroll?: {
    x: number | string;
    y: number | string;
  };
  rowSelection?: object;
}
export interface ContactsContextProps {
  children: ReactNode;
  data?: Data;
  loading?: boolean;
  error?: null;
}
