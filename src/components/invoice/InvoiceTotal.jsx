import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { TableContants } from "../../constants/InvoiceContants";
import AmountComponent from "./AmountComponent";

// Font.register({
//   family: "Helvetica-Bold",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
// });

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;
const paddingLeft = TableContants.cellPaddingLeft;

const styles = StyleSheet.create({
  row1: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontSize: "9",
    fontFamily: "Helvetica-Bold",
  },
  description1: {
    width: "78%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: paddingLeft,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  totalTaxAmt: {
    width: "10.5%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  total1: {
    width: "11.5%",
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  row2: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  description2: {
    width: "100%",
    paddingRight: 8,
    paddingLeft: paddingLeft,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
});

const InvoiceTotal = ({ totalTaxAmt, totalAmtInNum, totalAmtInWords }) => {
  // const total = items
  //   .map((item) => item.qty * item.rate)
  //   .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <View>
      <View style={styles.row1}>
        <Text style={styles.description1}>TOTAL:</Text>
        {/* <Text style={styles.total1}>{Number.parseFloat(total).toFixed(2)}</Text> */}
        <AmountComponent amount={totalTaxAmt} style={styles.totalTaxAmt} />
        <AmountComponent
          amount={totalAmtInNum}
          style={styles.total1}
          amtStrMaxLen={9}
        />
      </View>
      <View style={styles.row2}>
        <Text style={styles.description2}>
          Amount in Words: {totalAmtInWords?.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceTotal;
