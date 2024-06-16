import { useState } from "react";
import InputEnabledFieldComponent from "@/components/invoice_form/InputEnabledFieldComponent";

const InvoiceDetailsInputComponent = ({
  invoiceNo: inputInvoiceNo,
  invoiceDate: inputInvoiceDate,
  register,
  formErrors,
  isFormSubmittedOnce,
  isMobileNav,
  disableInputs,
}) => {
  const [invoiceNo, setInvoiceNoVal] = useState(inputInvoiceNo);
  const [invoiceDate, setInvoiceDateVal] = useState(inputInvoiceDate);
  const handleInvoiceNoOnChange = (inputName, inputValue) => {
    setInvoiceNoVal(inputValue);
    // console.log("In handleInvoiceNoOnChange", inputName, inputValue);
  };
  const handleInvoiceDateOnChange = (inputName, inputValue) => {
    setInvoiceDateVal(inputValue);
    // console.log("In handleInvoiceDateOnChange", inputName, inputValue);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Invoice Number auto-generated */}
      <InputEnabledFieldComponent
        labelName="Invoice Number"
        inputType="text"
        inputName="invoice_no"
        inputValue={invoiceNo}
        otherAttr={{
          placeholder: "Invoice No",
          disabled: false,
        }}
        register={register}
        inputValidations={{
          required: "Invoice No required!",
          minLength: {
            value: 1,
            message: "Invoice No too Short!",
          },
          maxLength: {
            value: 30,
            message: "Invoice No too Long!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleInvoiceNoOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        doFocus={true}
        isMobileNav={isMobileNav}
        disableInputs={disableInputs}
      />
      {/* Invoice Date auto-generated */}
      <InputEnabledFieldComponent
        labelName="Invoice Date"
        inputType="date"
        inputName="invoice_date"
        inputValue={invoiceDate}
        otherAttr={{
          placeholder: "Invoice Date",
          disabled: false,
        }}
        register={register}
        inputValidations={{
          required: "Invoice Date required!",
        }}
        formErrors={formErrors}
        handleOnChange={handleInvoiceDateOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        isMobileNav={isMobileNav}
        disableInputs={disableInputs}
      />
    </div>
  );
};

export default InvoiceDetailsInputComponent;
