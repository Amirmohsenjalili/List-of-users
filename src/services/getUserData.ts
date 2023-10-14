import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3000/users'
});
instance.interceptors.request.use(config => {
  config.baseURL = 'http://localhost:3000/users';
  return config;
});
export const getUserData = async () => {
  const response = await instance.get('/');
  return response.data;
};
export const addUser = async (newUser: object) => {
  const response = await instance.post('/', newUser);
  return response.data;
};