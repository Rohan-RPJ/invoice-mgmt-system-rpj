import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TableContants } from "../../constants/InvoiceContants";

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontStyle: "bold",
    color: "white",
  },
  srno: {
    width: "4%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  description: {
    width: "50%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  qty: {
    width: "8%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  rate: {
    width: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  gst: {
    width: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  amount: {
    width: "14%",
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
});

const InvoiceTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.srno}>-</Text>
      <Text style={styles.description}>-</Text>
      <Text style={styles.qty}>-</Text>
      <Text style={styles.rate}>-</Text>
      <Text style={styles.gst}>-</Text>
      <Text style={styles.amount}>-</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableBlankSpace;
