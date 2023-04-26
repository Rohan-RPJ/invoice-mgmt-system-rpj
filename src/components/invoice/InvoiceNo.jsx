import { StyleSheet, Text, View, Font } from "@react-pdf/renderer";

// Font.register({
//   family: "OpenSans-Regular",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
// });
// Font.register({
//   family: "OpenSans-Bold",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
// });

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  invoice_no: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
});

const InvoiceNo = ({ invoice }) => (
  <View style={styles.invoiceNoContainer}>
    <Text style={styles.label}>Invoice Number: </Text>
    <Text style={styles.invoice_no}> {invoice.invoice_no}</Text>
  </View>
);

export default InvoiceNo;
