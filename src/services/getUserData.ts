// import axios from 'axios';

//  const api = axios.create({
//     baseURL: 'http://localhost:3000/users'
// });

//  api.interceptors.request.use(config => {
//     return config;
//  });

// export const getUserData = async () => await api.get('/');
// export const addUser = async(newUser:object) => await api.post('/', newUser);
// export const addUser = api.post('/', newUser:);

// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/users';

// export const getUserData = async () => {
//   const response = await axios.get('/');
//   return response.data;
// };

// export const addUser = async (newUser: object) => {
//   const response = await axios.post('/', newUser);
//   return response.data;
// };

// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/users';

// // Add an interceptor to modify the request or response
// axios.interceptors.request.use((config) => {
//   // Modify the request config here
//   return config;
// });

// export const getUserData = async () => {
//   const response = await axios.get('/');
//   return response.data;
// };

// export const addUser = async (newUser: object) => {
//   const response = await axios.post('/', newUser);
//   return response.data;
// };

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