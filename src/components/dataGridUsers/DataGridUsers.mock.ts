import { Column } from "./DataGridUsers.types";

export default [
  {
    field: "Nome",
    id: "1",
    sortData: "nome",
    className: "nome",
  },
  {
    field: "Idade/Data de Nasc.",
    id: "2",
    sortData: "dataNascimento",
    className: "idade",
  },
  {
    field: "Cidade",
    id: "3",
    sortData: "cidade",
    className: "cidade",
  },

  {
    field: "Ações",
    id: "4",
  },
] as Column[];
