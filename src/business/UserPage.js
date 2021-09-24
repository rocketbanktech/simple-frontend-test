import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Save } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { actions } from "../reducers/user.actions";
import { Button } from "@material-ui/core";
import { ControlledTextField } from "../components/inputs";
import ZipCodeTextField from "../components/inputs/ZipCodeTextField";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Content } from "../components/container";
import { Loading } from "../components/dataGridUsers/DataGridUsers.styles";

const UserPage = () => {
  const inputRef = createRef();

  const dispatch = useDispatch();
  const { loading, data, id, inputLoading } = useSelector(
    (state) => state.user
  );
  const rules = {};
  let initialValues = {
    nome: "",
    dataNascimento: "",
    cep: "",
    cidade: "",
    uf: "",
    ...data,
  };

  const formProps = {
    ...useForm(),
    rules,
    initialValues,
  };

  const handleSubmit = (values) => {
    dispatch(actions.saveUser.request(values));
  };

  if (loading) {
    return (
      <>
        <Header />
        <Container>
          <Loading />
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Usuário #{id}</h2>
        <form onSubmit={formProps.handleSubmit(handleSubmit)}>
          <Content>
            <ControlledTextField
              label="Nome"
              name={"nome"}
              formProps={formProps}
              onChange={(e) =>
                dispatch(actions.updateUser.request({ ...data, nome: e.target.value }))
              }
            />
            <ControlledTextField
              label="CEP"
              name={"cep"}
              formProps={formProps}
              onBlur={() =>
                dispatch(
                  actions.requestCep.request({
                    ...data,
                    cep: inputRef.current?.value,
                  })
                )
              }
              disabled={inputLoading}
              InputProps={{
                inputComponent: ZipCodeTextField,
                startAdornment: inputLoading && (
                  <Loading className="inputLoading" />
                ),
              }}
              ref={inputRef}
            />

            <ControlledTextField
              label="Cidade"
              name={"cidade"}
              formProps={formProps}
              disabled={inputLoading}
              InputProps={{
                startAdornment: inputLoading && (
                  <Loading className="inputLoading" />
                ),
              }}
            />

            <ControlledTextField
              label="UF"
              name={"uf"}
              formProps={formProps}
              disabled={inputLoading}
              InputProps={{
                startAdornment: inputLoading && (
                  <Loading className="inputLoading" />
                ),
              }}
            />
          </Content>

          <Button
            size="large"
            variant="contained"
            color="primary"
            type={"submit"}
            startIcon={<Save />}
          >
            GRAVAR
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default UserPage;
