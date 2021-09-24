import { put, select } from "redux-saga/effects";
import { routeWatcher } from "./routes.saga";
import asyncFlow from "./asyncHandler";
import { types as routes } from "../reducers/routes.actions";
import { actions } from "../reducers/home.actions";
import { request, putUsers, delUsers } from "../utils/api";
import usersMock from "./users.mock";


export let dbUsers = usersMock;

function* homeRouteWatcher() {
  yield routeWatcher(routes.HOME, function* (payload) {
    yield put(actions.loadUsers.request(payload));
  });
}

const loadUsers = asyncFlow({
  actionGenerator: actions.loadUsers,
  transform: function* (payload) {
    const data = yield select((state) => state.home.data);
    if(!!payload) dbUsers = putUsers(dbUsers, payload?.payload);
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

const deleteUsers = asyncFlow({
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
  loadUsers.watcher(),
  deleteUsers.watcher(),
];
