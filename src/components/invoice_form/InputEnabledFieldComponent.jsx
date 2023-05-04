import CustomFormInput from "../common/CustomFormInput";

const InputEnabledFieldComponent = ({
  labelName,
  inputType,
  inputName,
  prefilledValue,
  otherAttr,
  register,
  inputValidations,
  formErrors,
  handleOnChange,
  isFormSubmittedOnce,
  styles,
  inputIcon,
  inputStyleClass,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-row justify-between p-4 pb-6">
        <label>
          {labelName}{" "}
          {inputValidations?.required != null &&
            inputValidations.required != false && (
              <span className="text-red-600">*</span>
            )}
        </label>
        <CustomFormInput
          inputType={inputType}
          inputName={inputName}
          defaultInputValue={prefilledValue}
          otherAttr={otherAttr}
          styles={styles}
          register={register}
          inputValidations={inputValidations}
          formErrors={formErrors}
          handleOnChange={handleOnChange}
          isFormSubmittedOnce={isFormSubmittedOnce}
          inputIcon={inputIcon}
          inputStyleClass={inputStyleClass}
        />
      </div>
      <hr className={`w-[97%]`} />
    </div>
  );
};

export default InputEnabledFieldComponent;
