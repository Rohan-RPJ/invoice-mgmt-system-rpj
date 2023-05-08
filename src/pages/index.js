import BasePageComponent from "@/components/BasePageComponent";
import CreateInvoiceMainComponent from "@/components/CreateInvoiceMainComponent";
import getInvoiceNo from "@/utilities/GetInvoiceNo";

const index = () => {
  // return <BasePageComponent pageContent={HomeMainComponent} />;
  return <BasePageComponent pageContent={CreateInvoiceMainComponent} pageProps={{invoiceNo: getInvoiceNo("VSS")}} />;
  // return <Temp />;
};

export default index;
