import { useEffect, useState } from "react";
import { TicketsListEntry } from "../atoms/ticketsListEntry";
import { UpdateStatus } from "../services";
import { toast } from "react-toastify";
import { Button } from "../atoms/button";
export const TicketsList = ({ tickets, setTickets }) => {
  /* ???????
  Δεν καταλαβα τι πρεπει να κανω εδω, οποτε απλως το συνδεσα.
  Ο χρήστης, πατώντας σε κάποιο κουμπί στη πάνω δεξιά γωνία της οθόνης, θα μπορεί να
  μεταβάλει τον τρόπο εμφάνισης της λίστας των tickets από καρτέλες σε μορφή grid και
  αντίστροφα.
  */
  const [gridView, setGridView] = useState(true);

  // cause I am treating it as a single page application, if u logout and log in back again,
  // it keeps the previous gridview bool, so I reset it
  useEffect(() => {
    setGridView(true);
  }, []);

  const updateStatusTicketCall = (id) => {
    UpdateStatus(
      id,
      (r) => updateStatusTicket(id, r.data),
      (e) => toast.error("Couldn't update the status of the selected ticket.")
    );
  };

  // copy tickets in a temp array, find the index of the id we want to update
  // pper backend response, change the status and then set the copied array
  // to the "controlled / original" array
  const updateStatusTicket = (id, newStatus) => {
    let copiedTickets = [...tickets];
    let index = copiedTickets.findIndex(({ Id }) => Id === id);
    copiedTickets[index].Status = newStatus;
    setTickets(copiedTickets);
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        className="place-self-end"
        onClick={() => setGridView(!gridView)}
        label={`Switch to ${gridView ? "grid" : "list"} view`}
      />
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
