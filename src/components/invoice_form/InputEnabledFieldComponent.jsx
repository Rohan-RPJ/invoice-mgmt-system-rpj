import CustomFormInput from "../common/CustomFormInput";
import CustomFormTextArea from "../common/CustomFormTextArea";

const InputEnabledFieldComponent = ({
  isInputTextArea,
  isMobileNav,
  labelName,
  inputType,
  inputName,
  inputValue,
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
  doFocus,
}) => {
  let screenSpecificLabelNames = labelName.split("|");
  screenSpecificLabelNames =
    screenSpecificLabelNames.length === 2
      ? screenSpecificLabelNames
      : [screenSpecificLabelNames[0], screenSpecificLabelNames[0]];
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between p-4 pb-6">
        <label>
          {isMobileNav
            ? screenSpecificLabelNames[1]
            : screenSpecificLabelNames[0]}{" "}
          {inputValidations?.required != null &&
            inputValidations.required != false && (
              <span className="text-red-600">*</span>
            )}
        </label>
        {isInputTextArea ? (
          <CustomFormTextArea
            inputType={inputType}
            inputName={inputName}
            inputValue={inputValue}
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
            doFocus={doFocus}
          />
        ) : (
          <CustomFormInput
            inputType={inputType}
            inputName={inputName}
            inputValue={inputValue}
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
            doFocus={doFocus}
          />
        )}
      </div>
      <hr className={`w-[97%]`} />
    </div>
  );
};

export default InputEnabledFieldComponent;
