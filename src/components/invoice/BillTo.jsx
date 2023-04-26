import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "45%",
    textAlign: "right",
  },
  billTo: {
    paddingBottom: 3,
    fontFamily: "Helvetica-Bold",
  },
  label: {
    fontFamily: "Helvetica-Bold",
  },
  panNoContainer: {
    flexDirection: "row",
  },
  gstRegstrtnNoContainer: {
    flexDirection: "row",
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>Bill To:</Text>
    <Text>{invoice.billTo.company}</Text>
    <Text>{invoice.billTo.address}</Text>
    <Text>{invoice.billTo.mobileNo}</Text>
    <Text>{invoice.billTo.email}</Text>

    <Text style={styles.panNoContainer}>
      {invoice.billTo.panNo && <Text style={styles.label}>PAN No: </Text>}
      <Text>{invoice.billTo.panNo}</Text>
    </Text>

    <Text style={styles.gstRegstrtnNoContainer}>
      {invoice.billTo.gstRegstrtnNo && (
        <Text style={styles.label}>GST Registration No: </Text>
      )}
      <Text>{invoice.billTo.gstRegstrtnNo}</Text>
    </Text>
  </View>
);

export default BillTo;
