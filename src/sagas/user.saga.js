import { put, select } from "redux-saga/effects";
import { routeWatcher } from "./routes.saga";
import asyncFlow from "./asyncHandler";
import {
  types as routes,
  actions as routeActions,
} from "../reducers/routes.actions";
import { actions } from "../reducers/user.actions";
import { request } from "../utils/api";
import { dbUsers } from "./home.saga";

function* userRouteWatcher() {
  yield routeWatcher(routes.USER, function* () {
    yield put(actions.loadUser.request());
  });
}

const loadUser = asyncFlow({
  actionGenerator: actions.loadUser,
  transform: function* (payload) {
    const id = yield select((state) => state.user.id);
    return { id, ...payload };
  },
  api: (values) => {
    const user = dbUsers.find((u) => u.id === values.id) ?? null;
    const data = { ...user, ...values };
    return request({
      url: `/usuario/${values.id}`,
      method: "get",
      isMock: true,
      mockResult: data,
    });
  },
  postSuccess: function* ({ response }) {
    yield console.log({ user: response.data });
  },
});

const updateUser = asyncFlow({
  actionGenerator: actions.updateUser,
  transform: function* (payload) {
    const data = yield select((state) => state.user.data);
    return { ...data, ...payload };
  },
  api: (values) => {
    return request({
      url: `/usuario/${values.id}`,
      method: "get",
      isMock: true,
      mockResult: values,
    });
  },

  postSuccess: function* ({ response, values }) {
    yield console.log({ user: response.data });
  },
});

const requestCep = asyncFlow({
  actionGenerator: actions.requestCep,
  transform: function* (payload) {
    const data = yield select((state) => state.user.data);
    return { ...data, ...payload };
  },
  api: (values) => {
    return request({
      url: `https://viacep.com.br/ws/${values.cep}/json`,
      method: "get",
      isMock: false,
      mockResult: values,
    });
  },

  postSuccess: function* ({ response, values }) {
    yield console.log({ user: response.data });
    const { localidade: cidade } = response.data;
    const data = {
      ...values,
      ...response.data,
      cidade,
    };
    yield put(actions.loadUser.request(data)); 
  },
});

const saveUser = asyncFlow({
  actionGenerator: actions.saveUser,
  transform: function* (payload) {
    const id = yield select((state) => state.user.id);
    return { id, ...payload };
  },
  api: (values) => {
    return request({
      url: `/usuario/${values.id}`,
      method: "put",
      body: values,
      isMock: true,
      mockResult: values,
    });
  },
  postSuccess: function* ({ response }) {
    yield put(routeActions.redirectTo(routes.HOME, { ...response.data }));
  },
});

export const sagas = [
  userRouteWatcher(),
  loadUser.watcher(),
  saveUser.watcher(),
  updateUser.watcher(),
  requestCep.watcher()
];
