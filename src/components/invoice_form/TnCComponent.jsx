import { isObjectEmpty } from "@/utilities/ObjectUtils";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import { useState } from "react";
import InputEnabledFieldComponent from '@/components/invoice_form/InputEnabledFieldComponent';

const TnCComponent = ({
  form,
  tnC: inputTnC,
  isFormSubmittedOnce,
  isMobileNav,
  handleOnTnCChange,
  activeComponent,
  handleOnBackClick,
  handleOnNextClick,
  handleOnSaveClick
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = form;

  const [tnC, setTnC] = useState(inputTnC);
  const handleTnCOnChange = (inputName, inputValue) => {
    setTnC(inputValue);
    console.log("In handleTnCNoOnChange", inputName, inputValue);
  };

  const handleOnTnCSubmit = (data) => {
    // it means tnC are entered by user and are also validated
    console.log("onTnCSubmit", data, isFormSubmittedOnce, isObjectEmpty(formErrors));

    if (data != null && !isObjectEmpty(data)) {
      const delayDebounceFn = setTimeout(() => {
        handleOnTnCChange(data.tnC);
      }, 0);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnTnCSubmit)}
      className={`w-full h-full`}
    >
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="w-full h-full basis-2/4">
              <CustomFormSectionTitleSubTitle
                title={"Terms and Conditions"}
                subtitle={"Enter Terms and Conditions below."}
                showBottomLine={false}
              />
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <hr className={`w-[97%]`} />
          </div>
          {/* Invoice Number auto-generated */}
          <InputEnabledFieldComponent
            isInputTextArea={true}
            labelName="Terms and Conditions"
            inputType="textarea"
            inputName="tnC"
            inputValue={tnC}
            otherAttr={{
              placeholder: "Terms and Conditions",
              disabled: false,
            }}
            register={register}
            inputValidations={{
              required: "Terms and Conditions required!",
              minLength: {
                value: 1,
                message: "Terms and Conditions too Short!",
              },
              //   maxLength: {
              //     value: 150,
              //     message: "Terms and Conditions too Long!",
              //   },
            }}
            formErrors={formErrors}
            handleOnChange={handleTnCOnChange}
            isFormSubmittedOnce={isFormSubmittedOnce}
            doFocus={true}
            isMobileNav={isMobileNav}
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

export default TnCComponent;
