import { bankDetails, billFrom } from "@/models/SellerDetailsJson";
import GetInvoiceNo from "./GetInvoiceNo";
import { isJsonString } from "./ObjectUtils";

class InvoiceJsonProcessor {
  #emptyInvoiceJson;

  constructor(invoiceNo) {
    this.#emptyInvoiceJson = {
      id: "5df3180a09ea16dc4b95f910",
      // invoice_no: true ? "111123-VSS-85" : invoiceNo,
      invoice_no: invoiceNo ? invoiceNo : new GetInvoiceNo().getInvoiceNo("VSS"),
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
          show_qty: true,
          rate: 0,
          show_rate: true,
          gstPercent: 0,
          show_gstPercent: true,
          show_netAmount: true,
          show_gstAmount: true,
          show_totalAmount: true,
        },
      ],
      bankDetails: bankDetails,
      // eSignUrl: process.env.IMAGE_BASE_URL + "eSignUrl.jpeg",
      eSignUrl: "",
      tnc: `SUBJECT TO PALGHAR JURISDICTION ONLY.
      GOODS ONCE SOLD WILL NOT BE TAKEN BACK OR ENHANCED
      RECEIVED GOODS IN GOOD ORDER AND CONDITION.`,
      autoGenFinalPrices: true, // false then set below manual edit prices set by user manually
      manualTotalAmt: 0,
      manualTotalGstAmt: 0,
    };
    this.invoiceJson = { ...this.#emptyInvoiceJson };
  }

  processInvoiceBill(itemsDtls, isAmountWithTax) {
    let totalInvoiceAmt = 0;
    let totalGstAmt = 0;

    this.invoiceJson.items = itemsDtls.map((item) => {
      let prodNetAmt = 0;
      let prodGstAmt = 0;
      let prodTotAmt = 0;

      item.gstPercent = parseInt(item.gstPercent)
      if (isAmountWithTax) {
        prodTotAmt = item.rate * item.qty;
        prodGstAmt = prodTotAmt * (item.gstPercent / (100 + item.gstPercent));
        prodNetAmt = prodTotAmt - prodGstAmt;
        item.rate = prodNetAmt / item.rate
      } else {
        prodNetAmt = item.rate * item.qty;
        prodGstAmt = (prodNetAmt * item.gstPercent) / 100;
        prodTotAmt = prodNetAmt + prodGstAmt;
      }

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
    // if (typeof window !== "undefined") {
    //   // save esign image as base64
    //   localStorage.setItem("eSignImg", eSignUrl.replace(/^data:image\/(png|jpg);base64,/, ""))
    // }
  }

  processMyCompanyBankDtls(myCompanyBankDtls) {
    this.invoiceJson.bankDetails = { ...myCompanyBankDtls };
  }

  processTnC(tnc) {
    this.invoiceJson.tnc = tnc;
  }

  processAutoGenFinalPrices(autoGenFinalPrices) {
    this.invoiceJson.autoGenFinalPrices = autoGenFinalPrices;
  }

  processManualTotalAmt(manualTotalAmount) {
    this.invoiceJson.manualTotalAmt = manualTotalAmount;
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

  getInitialInvoiceJsonData() {
    let localStrgInvoiceData = null;
    if (typeof window !== "undefined") {
      localStrgInvoiceData = isJsonString(localStorage.getItem("invoiceJson")) ? JSON.parse(localStorage.getItem("invoiceJson")) : null;
    }
    if (localStrgInvoiceData === null) {
      localStrgInvoiceData = this.getEmptyInvoiceJson();
    } else {
      this.#emptyInvoiceJson = localStrgInvoiceData;
      // validate if all fields are present in 
    }
    // console.log("local", localStrgInvoiceData);
    return localStrgInvoiceData;
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
    // return this.#emptyInvoiceJson.invoice_no;
    return new GetInvoiceNo().getInvoiceNo("VSS");
  }

  getEmptyInvoiceDate() {
    // return this.#emptyInvoiceJson.trans_date;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;

    return formattedToday;
  }

  getEmptyMyCompanyBankDtls() {
    return this.#emptyInvoiceJson.bankDetails;
  }

  getEmptyTnC() {
    return this.#emptyInvoiceJson.tnc;
  }

  getEmptyAutoGenFinalPrices() {
    return this.#emptyInvoiceJson.autoGenFinalPrices;
  }

  getEmptyManualTotalAmt() {
    return this.#emptyInvoiceJson.manualTotalAmt;
  }

  getEmptyEsignUrl() {
    return this.#emptyInvoiceJson.eSignUrl;
  }
}

export default InvoiceJsonProcessor;