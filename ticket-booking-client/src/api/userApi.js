import axios from "axios";
const userUri = "http://localhost:8083/api/v1/user";

export const validateRole = async id => {
  const { data } = await axios.get(`${userUri}/validateRole?id=${id}`);
  return data;
};

export const login = async user => {
  console.log(user);
  const { data } = await axios.post(`${userUri}/login`, user);
  return data;
};

export const register = async user => {
  const { data } = await axios.post(`${userUri}/register`, user);
  return data;
};
