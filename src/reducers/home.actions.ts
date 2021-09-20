import { createAsyncAction } from "../utils/actionCreators";

export const actions = {
  loadUsers: createAsyncAction("@users/LOAD"),
  updateUsers: createAsyncAction("@users/UPDATE"),
  updateUsersMock: createAsyncAction("@users/UPDATE"),
  deleteUsers: createAsyncAction("@users/DELETE"),
};
