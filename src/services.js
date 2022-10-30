import axios from "axios";

export const setAuthorization = (authorization) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
};

export const LoginCall = async (payload, onSubmission, onError) => {
  let url = "/api/Tickets/login";
  return axios.post(url, payload).then(onSubmission).catch(onError);
};

export const GetTickets = async (onSubmission, onError) => {
  let url = "/api/Tickets/GetTickets";
  return axios.get(url).then(onSubmission).catch(onError);
};

export const UpdateStatus = async (data, onSubmission, onError) => {
  let url = "/api/Tickets/UpdateStatus";
  return axios.post(url, data).then(onSubmission).catch(onError);
};
