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
    return { id, ...(!!payload ? payload : {}) };
  },
  api: (values) => {
    return request({
      url: `/usuario/${values.id}`,
      method: "get",
      isMock: true,
      mockResult: dbUsers.find((u) => u.id === values.id) ?? null,
    });
  },
  postSuccess: function* ({ response }) {
    yield console.log({ user: response.data });
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
  postSuccess: function* () {
    yield put(routeActions.redirectTo(routes.HOME));
  },
});

export const sagas = [
  userRouteWatcher(),
  loadUser.watcher(),
  saveUser.watcher(),
];
