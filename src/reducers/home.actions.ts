import { createAsyncAction } from "../utils/actionCreators";

export const actions = {
  loadUsers: createAsyncAction("@users/LOAD"),
  deleteUsers: createAsyncAction("@users/DELETE"),
/*   updateUsers: createAsyncAction("@users/UPDATE"), */
/*   updateUsersMock: createAsyncAction("@users/UPDATE"), */
};
