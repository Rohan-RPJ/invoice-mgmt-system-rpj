import AuthBasePageComponent from "@/components/base/AuthBasePageComponent";
import MyCompanyBankDetailsMainComponent from "@/components/pagecomponents/MyCompanyBankDetailsMainComponent";
// import { getSession } from "next-auth/react";

const MyCompanyBankDetailsPage = () => {
  return (
    <AuthBasePageComponent
      pageContent={MyCompanyBankDetailsMainComponent}
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

export default MyCompanyBankDetailsPage;
