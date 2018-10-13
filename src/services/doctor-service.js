import axios from 'axios';

const HOST = process.env.SERVER_HOST;

const getHeaders = accessToken => ({
  headers: { Authorization: `Bearer ${accessToken}` }
});

export const getDoctorById = (accessToken, doctorId) =>
  axios.get(`${HOST}/doctors/${doctorId}`, getHeaders(accessToken));

export const registerDoctor = doctor =>
  axios.post(`${HOST}/doctors/register`, doctor);
