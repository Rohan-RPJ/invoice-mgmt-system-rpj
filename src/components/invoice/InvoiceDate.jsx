import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  invoiceDate: {
    fontSize: 12,
  },
  label: {
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
});

const InvoiceDate = ({ invoice }) => (
  <View style={styles.invoiceDateContainer}>
    <Text style={styles.label}>Invoice Date: </Text>
    <Text style={styles.invoiceDate}> {invoice.trans_date}</Text>
  </View>
);

export default InvoiceDate;
