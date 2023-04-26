import { StyleSheet, View, Text, Image } from "@react-pdf/renderer";
import React from "react";
import { TableContants } from "../../constants/InvoiceContants";

const borderColor = TableContants.borderColor;
const paddingLeft = TableContants.cellPaddingLeft;
const paddingTop = TableContants.cellPaddingTop;
const paddingBottom = TableContants.cellPaddingBottom;

const styles = StyleSheet.create({
  allBankDetailsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  bankDetailsContainer: {
    flexDirection: "column",
    width: "65%",
  },
  bankDetailsLabel: {
    fontWeight: "extrabold",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  bankDetailsDataView: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
  },
  bankDetailsLabels: {
    width: "40%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  bankDetailsDataText: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
  },
  upiDetailsContainer: {
    flexDirection: "column",
    width: "35%",
  },
  upiQrImg: {
    // marginVertical: 15,
    // marginHorizontal: 100,
    width: "55",
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    alignSelf: "center",
  },
});

const InvoiceBankDetails = ({ bankDetails }) => {
  return (
    <View style={styles.allBankDetailsContainer}>
      <View style={styles.bankDetailsContainer}>
        <Text style={styles.bankDetailsLabel}>Bank Details</Text>
        <View style={styles.bankDetailsDataView}>
          <Text style={styles.bankDetailsLabels}>Bank Name</Text>
          <Text style={styles.bankDetailsDataText}>Bank Name</Text>
        </View>
        <View style={styles.bankDetailsDataView}>
          <Text style={styles.bankDetailsLabels}>IFSC No</Text>
          <Text style={styles.bankDetailsDataText}>IFSC No</Text>
        </View>
        <View style={{ ...styles.bankDetailsDataView, borderBottomWidth: 0 }}>
          <Text style={styles.bankDetailsLabels}>Bank A/C No</Text>
          <Text style={styles.bankDetailsDataText}>Bank A/C No</Text>
        </View>
      </View>
      <View style={styles.upiDetailsContainer}>
        <Text style={{ ...styles.bankDetailsLabel, borderRightWidth: 0 }}>
          Pay Using UPI
        </Text>
        {bankDetails.upiQrImg && <Image style={styles.upiQrImg} src={bankDetails.upiQrImg} /> }
      </View>
    </View>
  );
};

export default InvoiceBankDetails;
