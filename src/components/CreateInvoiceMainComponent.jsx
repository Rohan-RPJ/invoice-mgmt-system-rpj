import CreateInvoiceFormComponent from "./invoice_form/CreateInvoiceFormComponent";

const CreateInvoiceMainComponent = ({ invoiceNo, isMobileNav }) => {
  return (
    <div className={`w-full h-full`}>
      <div className={``}>
        <CreateInvoiceFormComponent
          isMobileNav={isMobileNav}
          invoiceNo={invoiceNo}
        />
      </div>
    </div>
  );
};

export default CreateInvoiceMainComponent;
