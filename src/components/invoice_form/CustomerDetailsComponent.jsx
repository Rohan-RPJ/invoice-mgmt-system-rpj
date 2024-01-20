import { useState } from "react";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import CompanyDetails from "./CompanyDetailsInputComponent";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import { isObjectEmpty } from "@/utilities/ObjectUtils";
import CompanyDetailsInstance from "./CompanyDetailsInstance";

const CustomerDetailsComponent = ({
  form,
  currCustomerDtls,
  isFormSubmittedOnce,
  isMobileNav,
  handleOnCustDtlsChange,
  activeComponent,
  handleOnBackClick,
  handleOnNextClick,
  handleOnSaveClick,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = form;

  /*
  {
        company: "",
        email: "",
        mobileNo: "",
        address: "",
        panNo: "",
        gstRegstrtnNo: "",
      }
  */
  const cmpnyDtlsInstance = new CompanyDetailsInstance(
    currCustomerDtls.company,
    currCustomerDtls.address,
    currCustomerDtls.mobileNo,
    currCustomerDtls.email,
    currCustomerDtls.panNo,
    currCustomerDtls.gstRegstrtnNo
  );

  const onCustDtlSubmit = (data) => {
    // it means customer details are entered by user and are also validated
    console.log("onCustDtlSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      const delayDebounceFn = setTimeout(() => {
        handleOnCustDtlsChange(data);
      }, 0);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  return (
    <form onSubmit={handleSubmit(onCustDtlSubmit)} className={`w-full h-full`}>
      <div className="w-full h-full">
        {/* Invoice Number auto-generated */}
        {/* <InputDisabledFieldComponent
                  labelName="Invoice Number"
                  inputType="text"
                  inputName="invoice_no"
                  inputValue={invoiceJsonData.invoice_no}
                /> */}
        {/* Invoice Date auto-generated */}
        {/* <InputDisabledFieldComponent
                  labelName="Invoice Date"
                  inputType="text"
                  inputName="invoice_date"
                  inputValue={new Date().toLocaleDateString()}
                /> */}

        {/* Customer Details will be entered by User : Name, Addr, Mob, Email etc. */}
        <div className="w-full h-full flex flex-col">
          <CustomFormSectionTitleSubTitle
            title={"Customer Details"}
            subtitle={
              "Enter Customer Details below to whom you want to sell the Items."
            }
            showBottomLine={true}
          />
          <CompanyDetails
            cmpnyDtlsInstance={cmpnyDtlsInstance}
            register={register}
            formErrors={formErrors}
            isFormSubmittedOnce={isFormSubmittedOnce}
            isMobileNav={isMobileNav}
            sellerCustomerText={"Customer"}
            disableInputs={false}
          />
        </div>
        <InvoiceFormFooterButtons
          activeComponent={activeComponent}
          enableNextBtn={isFormSubmittedOnce && isObjectEmpty(formErrors)}
          enableSaveBtn={true}
          handleOnBackClick={() => handleOnBackClick()}
          handleOnNextClick={() => handleOnNextClick()}
          handleOnSaveClick={() => handleOnSaveClick()}
        />
      </div>
    </form>
  );
};

export default CustomerDetailsComponent;
