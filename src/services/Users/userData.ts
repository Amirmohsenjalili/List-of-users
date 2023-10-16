import { instance } from "../axios.client";

export const getUserData = async () => {
  const response = await instance.get("/users");
  return response.data;
};
export const addUser = async (newUser: object) => {
  const response = await instance.post("/users", newUser);
  return response.data;
};
