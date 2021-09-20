const status = ["REQUEST", "SUCCESS", "FAILURE"];

type ActionMethods = {
  REQUEST?: string;
  request?: (payload: object) => {
    type: string;
    payload: object;
  };
  SUCCESS?: string;
  success?: (payload: object) => {
    type: string;
    payload: object;
  };
  FAILURE?: string;
  failure?: (payload: object) => {
    type: string;
    payload: object;
  };
};

export const createAsyncAction = (
  name: string,
  payloadCreator = (p: object) => p
) => {
  const actionMethods: ActionMethods = {};

  status.forEach((s) => {
    let a = `${name}_${s}`;
    let subAction = (payload: object) => ({
      type: a,
      payload: payloadCreator(payload),
    });

    if (s === "REQUEST") {
      actionMethods.REQUEST = a;
      actionMethods.request = subAction;

    }else if (s === "SUCCESS")  {
      actionMethods.SUCCESS = a;
      actionMethods.success = subAction;
    }else if (s === "FAILURE")  {
      actionMethods.FAILURE = a;
      actionMethods.failure = subAction;
    }

    return subAction;
  });

  return actionMethods;
};

export const createSyncAction = (type: string, payload: object, other = {}) => {
  return {
    type,
    payload,
    ...other,
  };
};
