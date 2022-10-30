import Moment from "react-moment";

import { useState, useEffect } from "react";

export const StatusDisplay = ({ status }) => {};

export const DateDisplay = ({ date }) => {};

export const AfmCheck = ({ afm }) => {};

/*

https://tatief.wordpress.com/2008/12/29/αλγόριθμος-του-αφμ-έλεγχος-ορθότητας/

f IsNumber Then
TotalVal = 0
For i = 8 To 1 Step -1
TotalVal = TotalVal + Val(Mid(VatNo, i, 1)) * 2 ^ (9 – i)
Next
RetVal = (((TotalVal Mod 11) Mod 10) = Val(Right(VatNo, 1)))
End If
End If
CheckAFM = RetVal
End Function

*/

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
