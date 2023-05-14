import BasePageComponent from "@/components/BasePageComponent";
import CreateInvoiceMainComponent from "@/components/CreateInvoiceMainComponent";
import getInvoiceNo from "@/utilities/GetInvoiceNo";

const CreateInvoicePage = () => {

  return <BasePageComponent pageContent={CreateInvoiceMainComponent} pageProps={{invoiceNo: getInvoiceNo("VSS")}} />;
};

export default CreateInvoicePage;
