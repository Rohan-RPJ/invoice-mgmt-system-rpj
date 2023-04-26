import {
  Document,
  Image,
  Page,
  StyleSheet,
  View,
  Text,
} from "@react-pdf/renderer";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceNo from "./InvoiceNo";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceTitle from "./InvoiceTitle";
import BillFrom from "./BillFrom";
import InvoiceDate from "./InvoiceDate";
import AuthorizedSignatureComponent from "./AuthorizedSignatureComponent";
import TermsAndConditions from "./TermsAndConditions";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 80,
    height: 80,
  },
  billFromAndInvoiceNo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
  },
  invoiceNoAndDateContainer: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

const Invoice = ({ data: invoice }) => {
  console.log("Invoice:::", invoice);
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={true}>
        <View style={styles.header}>
          {invoice.logoUrl ? (
            <Image style={styles.logo} src={invoice.logoUrl} />
          ) : (
            <Text
              style={{ fontSize: "20", fontFamily: "Times-Bold", width: "40%" }}
            >
              {invoice.billFrom.company}
            </Text>
          )}
          <InvoiceTitle
            title="Tax Invoice/Bill of Supply/Cash Memo"
            subtitle="(Original for Recipient)"
          />
        </View>
        <View style={styles.invoiceNoAndDateContainer}>
          <InvoiceNo invoice={invoice} />
          <InvoiceDate invoice={invoice} />
        </View>
        <View style={styles.billFromAndInvoiceNo}>
          <BillFrom invoice={invoice} />
          <BillTo invoice={invoice} />
        </View>
        <InvoiceItemsTable invoice={invoice} />
        <TermsAndConditions />
        <AuthorizedSignatureComponent company={invoice.billFrom.company} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  );
};

export default Invoice;
