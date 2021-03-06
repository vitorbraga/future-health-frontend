import axios from 'axios';

const HOST = process.env.SERVER_HOST;

export const login = ({ email, password }, entity) =>
  axios.post(`${HOST}/authentication/login/${entity}`, {
    email,
    password
  });

export const refreshToken = (refreshToken, entity) =>
  axios
    .post(`${HOST}/authentication/refresh-token/${entity}`, {
      refreshToken
    });
