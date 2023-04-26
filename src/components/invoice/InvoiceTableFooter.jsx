import { Fragment } from "react";
import InvoiceBankDetails from "./InvoiceBankDetails";
import InvoiceTotal from "./InvoiceTotal";
import { numToWord } from "./../../utilities/NumToWord";

const InvoiceTableFooter = ({ invoice }) => {
  return (
    <Fragment>
      <InvoiceTotal
        totalTaxAmt={invoice.totalGstAmt}
        totalAmtInNum={invoice.totalAmt}
        totalAmtInWords={numToWord(Math.ceil(invoice.totalAmt))}
      />
      <InvoiceBankDetails bankDetails={invoice.bankDetails} />
    </Fragment>
  );
};

export default InvoiceTableFooter;
