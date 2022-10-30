import { createServer } from "miragejs";

createServer({
  routes() {
    this.post("/api/Tickets/login", () => `8vsdasd45vv545343543dsad354`);
    this.get("/api/Tickets/GetTickets", () =>
      ticketsMock.sort((a, b) => a.Id - b.Id)
    );
    this.post("/api/Tickets/UpdateStatus", () => 2);
  },
});

const Names = ["Transaction Server", "Distribution Server", "Dispatch Server"];

const Assignees = [
  "George Rivera",
  "Michael Medina",
  "John Todman",
  "Mary Hoelich",
  "Demetrious Soriano",
  "Andrew Moreno",
];

const taxIds = [
  593039681, 109447653, 303289022, 828630912, 801095101, 867274634, 472956690,
  725730940, 903050371, 459932477, 841878335,
];

function randomDateAfterDate(start, days) {
  return new Date(start.getTime() + Math.random() * days * 24 * 60 * 60 * 1000);
}

export const ticketFactory = () => {
  let startDate = randomDateAfterDate(
    new Date(),
    Math.floor(Math.random() * 8)
  );
  let dueDate = randomDateAfterDate(startDate, Math.floor(Math.random() * 15));

  return {
    Id: Math.floor(Math.random() * 80000),
    Name: Names[Math.floor(Math.random() * Names.length)],
    StartDate: startDate,
    DueDate: dueDate,
    Duration: Math.floor(Math.random() * 10),
    Status: Math.floor(Math.random() * 2),
    Assignee: Assignees[Math.floor(Math.random() * Assignees.length)],
    TaxId: taxIds[Math.floor(Math.random() * taxIds.length)],
  };
};

export let ticketsMock = [
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
  ticketFactory(),
];
