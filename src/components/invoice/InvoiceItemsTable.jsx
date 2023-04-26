import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceTableBlankSpace from "./InvoiceTableBlankSpace";
import InvoiceTableFooter from "./InvoiceTableFooter";
import { TableContants } from "../../constants/InvoiceContants";

const tableRowsCount = 11;
const borderColor = TableContants.borderColor;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: borderColor,
  },
});

const InvoiceItemsTable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={invoice.items} />
    {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} /> */}
    <InvoiceTableFooter invoice={invoice} />
  </View>
);

export default InvoiceItemsTable;
