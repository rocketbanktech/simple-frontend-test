import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import Footer from "components/Footer";
import DataGridUsers from "components/dataGridUsers";
import columns from "components/dataGridUsers/DataGridUsers.mock";

const HomePage = () => {
  const { loading, data } = useSelector((state) => state.home);
  return (
    <>
      <Header />
      <DataGridUsers
        rows={data}
        columns={columns}
        title="Usuários"
        loading={loading}
      />
      <Footer />
    </>
  );
};

export default HomePage;
