import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { TableContants } from "../../constants/InvoiceContants";

// Font.register({
//   family: "Helvetica-Regular",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
// });
// Font.register({
//   family: "Helvetica-Bold",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
// });

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;
const paddingLeft = TableContants.cellPaddingLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    backgroundColor: "#D3D3D3",
    borderBottomWidth: 1,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    fontSize: "9.5",
  },
  srno: {
    width: "4%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  description: {
    width: "49%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  rate: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  qty: {
    width: "4%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  netAmt: {
    width: "11%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  gst: {
    width: "10.5%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  totAmt: {
    width: "11.5%",
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.srno}>Sr. No</Text>
    <Text style={styles.description}>Description</Text>
    <Text style={styles.rate}>Unit Price</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.netAmt}>Net Amount</Text>
    <Text style={styles.gst}>Tax Amount</Text>
    <Text style={styles.totAmt}>Total Amount</Text>
  </View>
);

export default InvoiceTableHeader;
