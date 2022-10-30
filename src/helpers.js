import { useState, useEffect } from "react";

import moment from "moment";

// use switch statement based on status int, to change color and status display message
export const StatusDisplay = ({ status }) => {
  let statusDis = "";
  let color = "";

  switch (status) {
    case 0:
      statusDis = "Open";
      color = "text-red-600";
      break;
    case 1:
      statusDis = "In Progress";
      color = "text-blue-600";
      break;
    case 2:
      statusDis = "Finished";
      color = "text-green-600";
      break;
    default:
      statusDis = "Unknown";
      color = "text-black";
      break;
  }

  return <span className={color}>{statusDis}</span>;
};

// use moment to display utc date to a date that can be displayed to user
export const DateDisplay = ({ date }) => {
  let dateDis = moment(date).format("YYYY/MM/DD");
  return <span>{dateDis.toString()}</span>;
};

export const AfmCheck = ({ afm }) => {
  // valid afm 731385437
  // invalid afm 853003357
  let error = validateAFM(afm.toString());

  return <span className={!error && "text-red-400"}>{afm}</span>;
};

export function validateAFM(afm) {
  // it should have 8 characters, only numbers and not be only 0's
  if (afm.length !== 9 || !/^\d+$/.test(afm) || afm === "0".repeat(9)) {
    return false;
  }

  // starting by right hand side to left hand side, by char 9
  const sum = afm
    .substring(0, 8)
    .split("")
    .reduce((s, v, i) => s + (parseInt(v) << (8 - i)), 0);

  const calc = sum % 11;
  const d9 = parseInt(afm[8]);
  const valid = calc % 10 === d9;

  return valid;
}

export function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick) {
  // bypassing exhausting deps
  let simpleClick = () => {};
  if (actionSimpleClick) simpleClick = actionSimpleClick;

  let doubleClick = () => {};
  if (actionDoubleClick) doubleClick = actionDoubleClick;

  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // simple click
      if (click === 1) simpleClick();
      setClick(0);
    }, 250);

    // the duration between this click and the previous one
    // is less than the value of delay = double-click
    if (click === 2) doubleClick();

    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}
