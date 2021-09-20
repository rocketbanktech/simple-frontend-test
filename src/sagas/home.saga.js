import { put, select } from "redux-saga/effects";
import { routeWatcher } from "./routes.saga";
import asyncFlow from "./asyncHandler";
import { types as routes } from "../reducers/routes.actions";
import { actions } from "../reducers/home.actions";
import { actions as userActions } from "../reducers/user.actions";
import { request, putUsers, delUsers } from "../utils/api";
import usersMock from "./users.mock";

export let dbUsers = usersMock;

function* homeRouteWatcher() {
  yield routeWatcher(routes.HOME, function* () {
    yield put(actions.loadUsers.request());
  });
}

const loadUsersMock = asyncFlow({
  actionGenerator: actions.loadUsers,
  transform: function* () {
    const data = yield select((state) => state.home.data);
    return data;
  },
  api: (values) => {
    return request({
      url: `/usuarios`,
      method: "get",
      isMock: true,
      mockResult: dbUsers,
    });
  },
  postSuccess: function* ({ response }) {
    yield console.log({ users: response.data });
  },
});

const updateUsersMock = asyncFlow({
  actionGenerator: actions.updateUsersMock,
  api: (values) => {
    dbUsers = putUsers(dbUsers, values);
    return request({
      url: `/usuarios`,
      method: "post",
      isMock: true,
      body: values,
      mockResult: values,
    });
  },
  postSuccess: function* ({ response, values }) {
    yield put(userActions.loadUser.request({ id: values.id }));
    yield console.log({ users: response.data });
  },
});

const updateUsers = asyncFlow({
  actionGenerator: actions.updateUsers,
  transform: function* (payload) {
    const data = yield select((state) => state.user.data);
    return { ...data, ...payload };
  },
  api: (values) => {
    return request({
      url: `https://viacep.com.br/ws/${values.cep}/json`,
      method: "get",
      isMock: false,
    });
  },
  postSuccess: function* ({ response, values }) {
    const { localidade: cidade } = response.data;
    yield (dbUsers = putUsers(dbUsers, {
      ...values,
      ...response.data,
      cidade,
    }));
    yield put(userActions.loadUser.request({ id: values.id }));
  },
});

const deleteUsersMock = asyncFlow({
  actionGenerator: actions.deleteUsers,
  api: (values) => {
    dbUsers = delUsers(dbUsers, values.id);
    return request({
      url: `/usuarios`,
      method: "post",
      isMock: true,
      body: values,
      mockResult: values,
    });
  },
  postSuccess: function* ({ response }) {
    yield console.log({ users: response.data });
    yield put(actions.loadUsers.request());
  },
});

export const sagas = [
  homeRouteWatcher(),
  loadUsersMock.watcher(),
  updateUsersMock.watcher(),
  deleteUsersMock.watcher(),
  updateUsers.watcher(),
];
