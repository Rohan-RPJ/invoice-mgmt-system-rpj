import {
  ArrowDownTrayIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import CustomButtonWithIcon from "../common/CustomButtonWithIcon";

const InvoiceFormFooterButtons = ({
  activeComponent,
  enableNextBtn,
  handleOnBackClick,
  handleOnNextClick,
  handleOnSaveClick,
  handleOnDownloadClick,
}) => {
  return (
    <div className="w-full h-full flex flex-row px-2 pt-4 pb-12 justify-between">
      <CustomButtonWithIcon
        label="Back"
        btnType="button"
        icon={ArrowLongLeftIcon}
        isIconFirst={true}
        doIconTransition={true}
        handleOnClick={handleOnBackClick}
        bgColor="bg-gray-600"
        textColor="text-white"
        disabled={activeComponent === 0 ? true : false}
      />

      <div className="w-full h-full flex flex-row justify-end items-center">
        <CustomButtonWithIcon
          label="Save"
          btnType={"submit"}
          handleOnClick={handleOnSaveClick}
          bgColor="bg-green-600"
          hoverBgColor="hover:bg-green-700"
          textColor="text-white"
          showTextOnSmallScreens={true}
        />
        {activeComponent < 1 ? (
          <CustomButtonWithIcon
            label="Next"
            btnType="button"
            icon={ArrowLongRightIcon}
            doIconTransition={true}
            isIconFirst={false}
            handleOnClick={handleOnNextClick}
            bgColor="bg-blue-600"
            textColor="text-white"
            disabled={!enableNextBtn}
          />
        ) : (
          <CustomButtonWithIcon
            label="Download"
            btnType="button"
            icon={ArrowDownTrayIcon}
            isIconFirst={false}
            doIconTransition={false}
            handleOnClick={handleOnDownloadClick}
            bgColor="bg-blue-600"
            hoverBgColor="hover:bg-blue-700"
            textColor="text-white"
            disabled={!enableNextBtn}
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceFormFooterButtons;
