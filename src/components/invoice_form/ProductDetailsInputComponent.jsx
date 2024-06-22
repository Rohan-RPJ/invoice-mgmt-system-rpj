import RadioButtonList from "../common/RadioButtonList";
import InputEnabledFieldComponent from "./InputEnabledFieldComponent";

const ProductDetailsInputComponent = ({
  id,
  prodDtls,
  handleOnProdDetailChange,
  register,
  formErrors,
  isFormSubmittedOnce,
  isMobileNav,
  isAmountWithTax,
  handleIsAmountWithTax,
  totalProducts
}) => {
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
        otherAttr={{ placeHolder: "Product Unit Price", step: "any" }}
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
      {console.log(totalProducts)}
      <div className={`pt-4 pb-6 px-4 w-full flex flex-col sm:flex-row gap-4 sm:gap-8`}>
        <label className="w-[55%]">Amount With/Without Tax</label>
        <RadioButtonList radioItems={[{ label: "With Tax", checked: isAmountWithTax === true || isAmountWithTax === null || isAmountWithTax === undefined ? true : false, id: "taxWith" }, { label: "Without Tax", checked: isAmountWithTax === false ? true : false, id: "taxWithout" }]}
          handleOnRadioClicked={(selectedIndex) => { console.log(selectedIndex, selectedIndex == 1);; selectedIndex == 1 ? handleIsAmountWithTax(false) : handleIsAmountWithTax(true) }}
          disableInputs={totalProducts > 1}
        />
      </div>
    </div>
  );
};

export default ProductDetailsInputComponent;
