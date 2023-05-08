import {
  CreditCardIcon,
  CurrencyRupeeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import InputEnabledFieldComponent from "./InputEnabledFieldComponent";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";

const CustomerDetailsComponent = ({
  register,
  formErrors,
  isFormSubmittedOnce,
  isMobileNav,
}) => {
  const handleOnChange = (inputName, inputValue) => {
    // setCustName(inputValue);
    console.log("In handleCustNameChng", inputName, inputValue);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <CustomFormSectionTitleSubTitle
        title={"Customer Details"}
        subtitle={
          "Enter Customer Details below to whom you want to sell the Items."
        }
      />

      <InputEnabledFieldComponent
        labelName="Name"
        inputType="text"
        inputName="company"
        otherAttr={{
          placeholder: "Customer/Company Name",
        }}
        register={register}
        inputValidations={{
          required: "Customer/Company Name required!",
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
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={UserIcon}
        doFocus={true}
      />
      <InputEnabledFieldComponent
        labelName="Address"
        inputType="text"
        inputName="address"
        otherAttr={{
          placeholder: "Customer Address",
        }}
        register={register}
        inputValidations={{
          maxLength: {
            value: 150,
            message: "Address too Long!",
          },
        }}
        formErrors={formErrors}
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={IdentificationIcon}
      />
      <InputEnabledFieldComponent
        labelName="Mobile No|Mobile"
        inputType="number"
        inputName="mobileNo"
        otherAttr={{
          placeholder: "Customer Mobile Number",
        }}
        inputValidations={{
          required: "Customer Mobile Number required!",
          minLength: {
            value: 10,
            message: "Invalid Mobile Number!",
          },
          maxLength: {
            value: 10,
            message: "Invalid Mobile Number!",
          },
        }}
        register={register}
        formErrors={formErrors}
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={PhoneIcon}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Email Id|Email"
        inputType="text"
        inputName="email"
        otherAttr={{
          placeholder: "Customer Email Id",
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
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={EnvelopeIcon}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Pan No"
        inputType="text"
        inputName="panNo"
        otherAttr={{
          placeholder: "Customer Pan Number",
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
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={CreditCardIcon}
        inputStyleClass={`uppercase`}
      />
      <InputEnabledFieldComponent
        labelName="GSTIN No"
        inputType="text"
        inputName="gstRegstrtnNo"
        otherAttr={{
          placeholder: "Customer Gst Registration Number",
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
        handleOnChange={handleOnChange}
        isFormSubmittedOnce={isFormSubmittedOnce}
        inputIcon={CurrencyRupeeIcon}
      />
    </div>
  );
};

export default CustomerDetailsComponent;
