import { actions } from "./user.actions";
import { types as routes } from "./routes.actions";

const initialState = {
  id: null,
  data: null,
  loading: false,
  inputLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case routes.USER:
      return {
        ...initialState,
        id: action.payload.id,
      };
    case actions.loadUser.REQUEST:
    case actions.loadUser.SUCCESS:
    case actions.loadUser.FAILURE:
      return {
        ...state,
        loading: action.type === actions.loadUser.REQUEST,
        data:
          action.type === actions.loadUser.SUCCESS
            ? action.payload.response.data
            : null,
      };
    case actions.updateUser.REQUEST:
    case actions.updateUser.SUCCESS:
    case actions.updateUser.FAILURE:
      return {
        ...state,
        data:
          action.type === actions.updateUser.SUCCESS
            ? action.payload.response.data
            : [],
      };
    case actions.requestCep.REQUEST:
    case actions.requestCep.SUCCESS:
    case actions.requestCep.FAILURE:
      return {
        ...state,
        inputLoading: action.type === actions.requestCep.REQUEST,
        data:
          action.type === actions.requestCep.SUCCESS
            ? action.payload.response.data
            : [],
      };
    default:
      return state;
  }
};

export default reducer;
