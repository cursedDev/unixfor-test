import { useState, useEffect } from "react";

import moment from "moment";

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

export const DateDisplay = ({ date }) => {
  let dateDis = moment(date).format("YYYY/MM/DD");
  return <span>{dateDis.toString()}</span>;
};

export const AfmCheck = ({ afm }) => {
  // valid afm 731385437
  // invalid afm 853003357
  let error = validateAFM(afm.toString());

  return <span className={error ? "" : "text-red-400"}>{afm}</span>;
};

export function validateAFM(afm) {
  if (afm.length != 9 || !/^\d+$/.test(afm) || afm === "0".repeat(9)) {
    // "Τα ψηφία του ΑΦΜ πρέπει να είναι 9 αριθμοί"
    return false;
  }

  const sum = afm
    .substring(0, 8)
    .split("")
    .reduce((s, v, i) => s + (parseInt(v) << (8 - i)), 0);

  const calc = sum % 11;
  const d9 = parseInt(afm[8]);
  const valid = calc % 10 === d9;

  return valid;
}

export function useSingleAndDoubleClick(
  actionSimpleClick,
  actionDoubleClick,
  delay = 250
) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // simple click
      if (click === 1) actionSimpleClick();
      setClick(0);
    }, delay);

    // the duration between this click and the previous one
    // is less than the value of delay = double-click
    if (click === 2) actionDoubleClick();

    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}
