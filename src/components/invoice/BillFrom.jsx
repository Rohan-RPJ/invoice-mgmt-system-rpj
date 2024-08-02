import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "55%",
  },
  billFrom: {
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

const BillFrom = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billFrom}>By:</Text>
    <Text style={{ textTransform: "uppercase" }}>
      {invoice.billFrom.company}
    </Text>
    <Text>{invoice.billFrom.address}</Text>
    <Text>{invoice.billFrom.mobileNo}</Text>
    <Text>{invoice.billFrom.email}</Text>

    {invoice.billFrom.panNo && (
      <Text style={styles.panNoContainer}>
        <Text style={styles.label}>PAN No: </Text>
        <Text>{invoice.billFrom.panNo}</Text>
      </Text>
    )}

    {invoice.billFrom.gstRegstrtnNo && (
      <Text style={styles.gstRegstrtnNoContainer}>
        <Text style={styles.label}>GSTIN No: </Text>
        <Text>{invoice.billFrom.gstRegstrtnNo}</Text>
      </Text>
    )}
  </View>
);

export default BillFrom;
