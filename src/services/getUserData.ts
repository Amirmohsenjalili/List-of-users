import axios from 'axios';

const BaseUrl = 'http://localhost:3000/users';

export const getUserData = async () => {
    const response = await axios.get(BaseUrl);
    return response.data;
    };

export const addUser = async (newUser: object) => {
    const response = await axios.post(BaseUrl, newUser);
    return response.data;
};