import {
  ExclamationCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomFormTextArea = ({
  inputType,
  inputName,
  inputValue,
  defaultInputValue,
  otherAttr,
  register,
  inputValidations,
  formErrors,
  handleOnChange,
  isFormSubmittedOnce,
  styles,
  inputIcon: InputIcon,
  inputStyleClass,
  doFocus,
}) => {
  const [isInputValNullEmpty, setIsInputValNullEmpty] = useState(
    inputValue && inputValue !== "" ? false : true
  );
  // console.log("hi", isFormSubmittedOnce, isInputValNullEmpty, inputValue);

  const handleOnInputChange = (inputName, inputValue) => {
    if (inputValue && inputValue !== "") setIsInputValNullEmpty(false);
    else setIsInputValNullEmpty(true);
    // console.log(isFormSubmittedOnce, isInputValNullEmpty, inputValue);
    handleOnChange && handleOnChange(inputName, inputValue);
  };

  return (
    <div className="w-full sm:w-[60%] h-full flex flex-col gap-1">
      <div className={`w-full h-full relative`}>
        {InputIcon && (
          <InputIcon
            className={`w-[28px] sm:w-[34px] pl-2 absolute m-auto top-1/2 bottom-1/2 text-gray-600`}
          />
        )}
        <textarea
          autoFocus={doFocus == null ? false : doFocus}
          autoComplete="off"
          type={inputType}
          name={inputName}
          value={inputValue}
          defaultValue={defaultInputValue != null ? defaultInputValue : ""}
          {...otherAttr}
          className={`${inputStyleClass} ${
            InputIcon ? "pl-8 sm:pl-10" : "pl-2"
          } w-full text-black border-2 border-gray-300 transition-colors 
                ease-in-out duration-300 outline-none shadow-sm 
                ${
                  formErrors[inputName]
                    ? "border-red-600"
                    : isFormSubmittedOnce && !isInputValNullEmpty
                    ? "border-green-600"
                    : "focus:border-blue-600"
                }
                pr-8 sm:pr-9 py-2 sm:py-3 rounded-md`}
          // styles={...styles}
          {...register(inputName, {
            ...inputValidations,
            onChange: (e) => handleOnInputChange(inputName, e.target.value),
          })}
        />
        {formErrors[inputName] ? (
          <ExclamationCircleIcon
            className={`w-[30px] sm:w-[35px] text-red-500 absolute right-0 top-1/2 bottom-1/2 m-auto pr-2`}
          />
        ) : (
          isFormSubmittedOnce &&
          !isInputValNullEmpty && (
            <ShieldCheckIcon
              width={35}
              className={`text-green-500 absolute right-0 top-1/2 bottom-1/2 m-auto pr-2`}
            />
          )
        )}
      </div>
      <span className={`${formErrors[inputName] && "text-red-600 text-sm"}`}>
        {formErrors[inputName]?.message}
      </span>
    </div>
  );
};

export default CustomFormTextArea;
