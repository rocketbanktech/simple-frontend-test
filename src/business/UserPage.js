import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Save } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { actions } from "../reducers/user.actions";
import { actions as homeActions } from "../reducers/home.actions";
import { Button } from "@material-ui/core";
import { ControlledTextField } from "../components/inputs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Content } from "../components/container";
import { Loading } from "../components/dataGridUsers/DataGridUsers.styles";

const UserPage = () => {
  const inputRef = createRef();

  const dispatch = useDispatch();
  const { loading, data, id } = useSelector((state) => state.user);
  const rules = {};
  const initialValues = {
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
    dispatch(homeActions.updateUsersMock.request({ id, ...values }));
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
            />
            <ControlledTextField
              label="CEP"
              name={"cep"}
              formProps={formProps}
              onBlur={() =>
                dispatch(
                  homeActions.updateUsers.request({
                    id,
                    cep: inputRef.current?.value,
                  })
                )
              }
              ref={inputRef}
            />

            <ControlledTextField
              label="Cidade"
              name={"cidade"}
              formProps={formProps}
            />

            <ControlledTextField label="UF" name={"uf"} formProps={formProps} />
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
