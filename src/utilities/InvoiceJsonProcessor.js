import { bankDetails, billFrom } from "@/models/SellerDetailsJson";

class InvoiceJsonProcessor {
  #emptyInvoiceJson;

  constructor(invoiceNo) {
    this.#emptyInvoiceJson = {
      id: "5df3180a09ea16dc4b95f910",
      // invoice_no: true ? "111123-VSS-85" : invoiceNo,
      invoice_no: invoiceNo ? invoiceNo : "1",
      balance: "$2,283.74",
      billFrom: billFrom,
      // billFrom: {
      //   company: "",
      //   email: "",
      //   mobileNo: "",
      //   address: "",
      //   panNo: "",
      //   gstRegstrtnNo: "",
      // },
      billTo: {
        company: "",
        email: "",
        mobileNo: "",
        address: "",
        panNo: "",
        gstRegstrtnNo: "",
      },
      trans_date: "",
      due_date: new Date().toLocaleDateString(),
      items: [
        {
          desc: "",
          qty: 0,
          rate: 0,
          gstPercent: 0,
        },
      ],
      bankDetails: bankDetails,
      // eSignUrl: process.env.IMAGE_BASE_URL + "eSignUrl.jpeg",
      eSignUrl: "",
      tnc: `SUBJECT TO PALGHAR JURISDICTION ONLY.
      GOODS ONCE SOLD WILL NOT BE TAKEN BACK OR ENHANCED
      RECEIVED GOODS IN GOOD ORDER AND CONDITION.`,
    };
    this.invoiceJson = { ...this.#emptyInvoiceJson };
  }

  processInvoiceBill(itemsDtls) {
    let totalInvoiceAmt = 0;
    let totalGstAmt = 0;

    this.invoiceJson.items = itemsDtls.map((item) => {
      let prodNetAmt = item.rate * item.qty;
      let prodGstAmt = (prodNetAmt * item.gstPercent) / 100;
      let prodTotAmt = prodNetAmt + prodGstAmt;

      item.prodNetAmt = prodNetAmt;
      item.prodGstAmt = prodGstAmt;
      item.prodTotAmt = prodTotAmt;

      totalGstAmt += prodGstAmt;
      totalInvoiceAmt += prodTotAmt;

      return item;
    });

    this.invoiceJson.totalGstAmt = totalGstAmt;
    this.invoiceJson.totalAmt = totalInvoiceAmt;
  }

  processInvoiceNo(invoiceNo) {
    this.invoiceJson.invoice_no = invoiceNo;
  }

  processInvoiceDate(invoiceDate) {
    this.invoiceJson.trans_date = invoiceDate;
  }

  processYourCompanyDtls(yourCompanyDtls) {
    this.invoiceJson.billFrom = { ...yourCompanyDtls };
  }

  processCustomerDtls(customerDtls) {
    this.invoiceJson.billTo = { ...customerDtls };
  }

  processESignature(eSignUrl) {
    this.invoiceJson.eSignUrl = eSignUrl;
  }

  processMyCompanyBankDtls(myCompanyBankDtls) {
    this.invoiceJson.bankDetails = { ...myCompanyBankDtls };
  }

  processTnC(tnc) {
    this.invoiceJson.tnc = tnc;
  }

  getUpdatedItems() {
    return this.invoiceJson.items;
  }

  getUpdatedTotalGstAmt() {
    return this.invoiceJson.totalGstAmt;
  }

  getUpdatedTotalAmt() {
    return this.invoiceJson.totalAmt;
  }

  getUpdatedInvoiceJson() {
    return this.invoiceJson;
  }

  getEmptyInvoiceJson() {
    return this.#emptyInvoiceJson;
  }

  getEmptyYourCompanyDetails() {
    return this.#emptyInvoiceJson.billFrom;
  }

  getEmptyCustomerDetails() {
    return this.#emptyInvoiceJson.billTo;
  }

  getEmptyProductItems() {
    return this.#emptyInvoiceJson.items;
  }

  getEmptyInvoiceNo() {
    return this.#emptyInvoiceJson.invoice_no;
  }

  getEmptyInvoiceDate() {
    return this.#emptyInvoiceJson.trans_date;
  }

  getEmptyMyCompanyBankDtls() {
    return this.#emptyInvoiceJson.bankDetails;
  }

  getEmptyTnC() {
    return this.#emptyInvoiceJson.tnc;
  }
}

export default InvoiceJsonProcessor;
