import { Fragment } from "react";
import InvoiceBankDetails from "./InvoiceBankDetails";
import InvoiceTotal from "./InvoiceTotal";
import { numToWord } from "./../../utilities/NumToWord";

const InvoiceTableFooter = ({ invoice }) => {
  // console.log(
  //   "InvoiceTableFooter",
  //   invoice.autoGenFinalPrices,
  //   invoice.manualTotalAmt,
  //   invoice
  // );
  return (
    <Fragment>
      {invoice.autoGenFinalPrices ? (
        <InvoiceTotal
          totalTaxAmt={invoice.totalGstAmt}
          totalAmtInNum={invoice.totalAmt}
          totalAmtInWords={numToWord(Math.ceil(invoice.totalAmt))}
        />
      ) : (
        <InvoiceTotal
          totalTaxAmt={invoice.manualTotalGstAmt}
          totalAmtInNum={invoice.manualTotalAmt}
          totalAmtInWords={numToWord(Math.ceil(invoice.manualTotalAmt))}
        />
      )}

      <InvoiceBankDetails bankDetails={invoice.bankDetails} />
    </Fragment>
  );
};

export default InvoiceTableFooter;
