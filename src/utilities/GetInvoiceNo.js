var PropertiesReader = require("properties-reader");

// var filePath = process.env.PROPS_BASE_PATH;
// var properties = PropertiesReader(filePath);
class GetInvoiceNo {
  constructor() { }

  getInvoiceNo(cmpnyShortName) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear().toString().slice(0, 4);
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
    // let invoiceSeqNo = properties.get("vss") + 1;
    let invoiceSeqNo = "1";
    if (typeof window !== "undefined") {
      invoiceSeqNo = localStorage.getItem("invoiceSeqNo") || "1"
    }
    return invoiceSeqNo.length === 1 ? "0" + invoiceSeqNo : invoiceSeqNo;
  }
}

export default GetInvoiceNo;
