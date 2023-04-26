import { InvoiceFormConstants } from "@/constants/InvoiceContants";
import {
  default as InvoiceJsonProcessor,
  default as InvoiceJsonUtility,
} from "@/utilities/InvoiceJsonProcessor";
import { useState } from "react";
import CreateInvoiceFormComponent from "./invoice_form/CreateInvoiceFormComponent";

const CreateInvoiceMainComponent = ({isMobileNav}) => {
  return (
    <div className={`w-full h-full`}>
      <div className={``}>
        <CreateInvoiceFormComponent isMobileNav={isMobileNav} />
      </div>
    </div>
  );
};

export default CreateInvoiceMainComponent;
