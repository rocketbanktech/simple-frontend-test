import { mock } from "./mock";

const axios = require("axios");

const instance = axios.create({
  timeout: 120000,
  withCredentials: false,
});

export const request = async ({
  isMock,
  url,
  destiny,
  method,
  headers = undefined,
  queryParams = {},
  body,
  ...other
}) => {
  Object.keys(queryParams).forEach(
    (key) =>
      queryParams.hasOwnProperty(key) &&
      !queryParams[key] &&
      queryParams[key] !== false &&
      delete queryParams[key]
  );

  if (isMock) {
    console.log({
      url,
      method,
      queryParams,
      body,
      headers,
    });
    return mock(other.mockResult);
  } else {
    return instance.request({
      url,
      method,
      headers,
      ...other,
      params: queryParams,
      data: body,
    });
  }
};

export default instance;

export const handleApiErrors = (response) => response;

export const putUsers = (items, values) =>
  items.map((user) => {
    if (user.id === values.id) {
      return {
        ...user,
        ...values,
        
      };
    }
    return user;
  });

export const delUsers = (items, id) =>
  items.filter((item) => item.id !== id);
