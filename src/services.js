import axios from "axios";

let baseURL = "https://frontendtest.unixfor.gr";

let ticketsMock = [];

let ticketEntryMock = {
  Id: 1,
  Name: "Transaction Server",
  StartDate: "2022-05-02T00:00:00",
  DueDate: "2022-05-12T00:00:00",
  Duration: 12,
  Status: 1,
  Assignee: "George Foulis",
  TaxId: 01111111,
};

/* 
Status code debugging
Open = 0,
InProgress = 1,
Finished = 2
*/
