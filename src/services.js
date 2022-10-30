import axios from "axios";

export const setAuthorization = (authorization) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
};

export const LoginCall = (data, onSubmission, onError) => {
  let url = "/api/Tickets/login";
  axios.post(url, data, onSubmission, onError);
};

export const GetTickets = (onSubmission, onError) => {
  let url = "/api/Tickets/GetTickets";
  axios.get(url, onSubmission, onError);
};

export const UpdateStatus = (data, onSubmission, onError) => {
  let url = "/api/Tickets/UpdateStatus ";
  axios.get(url, data, onSubmission, onError);
};

let ticketEntryMock = {
  Id: 1,
  Name: "Transaction Server",
  StartDate: "2022-05-02T00:00:00",
  DueDate: "2022-05-15T00:00:00",
  Duration: 12,
  Status: 2,
  Assignee: "George Foulis",
  TaxId: 1111111,
};

export let ticketsMock = [
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
  ticketEntryMock,
];
