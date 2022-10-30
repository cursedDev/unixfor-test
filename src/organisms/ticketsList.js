import { TicketsListEntry } from "../atoms/ticketsListEntry";

export const TickesList = ({ tickets }) => {
  /* ???????
  Ο χρήστης, πατώντας σε κάποιο κουμπί στη πάνω δεξιά γωνία της οθόνης, θα μπορεί να
  μεταβάλει τον τρόπο εμφάνισης της λίστας των tickets από καρτέλες σε μορφή grid και
  αντίστροφα.
  */
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      {tickets &&
        tickets.length > 0 &&
        tickets.map((ticket, index) => {
          return <TicketsListEntry key={index} ticket={ticket} />;
        })}
    </div>
  );
};
