import BasePageComponent from "@/components/BasePageComponent";
import HomeMainComponent from "@/components/HomeMainComponent";
import CreateInvoiceMainComponent from "@/components/CreateInvoiceMainComponent";

const index = () => {
  // return <BasePageComponent pageContent={HomeMainComponent} />;
  return <BasePageComponent pageContent={CreateInvoiceMainComponent} />;
};

export default index;
