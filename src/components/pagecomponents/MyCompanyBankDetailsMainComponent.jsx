import MyCompanyBankDetailsInputComponent from "../invoice_form/MyCompanyBankDetailsInputComponent";
import { bankDetails } from "@/models/SellerDetailsJson";

const MyCompanyBankDetailsMainComponent = ({ isMobileNav }) => {
  return <MyCompanyBankDetailsInputComponent isMobileNav={isMobileNav} bankDetails={bankDetails} />;
};

export default MyCompanyBankDetailsMainComponent;
