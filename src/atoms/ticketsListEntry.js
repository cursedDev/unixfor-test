import { useSingleAndDoubleClick } from "../helpers";

import { StatusDisplay, DateDisplay, AfmCheck } from "../helpers";

export const TicketsListEntry = ({ ticket, updateStatus }) => {
  // handling double click to make api call
  const click = useSingleAndDoubleClick(
    () => {},
    () => updateStatus(ticket.Id)
  );

  return (
    <div className="border-2 border-gray-400 border-l-4 border-l-blue-600">
      <div className="py-4 px-4 flex flex-col gap-4 justify-center">
        <button
          onClick={click}
          className="place-self-center text-center border-2 py-2 border-black w-full"
        >
          <span className="font-bold text-blue-600">{ticket?.Name}</span>
        </button>
        <div className="grid grid-cols-3 gap-2 w-full">
          <FieldRow label={"Id"}>
            <span>{ticket?.Id}</span>
          </FieldRow>
          <FieldRow label={"Start date"}>
            <DateDisplay date={ticket?.StartDate} />
          </FieldRow>
          <FieldRow label={"Due date"}>
            <DateDisplay date={ticket?.DueDate} />
          </FieldRow>
          <FieldRow label={"Assignee"}>
            <span>{ticket?.Assignee}</span>
          </FieldRow>
          <FieldRow label={"Status"}>
            <StatusDisplay status={ticket?.Status} />
          </FieldRow>
          <FieldRow label={"Tax Id"}>
            <AfmCheck afm={ticket?.TaxId} />
          </FieldRow>
        </div>
      </div>
    </div>
  );
};

const FieldRow = ({ label, children }) => {
  return (
    <>
      <div className="col-span-1">{label}</div>
      <div className="col-span-2">{children}</div>
    </>
  );
};
