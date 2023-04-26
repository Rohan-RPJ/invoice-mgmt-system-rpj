import { useEffect, useState } from "react";
import InputDisabledFieldComponent from "./InputDisableFieldComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import CustomerDetailsComponent from "./CustomerDetailsComponent";
import InvoiceJsonProcessor from "@/utilities/InvoiceJsonProcessor";
import ViewPdf from "../ViewPdf";
import Invoice from "../invoice/Invoice";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useForm } from "react-hook-form";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import CustomModal from "../common/CustomModal";
import CustomFormModal from "../common/CustomFormModal";
import { isObjectEmpty } from "@/utilities/ObjectUtils";
import TableComponent from "../common/TableComponent";

const CreateInvoiceFormComponent = ({ isMobileNav }) => {
  const invoiceJsonProcessor = new InvoiceJsonProcessor();
  const [invoiceJsonData, setInvoiceJsonData] = useState(
    invoiceJsonProcessor.getEmptyInvoiceJson()
  );

  let emptyProdDtls = invoiceJsonProcessor.getEmptyProductItems();
  let emptyCustDtls = invoiceJsonProcessor.getEmptyCustomerDetails();

  // deep copy: emptyProdDtls.map((emptyProd) => {return {...emptyProd}})
  // const [products, setProducts] = useState(
  //   emptyProdDtls.map((emptyProd) => {
  //     return { ...emptyProd };
  //   })
  // );
  const [products, setProducts] = useState([]);
  const [customerDtls, setCustomerDtls] = useState({ ...emptyCustDtls });

  /*
  prodData = {
    0-desc: "dd",
    0-gstPercent: "59",
    0-qty: "59",
    0-rate: "985",
    1-desc: "dlp",
    1-gstPercent: "",
    1-qty: "",
    1-rate: "",
  }
  */
  const handleProdDetailChange = (prodId, prodData) => {
    let isProductFound = products.length > 0 && products[prodId] ? true : false;
    let tempProductObj = {};
    isProductFound
      ? (tempProductObj = products[prodId])
      : (tempProductObj = { ...emptyProdDtls[0] });
    console.log("prodData", prodData);

    for (const key in prodData) {
      if (key.split("-")[0] == prodId && prodData.hasOwnProperty(key)) {
        tempProductObj[key.split("-")[1]] = prodData[key];
      }
    }

    console.log("isProdFound", isProductFound);
    console.log("tempProd", tempProductObj);

    const delayDebounceFn = setTimeout(() => {
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
    }, 0);

    setEditProductDtlsId(null);

    return () => clearTimeout(delayDebounceFn);
  };

  const [editProductDtlsId, setEditProductDtlsId] = useState(null);
  const handleOnProdDtlsEditClicked = (id) => {
    console.log("handleOnProdDtlsEditClicked", id);
    setEditProductDtlsId(id);
  };
  const handleOnProdDtlsModalClose = (id) => {
    setEditProductDtlsId(null);
  };
  const handleOnProdDtlsDeleteClicked = (id) => {
    console.log("handleOnProdDtlsDeleteClicked", id);
    // Delete product with given id
    setProducts((prevProducts) =>
      prevProducts
        .filter((prevProd, ind) => ind !== id)
        .map((prevProd) => {
          return prevProd;
        })
    );
  };

  // if user updates/adds product details -> update invoiceJsonData supplied to pdf -> update pdf
  useEffect(() => {
    console.log("useEffect::Products::", products);
    customerDtls && invoiceJsonProcessor.processCustomerDtls(customerDtls);
    products && invoiceJsonProcessor.processInvoiceBill(products);
    setInvoiceJsonData({ ...invoiceJsonProcessor.getUpdatedInvoiceJson() });
  }, [customerDtls, products]);

  /////////////////
  const {
    register: custDtlRegister,
    handleSubmit: custDtlHandleSubmit,
    formState: { errors: custDtlErrors },
  } = useForm();

  const onCustDtlSubmit = (data) => {
    // it means customer details are entered by user and are also validated
    console.log("onCustDtlSubmit", data);

    if (data != null && !isObjectEmpty(data)) {
      const delayDebounceFn = setTimeout(() => {
        setCustomerDtls((prevDtls) => ({
          ...data,
        }));
      }, 0);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  const handleOnDownloadClick = () => {
    // it means all data is entered by user and also validated

    pdf(<Invoice data={invoiceJsonData} />)
      .toBlob()
      .then((blob) =>
        saveAs(blob, customerDtls.company + "-" + invoiceJsonData.invoice_no)
      );
  };

  const [isCustDtlFormSubmittedOnce, setIsCustDtlFormSubmittedOnce] =
    useState(false);

  // 0 - CustomerDetails, 1 - ProductDetails
  const [activeComponent, setActiveComponent] = useState(0);

  const handleOnBackClick = () => {
    setActiveComponent((prev) => prev - 1);
  };

  const handleOnNextClick = () => {
    setActiveComponent((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full invoice-form">
      <div
        className={`w-full h-full flex ${
          isMobileNav ? "flex-col" : "flex-row"
        }`}
      >
        <div
          className={`${isMobileNav ? "w-full" : "w-[50%] basis-1/2"} h-full`}
        >
          {activeComponent === 0 && (
            <form
              onSubmit={custDtlHandleSubmit(onCustDtlSubmit)}
              className={`w-full h-full`}
            >
              <div className="w-full h-full">
                {/* Invoice Number auto-generated */}
                <InputDisabledFieldComponent
                  labelName="Invoice Number"
                  inputType="text"
                  inputName="invoice_no"
                  inputValue={invoiceJsonData.invoice_no}
                />
                {/* Invoice Date auto-generated */}
                <InputDisabledFieldComponent
                  labelName="Invoice Date"
                  inputType="text"
                  inputName="invoice_date"
                  inputValue={new Date().toLocaleDateString()}
                />
                {/* Customer Details will be entered by User : Name, Addr, Mob, Email etc. */}
                <CustomerDetailsComponent
                  register={custDtlRegister}
                  formErrors={custDtlErrors}
                  isFormSubmittedOnce={isCustDtlFormSubmittedOnce}
                />
                <InvoiceFormFooterButtons
                  activeComponent={activeComponent}
                  enableNextBtn={
                    isCustDtlFormSubmittedOnce && isObjectEmpty(custDtlErrors)
                  }
                  handleOnBackClick={() => handleOnBackClick()}
                  handleOnNextClick={() => handleOnNextClick()}
                  handleOnSaveClick={() => setIsCustDtlFormSubmittedOnce(true)}
                />
              </div>
            </form>
          )}

          {activeComponent === 1 && (
            <div
              // onSubmit={handleAllProductsSubmit(onProdDtlSubmit)}
              className={`w-full h-full`}
            >
              <TableComponent
                headDataObj={[
                  { name: "desc" },
                  { name: "rate" },
                  { name: "qty" },
                  { name: "gstPercent" },
                ]}
                bodyDataObj={products}
                handleOnEditClicked={handleOnProdDtlsEditClicked}
                handleOnDeleteClicked={handleOnProdDtlsDeleteClicked}
              />
              {editProductDtlsId != null && (
                <CustomFormModal
                  id={editProductDtlsId}
                  modalTitle="Update Product/Item Details Below"
                  modalSubmitBtnName="Update Product"
                  modalCancelBtnName="Cancel"
                  modalBody={ProductDetailsComponent}
                  modalBodyAttr={{
                    id: editProductDtlsId,
                    handleProdDetailChange: handleProdDetailChange,
                    prodDtls: products[editProductDtlsId],
                  }}
                  handleOnModalFormSubmit={handleProdDetailChange}
                  handleOnModalClose={handleOnProdDtlsModalClose}
                  showModalOpenerBtn={false}
                />
              )}

              <CustomFormModal
                id={products ? products.length : 0}
                modalBtnName="Add New Product"
                modalTitle="Enter Product/Item Details Below"
                modalSubmitBtnName="Save Product"
                modalCancelBtnName="Cancel"
                modalBody={ProductDetailsComponent}
                modalBodyAttr={{
                  id: products ? products.length : 0,
                  handleProdDetailChange: handleProdDetailChange,
                }}
                handleOnModalFormSubmit={handleProdDetailChange}
                handleOnModalClose={handleOnProdDtlsModalClose}
                showModalOpenerBtn={true}
              />

              <InvoiceFormFooterButtons
                activeComponent={activeComponent}
                enableNextBtn={products.length > 0}
                handleOnBackClick={() => handleOnBackClick()}
                handleOnNextClick={() => handleOnNextClick()}
                // handleOnSaveClick={() => setIsProdDtlFormSubmittedOnce(true)}
                handleOnDownloadClick={() => handleOnDownloadClick()}
              />
            </div>
          )}
        </div>
        <div
          className={`${
            isMobileNav ? "w-full" : "w-[50%] basis-1/2"
          } h-full`}
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
