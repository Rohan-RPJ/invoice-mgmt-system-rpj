import { isObjectEmpty } from "@/utilities/ObjectUtils";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import InvoiceDetailsInputComponent from "./InvoiceDetailsInputComponent";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";

const InvoiceDetailsComponent = ({
  form,
  invoiceNo,
  invoiceDate,
  isFormSubmittedOnce,
  isMobileNav,
  handleOnInvoiceNoChange,
  handleOnInvoiceDateChange,
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

  const onInvoiceDtlSubmit = (data) => {
    // it means invoice details are entered by user and are also validated
    console.log("onInvoiceDtlSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      const delayDebounceFn = setTimeout(() => {
        handleOnInvoiceNoChange(data.invoice_no);
        handleOnInvoiceDateChange(data.invoice_date);
      }, 0);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onInvoiceDtlSubmit)}
      className={`w-full h-full`}
    >
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="w-full h-full basis-2/4">
              <CustomFormSectionTitleSubTitle
                title={"Invoice Details"}
                subtitle={"Enter Invoice Details below."}
                showBottomLine={false}
              />
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <hr className={`w-[97%]`} />
          </div>
          <InvoiceDetailsInputComponent
            invoiceNo={invoiceNo}
            invoiceDate={invoiceDate}
            register={register}
            formErrors={formErrors}
            isFormSubmittedOnce={isFormSubmittedOnce}
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

export default InvoiceDetailsComponent;
