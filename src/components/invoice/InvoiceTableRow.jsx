import { Image, StyleSheet, Text, View, Font } from "@react-pdf/renderer";
import { Fragment } from "react";
import { TableContants } from "../../constants/InvoiceContants";
import AmountComponent from "./AmountComponent";

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;
const paddingLeft = TableContants.cellPaddingLeft;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontStyle: "bold",
    fontSize: "8.5",
  },
  srno: {
    width: "4%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  description: {
    width: "49%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: paddingLeft,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingRight: 2,
  },
  rate: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  qty: {
    width: "4%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  netAmt: {
    width: "11%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  gst: {
    width: "10.5%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    flexDirection: "column",
  },
  totAmt: {
    width: "11.5%",
    textAlign: "right",
    paddingRight: 8,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item, index) => {
    // let gstAmt = (item.qty * item.rate * item.gstPercent) / 100;
    // let amt = item.qty * item.rate + gstAmt;

    return (
      <View style={styles.row} key={index}>
        <Text style={styles.srno}>{index + 1}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <AmountComponent amount={item.rate} style={styles.rate} />
        <Text style={styles.qty}>{item.qty}</Text>
        <AmountComponent amount={item.prodNetAmt} style={styles.netAmt} />
        <View style={styles.gst}>
          <AmountComponent amount={item.prodGstAmt} />
          <Text style={{ fontSize: "8" }}>
            {parseFloat(item.gstPercent).toFixed(2)}%
          </Text>
        </View>
        <AmountComponent amount={item.prodTotAmt} style={styles.totAmt} />
      </View>
    );
  });
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
