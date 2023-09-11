var PropertiesReader = require("properties-reader");
// import {PropertiesReader} from "properties-reader";

var filePath = "public/props/invoiceno.properties";
var properties = PropertiesReader(filePath);
class GetInvoiceNo {
  constructor() {}

  getInvoiceNo(cmpnyShortName) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear().toString().slice(2, 4);
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let hh = today.getHours();
    let mimi = today.getMinutes();
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mimi < 10) {
      mimi = "0" + mimi;
    }

    let invoiceSeqNo = this.getInvoiceSeqNo();
    let invoiceNo = dd + mm + yy + "-" + cmpnyShortName + "-" + invoiceSeqNo;

    return invoiceNo;
  }

  getInvoiceSeqNo() {
    let invoiceSeqNo = properties.get("vss") + 1;
    return invoiceSeqNo;
  }
}

export default GetInvoiceNo;
