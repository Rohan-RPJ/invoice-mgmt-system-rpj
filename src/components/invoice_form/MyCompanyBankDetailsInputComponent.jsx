import CustomButtonWithIcon from "@/components/common/CustomButtonWithIcon";
import CustomFormSectionTitleSubTitle from "@/components/common/CustomFormSectionTitleSubTitle";
import InputEnabledFieldComponent from "@/components/invoice_form/InputEnabledFieldComponent";
// import { bankDetails } from "@/models/SellerDetailsJson";
import { numberInputOnWheelPreventChange } from "@/utilities/InputNumberMethods";
import { isObjectEmpty } from "@/utilities/ObjectUtils";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomImage from "../common/CustomImage";
import ImageModal from "../common/ImageModal";

const MyCompanyBankDetailsInputComponent = ({
  isMobileNav,
  bankDetails,
  handleOnMyCmpnyBankDtlsChange,
}) => {
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const [myCmpnyBankDtls, setMyCmpnyBankDtls] = useState({
    ...bankDetails,
  });
  const [fileSrc, setFileSrc] = useState(myCmpnyBankDtls.upiQrImg);
  const onFileSelect = (e) => {
    // console.log("ININI");
    if (!e.target.files?.length) {
      return;
    }

    setFileSrc(null);
    var reader = new FileReader();

    reader.onload = function (e) {
      setFileSrc(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: async () => myCmpnyBankDtls,
  });

  const onMyCmpnyBankDtlsSubmit = (data) => {
    // it means customer details are entered by user and are also validated
    // console.log("onMyCmpnyBankDtlsSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      data.upiQrImg = fileSrc;
      setMyCmpnyBankDtls((prevDtls) => ({
        ...data,
      }));
      handleOnMyCmpnyBankDtlsChange && handleOnMyCmpnyBankDtlsChange(data);
    }
  };

  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onMyCmpnyBankDtlsSubmit)}
      className={`w-full h-full sm:px-4`}
    >
      <div className="w-full h-full flex flex-col">
        <CustomFormSectionTitleSubTitle
          title={"My Company/Business Bank Details"}
          subtitle={"Enter your Company/Business Bank Details below."}
          showBottomLine={true}
        />
        <div className="w-full h-full">
          <InputEnabledFieldComponent
            labelName="Bank Name"
            inputType="text"
            inputName="bankName"
            otherAttr={{
              placeholder: "Your Bank name",
              disabled: !editBtnClicked && isObjectEmpty(formErrors),
            }}
            register={register}
            inputValidations={{
              required: "Bank name required!",
              minLength: {
                value: 1,
                message: "Name too Short!",
              },
              maxLength: {
                value: 100,
                message: "Name too Long!",
              },
            }}
            formErrors={formErrors}
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="IFSC No"
            inputType="text"
            inputName="ifscNo"
            otherAttr={{
              placeholder: "Your Bank IFSC No",
              disabled: !editBtnClicked && isObjectEmpty(formErrors),
            }}
            register={register}
            inputValidations={{
              required: "IFSC Number required!",
              maxLength: {
                value: 20,
                message: "Invalid IFSC Number!",
              },
            }}
            formErrors={formErrors}
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <InputEnabledFieldComponent
            labelName="Bank Account Number"
            inputType="text"
            inputName="accountNo"
            otherAttr={{
              placeholder: "Your Bank Account Number",
              disabled: !editBtnClicked && isObjectEmpty(formErrors),
              onWheel: numberInputOnWheelPreventChange,
            }}
            register={register}
            inputValidations={{
              required: "Account Number required!",
            }}
            formErrors={formErrors}
            // handleOnChange={handleCmpnyNameOnChange}
            isFormSubmittedOnce={editBtnClicked}
            doFocus={true}
            isMobileNav={isMobileNav}
          />
          <div className="w-full h-full flex flex-col">
            {fileSrc && (
              <>
                <ImageModal
                  imageSrc={fileSrc}
                  showImageModal={showImageModal}
                  handleOnModalClose={() => {
                    setShowImageModal(() => false);
                  }}
                />
                <div
                  className="relative mt-4 rounded-md left-[41%] w-[150px] h-[150px] border-2 border-gray-200 shadow-lg group hover:cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                >
                  <CustomImage
                    src={fileSrc}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute rounded-t-sm w-full h-[20%] bg-blue-300 opacity-40 group-hover:opacity-60" />
                  <div className="absolute rounded-b-sm bottom-0 w-full h-[20%] bg-blue-300 opacity-40 group-hover:opacity-60" />
                </div>
              </>
            )}
            <InputEnabledFieldComponent
              labelName="Upi QR Code Image"
              inputType="file"
              inputName="upiQrImg"
              otherAttr={{
                placeholder: "UPI QR Image",
                disabled: !editBtnClicked && isObjectEmpty(formErrors),
                accept: "image/png, image/jpeg",
                onInput: onFileSelect,
              }}
              register={register}
              inputValidations={{}}
              formErrors={formErrors}
              isFormSubmittedOnce={editBtnClicked}
              isMobileNav={isMobileNav}
            />
          </div>
        </div>
        <div className="w-full h-full py-8 flex flex-row justify-center items-center gap-2 sm:gap-12">
          <CustomButtonWithIcon
            label={isMobileNav ? "Edit Details" : "Edit Bank Details"}
            btnWidth={`${"w-36 sm:w-64"}`}
            icon={!isMobileNav && PencilIcon}
            isIconFirst={false}
            showTextOnSmallScreens={true}
            keepLabelIconGap={true}
            bgColor={"bg-white"}
            borderColor={"border-gray-500 disabled:border-gray-400"}
            doIconTransition={true}
            hoverBgColor={"hover:bg-gray-100"}
            textColor={"text-black disabled:text-gray-500"}
            handleOnClick={() => setEditBtnClicked(true)}
            otherStyles={"text-sm sm:text-base"}
            disabled={editBtnClicked || !isObjectEmpty(formErrors)}
          />
          <CustomButtonWithIcon
            label={isMobileNav ? "Save Details" : "Save Bank Details"}
            btnType={"submit"}
            btnWidth={`${"w-36 sm:w-64"}`}
            showTextOnSmallScreens={true}
            borderColor={"border-green-500"}
            bgColor={"bg-green-600"}
            hoverBgColor={"hover:bg-green-700"}
            textColor={"text-white"}
            otherStyles={`text-sm sm:text-base`}
            handleOnClick={() => setEditBtnClicked(false)}
            disabled={false}
          />
        </div>
      </div>
    </form>
  );
};

export default MyCompanyBankDetailsInputComponent;
