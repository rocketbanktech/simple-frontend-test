import { HtmlHTMLAttributes } from "react";
import mock from "../../sagas/users.mock";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Column = {
  field: string;
  id: string;
  sortData: string;
  className: string;
};

type Row = typeof mock[0];

export type DataGridUsersProps = {
  title: string;
  columns: Column[];
  rows: Row[];
  loading?: boolean;
} & Attributes;

export type WrapperProps = {
  classIcon?: string;
};

export type ModalProps = {
  isOpen: boolean;
};
