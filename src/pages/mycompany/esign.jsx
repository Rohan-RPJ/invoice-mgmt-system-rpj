import AuthBasePageComponent from "@/components/base/AuthBasePageComponent";
import MyCompanyESignMainComponent from "@/components/pagecomponents/MyCompanyESignMainComponent";
// import { getSession } from "next-auth/react";

const MyCompanyESignPage = () => {
  return (
    <AuthBasePageComponent
      pageContent={MyCompanyESignMainComponent}
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

export default MyCompanyESignPage;
