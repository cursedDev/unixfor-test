import Moment from "react-moment";

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
