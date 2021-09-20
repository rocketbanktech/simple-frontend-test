import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Edit,
  DeleteOutline,
  ArrowUpward,
  Cancel,
  Send,
} from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";

import {
  actions as routeActions,
  types as routes,
} from "../../reducers/routes.actions";
import { actions as homeActions } from "../../reducers/home.actions";

import { DataGridUsersProps } from "./DataGridUsers.types";
import useSortableData from "../../hooks/useSortTableData";
import * as S from "./DataGridUsers.styles";

function DataGrid({ rows, columns, title, loading }: DataGridUsersProps) {
  const [isOpen, SetIsOpen] = useState(false);
  const [sendDelete, setSendDelete] = useState({ id: "" });
  const dispatch = useDispatch();
  const { items, requestSort, setClassNamesFor } = useSortableData({
    items: rows,
  });

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {loading ? (
        <S.Loading />
      ) : (
        <S.Table>
          <S.THead>
            <tr>
              {columns.map((col, index, array) => {
                const lastColumn = index === array.length - 1;
                return (
                  <S.Columns
                    classIcon={col.field}
                    scope="col"
                    key={`${col.field}_${col.id}`}
                  >
                    {col.field}
                    {!lastColumn && (
                      <span className={String(col.field)}>
                        <S.ButtonArrow
                          onClick={() => requestSort(col.sortData)}
                          aria-label="Sort"
                          className={setClassNamesFor(col.sortData)}
                        >
                          <ArrowUpward />
                        </S.ButtonArrow>
                      </span>
                    )}
                  </S.Columns>
                );
              })}
            </tr>
          </S.THead>

          <tbody>
            {items.map((u) => {
              return (
                <S.Row key={u.id}>
                  <S.TD data-title="Nome">{u.nome}</S.TD>
                  <S.TD data-title="Idade">
                    {new Intl.DateTimeFormat("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(new Date(u.dataNascimento))}
                  </S.TD>
                  <S.TD data-title="Cidade">
                    {u.cidade}/{u.uf}
                  </S.TD>

                  <S.TD>
                    <IconButton
                      aria-label="Edit"
                      color="primary"
                      onClick={() =>
                        dispatch(
                          routeActions.redirectTo(routes.USER, { id: u.id })
                        )
                      }
                    >
                      <Edit fontSize="large" />
                    </IconButton>

                    <IconButton
                      onClick={() => {
                        SetIsOpen(!isOpen);
                        setSendDelete((old) => ({ ...old, id: u.id }));
                      }}
                      aria-label="delete"
                      color="primary"
                    >
                      <DeleteOutline color="error" fontSize="large" />
                    </IconButton>
                  </S.TD>
                </S.Row>
              );
            })}
          </tbody>
        </S.Table>
      )}

      <S.Modal isOpen={isOpen} aria-hidden={!isOpen} aria-label="modal">
        <S.Overlay onClick={() => SetIsOpen(!isOpen)} />
        <S.ContentModal>
          <S.Text>Tem certeza que deseja excluir?</S.Text>
          <S.WrapperButtons>
            <Button
              size="large"
              color="primary"
              variant="contained"
              startIcon={<Send color="inherit" fontSize="medium" />}
              onClick={() => {
                SetIsOpen(!isOpen);
                dispatch(homeActions.deleteUsers.request!(sendDelete));
              }}
            >
              Delete
            </Button>

            <Button
              size="large"
              color="primary"
              variant="outlined"
              startIcon={<Cancel color="secondary" fontSize="medium" />}
              onClick={() => SetIsOpen(!isOpen)}
            >
              Cancel
            </Button>
          </S.WrapperButtons>
        </S.ContentModal>
      </S.Modal>
    </S.Wrapper>
  );
}

export default DataGrid;
