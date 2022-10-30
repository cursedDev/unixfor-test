import { TicketsListEntry } from "../atoms/ticketsListEntry";

export const TickesList = ({ tickets }) => {
  return (
    tickets &&
    tickets.length > 0 &&
    tickets.map((ticket, index) => {
      return <TicketsListEntry key={index} ticket={ticket} />;
    })
  );
};
