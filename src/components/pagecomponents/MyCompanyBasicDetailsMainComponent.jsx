import CustomButtonWithIcon from "@/components/common/CustomButtonWithIcon";
import CustomFormSectionTitleSubTitle from "@/components/common/CustomFormSectionTitleSubTitle";
import InputEnabledFieldComponent from "@/components/invoice_form/InputEnabledFieldComponent";
import { billFrom } from "@/models/SellerDetailsJson";
import { numberInputOnWheelPreventChange } from "@/utilities/InputNumberMethods";
import { isObjectEmpty } from "@/utilities/ObjectUtils";
import {
  CreditCardIcon,
  CurrencyRupeeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PencilIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MyCompanyBasicDetailsMainComponent = ({ isMobileNav }) => {
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const [myCmpnyBasicDtls, setMyCmpnyBasicDtls] = useState({
    ...billFrom,
  });
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: async () => myCmpnyBasicDtls,
  });

  const onMyCmpnyBasicDtlsSubmit = (data) => {
    // it means customer details are entered by user and are also validated
    // console.log("onMyCmpnyBasicDtlsSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      setMyCmpnyBasicDtls((prevDtls) => ({
        ...data,
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onMyCmpnyBasicDtlsSubmit)}
      className={`w-full h-full sm:px-4`}
    >
      <div className="w-full h-full flex flex-col">
        <CustomFormSectionTitleSubTitle
          title={"My Company/Business Basic Details"}
          subtitle={"Enter your Company/Business Details below."}
          showBottomLine={true}
        />
        <div className="w-full h-full">
          <InputEnabledFieldComponent
            labelName="Company Name"
            inputType="text"
            inputName="company"
            otherAttr={{
              placeholder: "Your company name",
              disabled: !editBtnClicked,
            }}
            register={register}
            inputValidations={{
              required: "Company name required!",
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
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={UserIcon}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="Company Address"
            inputType="text"
            inputName="address"
            otherAttr={{
              placeholder: "Your company address",
              disabled: !editBtnClicked,
            }}
            register={register}
            inputValidations={{
              maxLength: {
                value: 150,
                message: "Address too Long!",
              },
            }}
            formErrors={formErrors}
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={IdentificationIcon}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="Company Mobile Number"
            inputType="number"
            inputName="mobileNo"
            otherAttr={{
              placeholder: "Your Company Mobile Number",
              disabled: !editBtnClicked,
              onWheel: numberInputOnWheelPreventChange,
            }}
            register={register}
            inputValidations={{
              required: "Company Mobile Number required!",
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
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={PhoneIcon}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="Email Id|Email"
            inputType="text"
            inputName="email"
            otherAttr={{
              placeholder: "Your Company Email Id",
              disabled: !editBtnClicked,
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
            // handleOnChange={handleEmailIdOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={EnvelopeIcon}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="Pan No"
            inputType="text"
            inputName="panNo"
            otherAttr={{
              placeholder: "Your Company Pan Number",
              disabled: !editBtnClicked,
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
            // handleOnChange={handlePanNoOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={CreditCardIcon}
            inputStyleClass={`uppercase`}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="GSTIN No"
            inputType="text"
            inputName="gstRegstrtnNo"
            otherAttr={{
              placeholder: "Your Company Gst Registration Number",
              disabled: !editBtnClicked,
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
            // handleOnChange={handleGstOnChange}
            isFormSubmittedOnce={editBtnClicked}
            inputIcon={CurrencyRupeeIcon}
            isMobileNav={isMobileNav}
          />
        </div>
        <div className="w-full h-full py-8 flex flex-row justify-center items-center gap-2 sm:gap-12">
          <CustomButtonWithIcon
            label={isMobileNav ? "Edit Details" : "Edit Your Company Details"}
            btnWidth={`${"w-36 sm:w-64"}`}
            icon={!isMobileNav && PencilIcon}
            isIconFirst={false}
            showTextOnSmallScreens={true}
            keepLabelIconGap={true}
            bgColor={"bg-white"}
            borderColor={"border-gray-500 disabled:border-gray-400"}
            doIconTransition={true}
            hoverBgColor={"hover:bg-gray-100"}
            textColor={"text-black"}
            handleOnClick={() => setEditBtnClicked(true)}
            otherStyles={"text-sm sm:text-base"}
            disabled={editBtnClicked}
          />
          <CustomButtonWithIcon
            label="Save Details"
            btnType={"submit"}
            btnWidth={`${"w-36 sm:w-64"}`}
            borderColor={"border-green-500 disabled:border-gray-400"}
            bgColor="bg-green-600"
            hoverBgColor="hover:bg-green-700"
            textColor="text-white"
            showTextOnSmallScreens={true}
            otherStyles={"text-sm sm:text-base"}
            handleOnClick={() =>
              isObjectEmpty(formErrors) && setEditBtnClicked(false)
            }
            disabled={false}
          />
        </div>
      </div>
    </form>
  );
};

export default MyCompanyBasicDetailsMainComponent;
