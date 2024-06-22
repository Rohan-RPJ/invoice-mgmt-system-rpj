import { useState } from "react";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import CompanyDetails from "./CompanyDetailsInputComponent";
import { useForm } from "react-hook-form";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import ProductDetailsInputComponent from "./ProductDetailsInputComponent";
import CustomFormModal from "../common/CustomFormModal";
import TableComponent from "../common/TableComponent";
import CheckboxList from "../common/CheckboxList";
import RadioButtonList from "../common/RadioButtonList";

const ProductDetailsComponent = ({
  products,
  isAmountWithTax,
  handleIsAmountWithTax,
  emptyProdDtls,
  autoGenFinalPrices: inputAutoGenFinalPrices,
  manualTotalAmount: inputManualTotalAmount,
  isMobileNav,
  handleOnProdDtlsChange,
  handleOnProdDtlsDeleteClicked,
  handleOnProdDtlsShowDataChange,
  handleOnManualEditDataChange,
  activeComponent,
  handleOnBackClick,
  handleOnNextClick,
}) => {
  const [autoGenFinalPrices, setAutoGenFinalPrices] = useState(
    inputAutoGenFinalPrices
  );
  const [manualTotalAmount, setManualTotalAmount] = useState(
    inputManualTotalAmount
  );

  const [editProductDtlsId, setEditProductDtlsId] = useState(null);

  // deep copy: emptyProdDtls.map((emptyProd) => {return {...emptyProd}})
  // const [products, setProducts] = useState(
  //   emptyProdDtls.map((emptyProd) => {
  //     return { ...emptyProd };
  //   })
  // );
  // console.log("products", products);
  const handleOnProdDtlsSubmit = (prodId, prodData) => {
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

    let isProductFound = products.length > 0 && products[prodId] ? true : false;
    let tempProductObj = {};
    isProductFound
      ? (tempProductObj = products[prodId])
      : (tempProductObj = { ...emptyProdDtls[0] });
    // console.log("prodData", prodData);

    for (const key in prodData) {
      if (key.split("-")[0] == prodId && prodData.hasOwnProperty(key)) {
        tempProductObj[key.split("-")[1]] = prodData[key];
      }
    }

    const delayDebounceFn = setTimeout(() => {
      handleOnProdDtlsChange(isProductFound, prodId, tempProductObj);
    }, 0);

    setEditProductDtlsId(null);

    return () => clearTimeout(delayDebounceFn);
  };

  const handleOnProdDtlsEditClicked = (id) => {
    setEditProductDtlsId(id);
  };
  const handleOnProdDtlsModalClose = (id) => {
    setEditProductDtlsId(null);
  };

  const initialCheckboxItems = [
    {
      label: "Unit Price",
      keyName: "rate",
      checked: true,
    },
    {
      label: "Qty",
      keyName: "qty",
      checked: true,
    },
    {
      label: "Net Amount",
      keyName: "netAmount",
      checked: true,
    },
    {
      label: "Gst Percent",
      checked: true,
      keyName: "gstPercent",
    },
    {
      label: "Gst Amount",
      checked: true,
      keyName: "gstAmount",
    },
    {
      label: "Total Amount",
      checked: true,
      keyName: "totalAmount",
    },
  ];
  const handleOnCheckboxClicked = (index, updatedCheckboxItem) => {
    // index: 0-unitprice/rate, 1-qty, 2-netamount, 3-taxamount, 4-totalamount
    let { label, keyName, checked } = updatedCheckboxItem;
    // console.log("handleOnCheckboxClicked: ", label, keyName, checked)
    handleOnProdDtlsShowDataChange(keyName, checked);
  };

  const handleOnRadioClicked = (index) => {
    // index: 0-auto, 1-manual
    if (index == 0) {
      setAutoGenFinalPrices((prev) => true);
      handleOnManualEditDataChange(true, manualTotalAmount);
    } else if (index == 1) {
      setAutoGenFinalPrices((prev) => false);
      handleOnManualEditDataChange(false, manualTotalAmount);
    }

    initialCheckboxItems.forEach((tempCheckboxItemx) => {
      handleOnProdDtlsShowDataChange(tempCheckboxItemx.keyName, index == 0);
    });
  };

  const handleOnTotalAmountChange = (e) => {
    let totalAmount = e.target.value;
    setManualTotalAmount((prev) => totalAmount);
  };

  return (
    <div
      className={`w-full h-full`}
    >
      <CustomFormSectionTitleSubTitle
        title={"Product Details"}
        subtitle={"Add your Products by clicking on 'ADD NEW PRODUCT' below"}
        showBottomLine={true}
      />

      <div className="p-2" />
      <div className="w-full h-full p-4 flex flex-col">
        {/* <label>Show in PDF: </label> */}
        <RadioButtonList
          handleOnRadioClicked={handleOnRadioClicked}
          radioItems={[
            { label: "Autogenerate Final Prices", checked: true },
            { label: "Manual Edit Prices", checked: false },
          ]}
        />
        {/* <CheckboxList
          handleOnCheckboxClicked={handleOnCheckboxClicked}
          chkboxItems={initialCheckboxItems}
          disableComponent={autoGenFinalPrices}
        /> */}
        <div
          className={`${autoGenFinalPrices && "bg-gray-100"
            } w-full h-full flex flex-col md:flex-row gap-2 p-4 my-2`}
        >
          <label>Total Amount: </label>{" "}
          <input
            type="number"
            placeholder="Enter Total Amount Here..."
            className="border-0 outline-0 border-b-2 border-black focus:border-blue-600"
            value={manualTotalAmount}
            onChange={handleOnTotalAmountChange}
            disabled={autoGenFinalPrices}
          />
        </div>
      </div>

      {editProductDtlsId != null && (
        <CustomFormModal
          id={editProductDtlsId}
          modalTitle="Update Product/Item Details Below"
          modalSubmitBtnName="Update Product"
          modalCancelBtnName="Cancel"
          modalBody={ProductDetailsInputComponent}
          modalBodyAttr={{
            id: editProductDtlsId,
            handleOnProdDetailChange: handleOnProdDtlsSubmit,
            prodDtls: products[editProductDtlsId],
            isMobileNav: isMobileNav,
            isAmountWithTax,
            handleIsAmountWithTax,
            totalProducts: products.length
          }}
          handleOnModalFormSubmit={handleOnProdDtlsSubmit}
          handleOnModalClose={handleOnProdDtlsModalClose}
          showModalOpenerBtn={false}
        />
      )}

      <TableComponent
        headDataObj={[
          { name: "desc" },
          { name: isAmountWithTax ? "updatedRate" : "rate" },
          { name: "qty" },
          { name: "gstPercent" },
        ]}
        bodyDataObj={products}
        handleOnEditClicked={handleOnProdDtlsEditClicked}
        handleOnDeleteClicked={handleOnProdDtlsDeleteClicked}
      />

      <CustomFormModal
        id={products ? products.length : 0}
        modalBtnName="Add New Product"
        modalTitle="Enter Product/Item Details Below"
        modalSubmitBtnName="Save Product"
        modalCancelBtnName="Cancel"
        modalBody={ProductDetailsInputComponent}
        modalBodyAttr={{
          id: products ? products.length : 0,
          handleOnProdDetailChange: handleOnProdDtlsSubmit,
          isMobileNav: isMobileNav,
          isAmountWithTax,
          handleIsAmountWithTax,
          totalProducts: products.length
        }}
        handleOnModalFormSubmit={handleOnProdDtlsSubmit}
        handleOnModalClose={handleOnProdDtlsModalClose}
        showModalOpenerBtn={true}
      />

      <InvoiceFormFooterButtons
        activeComponent={activeComponent}
        enableNextBtn={products?.length > 0}
        enableSaveBtn={products?.length > 0 || !autoGenFinalPrices}
        handleOnBackClick={() => handleOnBackClick()}
        handleOnNextClick={() => handleOnNextClick()}
        handleOnSaveClick={() =>
          handleOnManualEditDataChange(autoGenFinalPrices, manualTotalAmount)
        }
      />
    </div>
  );
};

export default ProductDetailsComponent;
