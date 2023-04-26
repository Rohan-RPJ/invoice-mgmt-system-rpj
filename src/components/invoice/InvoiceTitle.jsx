import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "OpenSans-Regular",
  src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
});
Font.register({
  family: "OpenSans-Bold",
  src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
});

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    marginTop: 0,
    width: "50%",
  },
  reportTitle: {
    color: "black",
    fontFamily: "OpenSans-Bold",
    fontSize: 13,
    textAlign: "right",
    textTransform: "capitalize",
  },
  reportSubTitle: {
    color: "black",
    fontSize: 13,
    textAlign: "right",
    textTransform: "capitalize",
  },
});

const InvoiceTitle = ({ title, subtitle }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
    {subtitle && <Text style={styles.reportSubTitle}>{subtitle}</Text>}
  </View>
);

export default InvoiceTitle;
