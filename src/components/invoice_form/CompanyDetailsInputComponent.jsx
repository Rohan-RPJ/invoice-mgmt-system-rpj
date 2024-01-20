import {
  CreditCardIcon,
  CurrencyRupeeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import InputEnabledFieldComponent from "./InputEnabledFieldComponent";
import { useState } from "react";
import { numberInputOnWheelPreventChange } from "@/utilities/InputNumberMethods";

const CompanyDetailsInputComponent = ({
  cmpnyDtlsInstance,
  register,
  formErrors,
  isFormSubmittedOnce,
  isMobileNav,
  sellerCustomerText,
  disableInputs,
}) => {
  const [cmpnyNameVal, setCmpnyNameVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyName() : ""
  );
  const [cmpnyAddrVal, setCmpnyAddrVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyAddr() : ""
  );
  const [cmpnyMobNoVal, setCmpnyMobNoVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyMobNo() : ""
  );
  const [cmpnyEmailVal, setCmpnyEmailVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyEmail() : ""
  );
  const [cmpnyPanNoVal, setCmpnyPanNoVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyPanNo() : ""
  );
  const [cmpnyGstVal, setCmpnyGstVal] = useState(
    cmpnyDtlsInstance ? cmpnyDtlsInstance.getCmpnyGst() : ""
  );

  const handleCmpnyNameOnChange = (inputName, inputValue) => {
    setCmpnyNameVal(inputValue);
    console.log("In handleCmpnyNameOnChange", inputName, inputValue);
  };

  const handleCmpnyAddrOnChange = (inputName, inputValue) => {
    setCmpnyAddrVal(inputValue);
    console.log("In handleCmpnyAddrOnChange", inputName, inputValue);
  };

  const handleMobNoOnChange = (inputName, inputValue) => {
    setCmpnyMobNoVal(inputValue);
    console.log("In handleMobNoOnChange", inputName, inputValue);
  };

  const handleEmailIdOnChange = (inputName, inputValue) => {
    setCmpnyEmailVal(inputValue);
    console.log("In handleEmailIdOnChange", inputName, inputValue);
  };

  const handlePanNoOnChange = (inputName, inputValue) => {
    setCmpnyPanNoVal(inputValue);
    console.log("In handlePanNoOnChange", inputName, inputValue);
  };

  const handleGstOnChange = (inputName, inputValue) => {
    setCmpnyGstVal(inputValue);
    console.log("In handleGstOnChange", inputName, inputValue);
  };

  return (
    <div>
      <InputEnabledFieldComponent
        labelName="Name"
        inputType="text"
        inputName="company"
        inputValue={cmpnyNameVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Name",
          disabled: disableInputs,
        }}
        register={register}
        inputValidations={{
          required: sellerCustomerText + " Name required!",
          minLength: {
            value: 2,
            message: "Name too Short!",
          },
          maxLength: {
            value: 50,
            message: "Name too Long!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleCmpnyNameOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={UserIcon}
        doFocus={true}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Address"
        inputType="text"
        inputName="address"
        inputValue={cmpnyAddrVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Address",
          disabled: disableInputs,
        }}
        register={register}
        inputValidations={{
          maxLength: {
            value: 180,
            message: "Address too Long!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleCmpnyAddrOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={IdentificationIcon}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Mobile No|Mobile"
        inputType="number"
        inputName="mobileNo"
        inputValue={cmpnyMobNoVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Mobile Number",
          disabled: disableInputs,
          onWheel: numberInputOnWheelPreventChange,
        }}
        register={register}
        inputValidations={{
          required: sellerCustomerText + " Mobile Number required!",
          minLength: {
            value: 10,
            message: "Invalid Mobile Number!",
          },
          maxLength: {
            value: 10,
            message: "Invalid Mobile Number!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleMobNoOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={PhoneIcon}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Email Id|Email"
        inputType="text"
        inputName="email"
        inputValue={cmpnyEmailVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Email Id",
          disabled: disableInputs,
        }}
        register={register}
        inputValidations={{
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid Email Id!",
          },
          maxLength: {
            value: 100,
            message: "Email Id too Long!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleEmailIdOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={EnvelopeIcon}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Pan No"
        inputType="text"
        inputName="panNo"
        inputValue={cmpnyPanNoVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Pan Number",
          disabled: disableInputs,
        }}
        register={register}
        inputValidations={{
          minLength: {
            value: 10,
            message: "Invalid Pan Number!",
          },
          maxLength: {
            value: 10,
            message: "Invalid Pan Number!",
          },
          pattern: {
            value: /^[A-Za-z0-9]+$/,
            message: "Invalid Pan Number!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handlePanNoOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={CreditCardIcon}
        inputStyleClass={`uppercase`}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="GSTIN No"
        inputType="text"
        inputName="gstRegstrtnNo"
        inputValue={cmpnyGstVal}
        otherAttr={{
          placeholder: sellerCustomerText + " Gst Registration Number",
          disabled: disableInputs,
        }}
        register={register}
        inputValidations={{
          minLength: {
            value: 15,
            message: "Invalid GST Number!",
          },
          maxLength: {
            value: 15,
            message: "Invalid GST Number!",
          },
          pattern: {
            value: /^[A-Za-z0-9]+$/,
            message: "Invalid GST Number!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleGstOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={CurrencyRupeeIcon}
        isMobileNav={isMobileNav}
      />
    </div>
  );
};

export default CompanyDetailsInputComponent;
