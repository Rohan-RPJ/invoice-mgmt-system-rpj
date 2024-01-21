import React from "react";
import IndianRupeeComponent from "../common/IndianRupeeComponent";
import { Text } from "@react-pdf/renderer";

const AmountComponent = ({ amount, showAmount, style, amtStrMaxLen }) => {
  let invoiceAmt =
    amount != null && !amount.toString().trim() == "" ? parseFloat(amount) : 0;
  if (amtStrMaxLen == null) amtStrMaxLen = 8;
  if (invoiceAmt.toFixed(2).toString().length < amtStrMaxLen) {
    return (
      <Text style={{ ...style }}>
        {(showAmount == null || showAmount == true) && (
          <>
            <IndianRupeeComponent />
            {invoiceAmt.toFixed(2)}
          </>
        )}
      </Text>
    );
  } else {
    return (
      <Text style={{ ...style, fontSize: "8" }}>
        {(showAmount == null || showAmount == true) && (
          <>
            <IndianRupeeComponent />
            {invoiceAmt.toFixed(2)}
          </>
        )}
      </Text>
    );
  }
};

export default AmountComponent;
