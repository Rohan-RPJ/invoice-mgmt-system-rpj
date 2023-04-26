import {
  ExclamationCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomFormInput = ({
  inputType,
  inputName,
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
}) => {
  const [isInputValNullEmpty, setIsInputValNullEmpty] = useState(true);

  const handleOnInputChange = (inputName, inputValue) => {
    if (inputValue && inputValue !== "") setIsInputValNullEmpty(false);
    else setIsInputValNullEmpty(true);

    handleOnChange(inputName, inputValue);
  };

  return (
    <div className="w-[60%] h-full flex flex-col gap-1">
      <div className={`w-full h-full relative`}>
        {InputIcon && (
          <InputIcon
            width={34}
            className={`pl-2 absolute m-auto top-1/2 bottom-1/2 text-gray-600`}
          />
        )}
        <input
          autoFocus
          autoComplete="off"
          type={inputType}
          name={inputName}
          defaultValue={defaultInputValue != null ? defaultInputValue : ""}
          {...otherAttr}
          className={`${inputStyleClass} ${
            InputIcon && "pl-10"
          } w-full text-black border-2 border-gray-300 transition-colors 
                ease-in-out duration-300 outline-none shadow-sm 
                ${
                  formErrors[inputName]
                    ? "border-red-600"
                    : isFormSubmittedOnce && !isInputValNullEmpty
                    ? "border-green-600"
                    : "focus:border-sky-400"
                }
                px-2 py-3 rounded-md`}
          // styles={...styles}
          {...register(inputName, {
            ...inputValidations,
            onChange: (e) => handleOnInputChange(inputName, e.target.value),
          })}
        />
        {formErrors[inputName] ? (
          <ExclamationCircleIcon
            width={35}
            className={`text-red-500 absolute right-0 top-1/2 bottom-1/2 m-auto pr-2`}
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

export default CustomFormInput;
