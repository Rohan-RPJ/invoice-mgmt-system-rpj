import AuthBasePageComponent from "@/components/base/AuthBasePageComponent";
import CreateInvoiceMainComponent from "@/components/pagecomponents/CreateInvoiceMainComponent";
import GetInvoiceNo from "@/utilities/GetInvoiceNo";
// import { getSession } from "next-auth/react";

const CreateInvoicePage = ({ invoice_no }) => {
  return (
    <AuthBasePageComponent
      pageContent={CreateInvoiceMainComponent}
      pageProps={{ invoiceNo: invoice_no }}
    />
  );
};

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // console.log(session)
  // console.log(context);
  // const invoice_no = new GetInvoiceNo().getInvoiceNo("VSS");
  const invoice_no = "";
  // console.log(invoice_no);
  return { props: { invoice_no } };
}

export default CreateInvoicePage;
