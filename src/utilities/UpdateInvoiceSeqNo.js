var PropertiesReader = require("properties-reader");

var filePath = process.env.PROPS_BASE_PATH;
var properties = PropertiesReader(filePath, { writer: { saveSections: true } });

class UpdateInvoiceSeqNo {
  constructor() {}

  async updateInvoiceSeqNo(invoiceNo) {
    var invoiceNoArr = invoiceNo.split("-");
    properties.set("vss", invoiceNoArr[invoiceNoArr.length - 1]);
    await properties.save(filePath);
  }
}

export default UpdateInvoiceSeqNo;
