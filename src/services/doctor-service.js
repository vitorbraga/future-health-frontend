import axios from 'axios';

const HOST = process.env.SERVER_HOST;

const getHeaders = (accessToken) => ({
  headers: { Authorization: `Bearer ${accessToken}` }
});

export const getDoctorById = (accessToken, doctorId) => {
  return axios.get(`${HOST}/doctors/${doctorId}`, getHeaders(accessToken));
}
