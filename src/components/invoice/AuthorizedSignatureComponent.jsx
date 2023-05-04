import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TableContants } from "../../constants/InvoiceContants";

const borderColor = TableContants.borderColor;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;
const paddingRight = TableContants.cellPaddingRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    fontSize: "12",
    fontFamily: "Helvetica-Bold",
    width: "100%",
    textAlign: "right",
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  },
  company: {
    textTransform: "uppercase",
  },
});

const AuthorizedSignatureComponent = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text>
        For <Text style={styles.company}>{company}</Text>
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingBottom: "4px",
          paddingRight: "2px",
        }}
      >
        <Text style={{ width: "70%" }}></Text>
        <Text style={{ backgroundColor: "#E8E8E8", width: "30%" }}>
          {"\n\n"}
        </Text>
      </View>
      <Text>Authorized Signatory</Text>
    </View>
  );
};

export default AuthorizedSignatureComponent;
