import InvoiceJsonProcessor from "@/utilities/InvoiceJsonProcessor";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import ViewPdf from "../ViewPdf";
import Invoice from "../invoice/Invoice";
import CustomerDetailsComponent from "./CustomerDetailsComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import YourCompanyDetailsComponent from "./YourCompanyDetailsComponent";
import { useForm } from "react-hook-form";
import InvoiceDetailsComponent from "./InvoiceDetailsComponent";
import ESignComponent from "./../common/ESignComponent";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import MyCompanyBankDetailsInputComponent from "./MyCompanyBankDetailsInputComponent";
import TnCComponent from "./TnCComponent";
import CustomButtonWithIcon from "../common/CustomButtonWithIcon";
import { useRouter } from 'next/router'


// import useSWR, { mutate } from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CreateInvoiceFormComponent = ({
  invoiceNo: inputInvoiceNo,
  isMobileNav,
}) => {
  const router = useRouter()

  // ask for confirmation if user does refresh
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "abc";
      return "xyz";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const invoiceJsonProcessor = new InvoiceJsonProcessor(inputInvoiceNo);
  const [invoiceJsonData, setInvoiceJsonData] = useState(invoiceJsonProcessor.getInitialInvoiceJsonData());
  const [isAmountWithTax, setIsAmountWithTax] = useState(true);

  let emptyInvoiceNo = invoiceJsonProcessor.getEmptyInvoiceNo();
  let emptyInvoiceDate = invoiceJsonProcessor.getEmptyInvoiceDate();
  let emptyYourCmpnyDtls = invoiceJsonProcessor.getEmptyYourCompanyDetails();
  let emptyCustDtls = invoiceJsonProcessor.getEmptyCustomerDetails();
  let [emptyProdDtls, setEmptyProdDetails] = useState(
    invoiceJsonProcessor.getEmptyProductItems()
  ); // to set only show fields keys
  let emptyMyCmpnyBankDtls = invoiceJsonProcessor.getEmptyMyCompanyBankDtls();
  let emptyTnC = invoiceJsonProcessor.getEmptyTnC();

  // deep copy: emptyProdDtls.map((emptyProd) => {return {...emptyProd}})
  // const [products, setProducts] = useState(
  //   emptyProdDtls.map((emptyProd) => {
  //     return { ...emptyProd };
  //   })
  // );
  const [invoiceNo, setInvoiceNo] = useState(emptyInvoiceNo);
  const [invoiceDate, setInvoiceDate] = useState(emptyInvoiceDate);
  const [myCmpnyBankDtls, setMyCmpnyBankDtls] = useState({
    ...emptyMyCmpnyBankDtls,
  });
  const [customerDtls, setCustomerDtls] = useState({ ...emptyCustDtls });
  const [products, setProducts] = useState([]);
  const [yourCompanyDtls, setYourCompanyDtls] = useState({
    ...emptyYourCmpnyDtls,
  });
  const [tnC, setTnC] = useState(emptyTnC);
  const [autoGenFinalPrices, setAutoGenFinalPrices] = useState(
    invoiceJsonProcessor.getEmptyAutoGenFinalPrices()
  );
  const [manualTotalAmount, setManualTotalAmount] = useState(
    invoiceJsonProcessor.getEmptyManualTotalAmt()
  );

  const handleOnInvoiceNoChange = (data) => {
    setInvoiceNo((prevDtls) => data);
  };
  const handleOnInvoiceDateChange = (data) => {
    setInvoiceDate((prevDtls) => data);
  };
  const handleOnYourCmpnyDtlsChange = (data) => {
    setYourCompanyDtls((prevDtls) => ({
      ...data,
    }));
  };
  const handleOnCustDtlsChange = (data) => {
    setCustomerDtls((prevDtls) => ({
      ...data,
    }));
  };
  const handleOnTnCChange = (data) => {
    setTnC((prevDtls) => data);
  };
  const handleOnProdDtlsChange = (isProductFound, prodId, tempProductObj) => {
    isProductFound
      ? setProducts((prevProducts) =>
        prevProducts.map((prevProd, ind) => {
          if (ind === prodId) return tempProductObj;
          return prevProd;
        })
      )
      : setProducts((prevProducts) =>
        [...prevProducts, tempProductObj].map((newProd) => {
          return newProd;
        })
      );
  };

  const handleOnProdDtlsDeleteClicked = (id) => {
    // console.log("handleOnProdDtlsDeleteClicked", id);
    // Delete product with given id
    setProducts((prevProducts) =>
      prevProducts
        .filter((prevProd, ind) => ind !== id)
        .map((prevProd) => {
          return prevProd;
        })
    );
  };

  const handleOnProdDtlsShowDataChange = (keyName, checked) => {
    // console.log("handleOnProdDtlsShowDataChange", keyName, "checked", checked);
    // Show/Hide keyName for all products
    setProducts((prevProducts) =>
      prevProducts.map((prevProd) => {
        let tempPrevProd = { ...prevProd };
        tempPrevProd["show_" + keyName] = checked;
        return tempPrevProd;
      })
    );

    setEmptyProdDetails((prevProducts) =>
      prevProducts.map((prevProd) => {
        let tempPrevProd = { ...prevProd };
        tempPrevProd["show_" + keyName] = checked;
        return tempPrevProd;
      })
    );
  };

  const handleOnManualEditDataChange = (autoGenFinalPrices, manualTotalAmt) => {
    // console.log(
    //   "handleOnManualEditDataChange: ",
    //   autoGenFinalPrices,
    //   manualTotalAmt
    // );
    setAutoGenFinalPrices((prev) => autoGenFinalPrices);
    setManualTotalAmount(manualTotalAmt);
  };

  const [eSignUrl, setESignUrl] = useState(invoiceJsonProcessor.getEmptyEsignUrl());

  // if user updates/adds product details -> update invoiceJsonData supplied to pdf -> update pdf
  useEffect(() => {
    // console.log("useEffect::Products::", products);
    // console.log("useEffect::eSignUrl::", eSignUrl);
    invoiceNo && invoiceJsonProcessor.processInvoiceNo(invoiceNo);
    invoiceDate && invoiceJsonProcessor.processInvoiceDate(invoiceDate);
    yourCompanyDtls &&
      invoiceJsonProcessor.processYourCompanyDtls(yourCompanyDtls);
    customerDtls && invoiceJsonProcessor.processCustomerDtls(customerDtls);
    products && invoiceJsonProcessor.processInvoiceBill(products, isAmountWithTax);
    eSignUrl && invoiceJsonProcessor.processESignature(eSignUrl);
    myCmpnyBankDtls &&
      invoiceJsonProcessor.processMyCompanyBankDtls(myCmpnyBankDtls);
    tnC && invoiceJsonProcessor.processTnC(tnC);
    autoGenFinalPrices != null &&
      invoiceJsonProcessor.processAutoGenFinalPrices(autoGenFinalPrices);
    manualTotalAmount &&
      invoiceJsonProcessor.processManualTotalAmt(manualTotalAmount);
    setInvoiceJsonData({ ...invoiceJsonProcessor.getUpdatedInvoiceJson() });

    // if (isMobileNav) window.scrollTo(0, 0); // scroll to top
  }, [
    invoiceNo,
    invoiceDate,
    yourCompanyDtls,
    customerDtls,
    products,
    eSignUrl,
    myCmpnyBankDtls,
    tnC,
    autoGenFinalPrices,
    manualTotalAmount,
  ]);

  /////////////////

  // const updateInvoiceSeqNo = async () => {
  //   const newName = user.name.toUpperCase();
  //   await updateNameInDB(newName);
  //   mutate("/api/user", { ...user, name: newName });
  // };

  const handleOnDownloadClick = () => {
    // it means all data is entered by user and also validated

    // save all data in local storage
    localStorage.setItem("invoiceJson", JSON.stringify(invoiceJsonData));

    pdf(<Invoice data={invoiceJsonData} />)
      .toBlob()
      .then((blob) =>
        saveAs(blob, customerDtls.company + "-" + invoiceJsonData.invoice_no)
      );

    // const { data, error } = useSWR("/api/invoice/update-seqno", fetcher);
    // update invoice seqno
    if (typeof window !== "undefined") {
      let invoiceSeqNo = parseInt(invoiceJsonData.invoice_no?.split("-").at(-1))
      !isNaN(invoiceSeqNo) && localStorage.setItem("invoiceSeqNo", invoiceSeqNo + 1)
    }
    // fetch("/api/invoice/update-seqno", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ invoiceNo: invoiceJsonData.invoice_no }),
    // });
  };

  // 0 - YourCompanyDetails, 1 - CustomerDetails, 2 - ProductDetails
  const [activeComponent, setActiveComponent] = useState(0);

  const handleOnBackClick = () => {
    setActiveComponent((prev) => prev - 1);
  };

  const handleOnNextClick = () => {
    setActiveComponent((prev) => prev + 1);

    // window.scrollTo(0, 0); // scroll to top
  };

  const invoiceDtlsForm = useForm();
  const yourCmpnyDtlsForm = useForm({
    defaultValues: async () => yourCompanyDtls,
  });
  const custDtlsForm = useForm();
  const tnCForm = useForm();

  const [isInvoiceDtlsFormSubmittedOnce, setIsInvoiceDtlsFormSubmittedOnce] =
    useState(false);
  const [isYourCmpnyDtlFormSubmittedOnce, setIsYourCmpnyDtlFormSubmittedOnce] =
    useState(false);
  const [isCustDtlFormSubmittedOnce, setIsCustDtlFormSubmittedOnce] =
    useState(false);
  const [isTnCFormSubmittedOnce, setIsTnCFormSubmittedOnce] = useState(false);

  const [defaultYourCmpnyEdited, setDefaultYourCmpnyEdited] = useState(false);

  const [showCreateInvoiceBtn, setShowCreateInvoiceBtn] = useState(false);
  const [createBtnAnimation, setCreateBtnAnimation] = useState(true)
  const displayCreateInvoiceBtn = () => {
    setShowCreateInvoiceBtn(true);
    setTimeout(() => {
      setCreateBtnAnimation(false)
    }, 3000)
  }


  return (
    <div className="w-full h-full invoice-form">
      <div
        className={`w-full h-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-0`}
      >
        <div className={`w-full lg:w-[50%] lg:basis-1/2" h-full`}>
          {activeComponent === 0 && (
            <InvoiceDetailsComponent
              form={invoiceDtlsForm}
              invoiceNo={invoiceNo}
              invoiceDate={invoiceDate}
              isFormSubmittedOnce={isInvoiceDtlsFormSubmittedOnce}
              isMobileNav={isMobileNav}
              handleOnInvoiceNoChange={handleOnInvoiceNoChange}
              handleOnInvoiceDateChange={handleOnInvoiceDateChange}
              activeComponent={activeComponent}
              handleOnBackClick={handleOnBackClick}
              handleOnNextClick={handleOnNextClick}
              handleOnSaveClick={() => {
                setIsInvoiceDtlsFormSubmittedOnce(true);
              }}
            />
          )}

          {activeComponent === 1 && (
            <YourCompanyDetailsComponent
              form={yourCmpnyDtlsForm}
              defaultYourCmpnyEdited={defaultYourCmpnyEdited}
              handleOnDefaultValuesEdited={() =>
                setDefaultYourCmpnyEdited(true)
              }
              currYourCmpnyDtls={yourCompanyDtls}
              isFormSubmittedOnce={isYourCmpnyDtlFormSubmittedOnce}
              isMobileNav={isMobileNav}
              handleOnYourCmpnyDtlsChange={handleOnYourCmpnyDtlsChange}
              activeComponent={activeComponent}
              handleOnBackClick={handleOnBackClick}
              handleOnNextClick={handleOnNextClick}
              handleOnSaveClick={() => {
                setIsYourCmpnyDtlFormSubmittedOnce(true);
              }}
            />
          )}

          {activeComponent === 2 && (
            <CustomerDetailsComponent
              form={custDtlsForm}
              currCustomerDtls={customerDtls}
              isFormSubmittedOnce={isCustDtlFormSubmittedOnce}
              isMobileNav={isMobileNav}
              handleOnCustDtlsChange={handleOnCustDtlsChange}
              activeComponent={activeComponent}
              handleOnBackClick={handleOnBackClick}
              handleOnNextClick={handleOnNextClick}
              handleOnSaveClick={() => setIsCustDtlFormSubmittedOnce(true)}
            />
          )}

          {activeComponent === 3 && (
            <ProductDetailsComponent
              products={products}
              isAmountWithTax={isAmountWithTax}
              handleIsAmountWithTax={(isAmtWithTax) => { console.log(isAmtWithTax); setIsAmountWithTax(isAmtWithTax) }}
              emptyProdDtls={emptyProdDtls}
              autoGenFinalPrices={autoGenFinalPrices}
              manualTotalAmount={manualTotalAmount}
              isMobileNav={isMobileNav}
              handleOnProdDtlsChange={handleOnProdDtlsChange}
              handleOnProdDtlsDeleteClicked={handleOnProdDtlsDeleteClicked}
              handleOnProdDtlsShowDataChange={handleOnProdDtlsShowDataChange}
              handleOnManualEditDataChange={handleOnManualEditDataChange}
              activeComponent={activeComponent}
              handleOnBackClick={handleOnBackClick}
              handleOnNextClick={handleOnNextClick}
            />
          )}

          {activeComponent === 4 && (
            <div>
              <MyCompanyBankDetailsInputComponent
                bankDetails={myCmpnyBankDtls}
                handleOnMyCmpnyBankDtlsChange={(myCmpnyBankDtls) =>
                  setMyCmpnyBankDtls(myCmpnyBankDtls)
                }
                isMobileNav={isMobileNav}
              />
              <InvoiceFormFooterButtons
                activeComponent={activeComponent}
                enableSaveBtn={false}
                displaySaveBtn={false}
                enableNextBtn={true}
                handleOnBackClick={() => handleOnBackClick()}
                handleOnNextClick={handleOnNextClick}
              />
            </div>
          )}

          {activeComponent === 5 && (
            <div>
              <TnCComponent
                form={tnCForm}
                tnC={tnC}
                isFormSubmittedOnce={isTnCFormSubmittedOnce}
                isMobileNav={isMobileNav}
                handleOnTnCChange={handleOnTnCChange}
                activeComponent={activeComponent}
                handleOnBackClick={handleOnBackClick}
                handleOnNextClick={handleOnNextClick}
                handleOnSaveClick={() => setIsTnCFormSubmittedOnce(true)}
              />
            </div>
          )}

          {activeComponent === 6 && (
            <div>
              <ESignComponent
                handleGetESignatureUrl={(eSignUrl) => setESignUrl(eSignUrl)}
              />
              <InvoiceFormFooterButtons
                activeComponent={activeComponent}
                enableNextBtn={eSignUrl !== null}
                enableSaveBtn={false}
                displaySaveBtn={false}
                handleOnBackClick={() => handleOnBackClick()}
                handleOnDownloadClick={() => { handleOnDownloadClick(); displayCreateInvoiceBtn(true) }}
              />
              {showCreateInvoiceBtn && <div className="flex flex-row justify-center mt-4">
                <CustomButtonWithIcon
                  label="Create New Invoice"
                  btnType={"button"}
                  btnWidth={'w-64'}
                  handleOnClick={() => { router.reload() }}
                  bgColor="bg-gradient-to-tl from-cyan-500 via-indigo-500 to-blue-50"
                  hoverBgColor="hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
                  textColor="text-white"
                  showTextOnSmallScreens={true}
                  otherStyles={`${!createBtnAnimation && 'bg-400% animate-wiggle self-center'}`}
                />
              </div>}
            </div>
          )}
        </div>
        <div
          className={`w-full lg:w-[50%] lg:basis-1/2 justify-center items-center my-auto h-full`}
        >
          <ViewPdf
            doc={Invoice}
            pdfData={invoiceJsonData}
            isMobileNav={isMobileNav}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceFormComponent;
