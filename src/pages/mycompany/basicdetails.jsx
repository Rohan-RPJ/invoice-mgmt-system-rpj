import AuthBasePageComponent from "@/components/base/AuthBasePageComponent";
import MyCompanyBasicDetailsMainComponent from "@/components/pagecomponents/MyCompanyBasicDetailsMainComponent";
// import { getSession } from "next-auth/react";

const MyCompanyBasicDetailsPage = () => {
  return (
    <AuthBasePageComponent
      pageContent={MyCompanyBasicDetailsMainComponent}
      // pageProps={{ invoiceNo: invoice_no }}
    />
  );
};

// export async function getServerSideProps(context) {
//   // const session = await getSession(context);
//   // console.log(session)
//   // console.log(context);
//   const invoice_no = new GetInvoiceNo().getInvoiceNo("VSS");
//   console.log(invoice_no);
//   return { props: { invoice_no } };
// }

export default MyCompanyBasicDetailsPage;
