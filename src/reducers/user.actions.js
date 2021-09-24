import { createAsyncAction } from "../utils/actionCreators";

export const actions = {
  loadUser: createAsyncAction("@user/LOAD"),
  saveUser: createAsyncAction("@user/SAVE"),
  updateUser: createAsyncAction("@user/UPDATE"),
  requestCep: createAsyncAction("@user/REQUESTCEP")
};
