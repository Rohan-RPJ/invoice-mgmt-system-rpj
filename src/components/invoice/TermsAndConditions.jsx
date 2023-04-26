import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TableContants } from "../../constants/InvoiceContants";

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;
const paddingLeft = TableContants.cellPaddingLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    fontSize: "9",
    width: "100%",
    textAlign: "left",
    paddingLeft: paddingLeft,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
});

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "11" }}>
        Terms & Conditions : E & O.E.
      </Text>
      <Text>SUBJECT TO PALGHAR JURISDICTION ONLY.</Text>
      <Text>GOODS ONCE SOLD WILL NOT BE TAKEN BACK OR ENHANCED</Text>
      <Text>RECEIVED GOODS IN GOOD ORDER AND CONDITION.</Text>
    </View>
  );
};

export default TermsAndConditions;
