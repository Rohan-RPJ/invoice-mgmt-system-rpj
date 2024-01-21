import { useState } from "react";
import InputEnabledFieldComponent from "./InputEnabledFieldComponent";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import { useForm } from "react-hook-form";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";

const ProductDetailsInputComponent = ({
  id,
  prodDtls,
  handleOnProdDetailChange,
  register,
  formErrors,
  isFormSubmittedOnce,
  isMobileNav,
}) => {
  console.log("ID", id)
  const handleOnChange = (prodName, prodValue) => {
    // handleProdDetailChange(id, prodName.split("-")[1], prodValue);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors: formErrors },
  // } = useForm();

  // const onProdDtlSubmit = (data) => {
  //   console.log("onProdDtlSubmit", data);
  // };

  // const [isFormSubmittedOnce, setIsProdDtlFormSubmittedOnce] =
  //   useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      <InputEnabledFieldComponent
        labelName="Description|DESC"
        inputType="text"
        inputName={id + "-desc"}
        prefilledValue={prodDtls?.desc}
        otherAttr={{ placeHolder: "Product Description" }}
        handleOnChange={handleOnChange}
        register={register}
        inputValidations={{
          required: "Product Description required!",
          maxLength: {
            value: 500,
            message: "Product Description too Long!",
          },
        }}
        formErrors={formErrors}
        isFormSubmittedOnce={isFormSubmittedOnce}
        doFocus={true}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Unit Price|PRICE"
        inputType="number"
        inputName={id + "-rate"}
        prefilledValue={prodDtls?.rate}
        otherAttr={{ placeHolder: "Product Unit Price" }}
        handleOnChange={handleOnChange}
        register={register}
        inputValidations={{
          required: "Product Unit Price required!",
          min: {
            value: 0,
            message: "Minimum Unit Price should be 0.",
          },
        }}
        formErrors={formErrors}
        isFormSubmittedOnce={isFormSubmittedOnce}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="Quantity|QTY"
        inputType="number"
        inputName={id + "-qty"}
        prefilledValue={prodDtls?.qty}
        otherAttr={{ placeHolder: "Product Quantity" }}
        handleOnChange={handleOnChange}
        register={register}
        inputValidations={{
          required: "Product Quantity required!",
          min: {
            value: 0,
            message: "Add minimum 1 quantity of product.",
          },
        }}
        formErrors={formErrors}
        isFormSubmittedOnce={isFormSubmittedOnce}
        isMobileNav={isMobileNav}
      />
      <InputEnabledFieldComponent
        labelName="GST %"
        inputType="number"
        inputName={id + "-gstPercent"}
        prefilledValue={prodDtls?.gstPercent}
        otherAttr={{ placeHolder: "Product Gst %" }}
        handleOnChange={handleOnChange}
        register={register}
        inputValidations={{
          required: "Product GST % required!",
          min: {
            value: 0,
            message: "Minimum Gst % should be 0.",
          },
          max: {
            value: 100,
            message: "Maximum Gst % should be 100.",
          },
        }}
        formErrors={formErrors}
        isFormSubmittedOnce={isFormSubmittedOnce}
      />
    </div>
  );
};

export default ProductDetailsInputComponent;
