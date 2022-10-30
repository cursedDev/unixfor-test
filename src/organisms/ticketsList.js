import { useState } from "react";
import { TicketsListEntry } from "../atoms/ticketsListEntry";
import { UpdateStatus } from "../services";

export const TickesList = ({ tickets, setTickets }) => {
  /* ???????
  Ο χρήστης, πατώντας σε κάποιο κουμπί στη πάνω δεξιά γωνία της οθόνης, θα μπορεί να
  μεταβάλει τον τρόπο εμφάνισης της λίστας των tickets από καρτέλες σε μορφή grid και
  αντίστροφα.
  */
  const [gridView, setGridView] = useState(false);

  const updateStatusTicketCall = (id) => {
    UpdateStatus(
      id,
      (r) => updateStatusTicket(id, r.data),
      (e) => console.log(e)
    );
  };

  const updateStatusTicket = (id, newStatus) => {
    console.log(newStatus);
    let copiedTickets = [...tickets];
    let index = copiedTickets.findIndex(({ Id }) => Id === id);
    copiedTickets[index].Status = newStatus;
    setTickets(copiedTickets);
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setGridView(!gridView)}>
        Switch to {gridView ? "grid" : "list"} view
      </button>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket, index) => {
            return (
              <TicketsListEntry
                key={index}
                ticket={ticket}
                grid={gridView}
                updateStatus={updateStatusTicketCall}
              />
            );
          })}
      </div>
    </div>
  );
};
