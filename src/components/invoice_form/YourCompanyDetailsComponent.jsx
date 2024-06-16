import { isObjectEmpty } from "@/utilities/ObjectUtils";
import { PencilIcon } from "@heroicons/react/24/solid";
import CustomButtonWithIcon from "../common/CustomButtonWithIcon";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import CompanyDetailsInputComponent from "./CompanyDetailsInputComponent";
import CompanyDetailsInstance from "./CompanyDetailsInstance";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import {useState} from 'react'

const YourCompanyDetailsComponent = ({
  form,
  defaultYourCmpnyEdited,
  handleOnDefaultValuesEdited,
  currYourCmpnyDtls,
  isFormSubmittedOnce,
  isMobileNav,
  handleOnYourCmpnyDtlsChange,
  activeComponent,
  handleOnBackClick,
  handleOnNextClick,
  handleOnSaveClick,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = form;

  const [editBtnClicked, setEditBtnClicked] = useState(false);

  /*
  {
        company: "",
        email: "",
        mobileNo: "",
        address: "",
        panNo: "",
        gstRegstrtnNo: "",
      }
  */
  const cmpnyDtlsInstance = new CompanyDetailsInstance(
    currYourCmpnyDtls.company,
    currYourCmpnyDtls.address,
    currYourCmpnyDtls.mobileNo,
    currYourCmpnyDtls.email,
    currYourCmpnyDtls.panNo,
    currYourCmpnyDtls.gstRegstrtnNo
  );

  const onYourCmpnyDtlSubmit = (data) => {
    // it means customer details are entered by user and are also validated
    // console.log("onYourCmpnyDtlSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      const delayDebounceFn = setTimeout(() => {
        handleOnYourCmpnyDtlsChange(data);
      }, 0);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onYourCmpnyDtlSubmit)}
      className={`w-full h-full`}
    >
      <div className="w-full h-full">
        {/* Customer Details will be entered by User : Name, Addr, Mob, Email etc. */}
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="w-full h-full basis-2/4">
              <CustomFormSectionTitleSubTitle
                title={"Your Business/Company Details"}
                subtitle={"Enter Your Business/Company Details below."}
                showBottomLine={false}
              />
            </div>
            <div className="w-full h-full sm:pt-2 px-4 basis-1/4 pb-2">
              <CustomButtonWithIcon
                label={"Edit Details"}
                icon={PencilIcon}
                isIconFirst={false}
                showTextOnSmallScreens={true}
                keepLabelIconGap={true}
                bgColor={"bg-white"}
                borderColor={"border-gray-500"}
                // doIconTransition={true}
                hoverBgColor={"hover:bg-gray-100"}
                textColor={"text-black disabled:text-gray-500"}
                handleOnClick={() => {handleOnDefaultValuesEdited(); setEditBtnClicked(true);}}
                otherStyles={"text-sm sm:text-base"}
                disabled={editBtnClicked || !isObjectEmpty(formErrors)}
              />
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <hr className={`w-[97%]`} />
          </div>
          <CompanyDetailsInputComponent
            cmpnyDtlsInstance={cmpnyDtlsInstance}
            register={register}
            formErrors={formErrors}
            isFormSubmittedOnce={isFormSubmittedOnce}
            isMobileNav={isMobileNav}
            sellerCustomerText={"Your Company"}
            disableInputs={!editBtnClicked && isObjectEmpty(formErrors)}
          />
        </div>
        <InvoiceFormFooterButtons
          activeComponent={activeComponent}
          // enableNextBtn={
          //   !defaultYourCmpnyEdited ||
          //   (isFormSubmittedOnce && isObjectEmpty(formErrors))
          // }
          enableNextBtn={(isFormSubmittedOnce && isObjectEmpty(formErrors))}
          // enableSaveBtn={
          //   defaultYourCmpnyEdited ||
          //   (isFormSubmittedOnce && isObjectEmpty(formErrors))
          // }
          enableSaveBtn={true}
          handleOnBackClick={() => handleOnBackClick()}
          handleOnNextClick={() => handleOnNextClick()}
          handleOnSaveClick={() => {editBtnClicked && setEditBtnClicked(!isObjectEmpty(formErrors));handleOnSaveClick();}}
        />
      </div>
    </form>
  );
};

export default YourCompanyDetailsComponent;
