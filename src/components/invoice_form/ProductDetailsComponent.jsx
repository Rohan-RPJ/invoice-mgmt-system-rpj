import { useState } from "react";
import CustomFormSectionTitleSubTitle from "../common/CustomFormSectionTitleSubTitle";
import CompanyDetails from "./CompanyDetailsInputComponent";
import { useForm } from "react-hook-form";
import InvoiceFormFooterButtons from "./InvoiceFormFooterButtons";
import ProductDetailsInputComponent from "./ProductDetailsInputComponent";
import CustomFormModal from "../common/CustomFormModal";
import TableComponent from "../common/TableComponent";

const ProductDetailsComponent = ({
  products,
  emptyProdDtls,
  isMobileNav,
  handleOnProdDtlsChange,
  handleOnProdDtlsDeleteClicked,
  activeComponent,
  handleOnBackClick,
  handleOnNextClick,
  handleOnDownloadClick,
}) => {
  const [editProductDtlsId, setEditProductDtlsId] = useState(null);

  // deep copy: emptyProdDtls.map((emptyProd) => {return {...emptyProd}})
  // const [products, setProducts] = useState(
  //   emptyProdDtls.map((emptyProd) => {
  //     return { ...emptyProd };
  //   })
  // );
  console.log("products", products);
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
    console.log("prodData", prodData);

    for (const key in prodData) {
      if (key.split("-")[0] == prodId && prodData.hasOwnProperty(key)) {
        tempProductObj[key.split("-")[1]] = prodData[key];
      }
    }

    console.log("isProdFound", isProductFound);
    console.log("tempProd", tempProductObj);

    const delayDebounceFn = setTimeout(() => {
      handleOnProdDtlsChange(isProductFound, prodId, tempProductObj);
    }, 0);

    setEditProductDtlsId(null);

    return () => clearTimeout(delayDebounceFn);
  };

  const handleOnProdDtlsEditClicked = (id) => {
    console.log("handleOnProdDtlsEditClicked", id);
    setEditProductDtlsId(id);
  };
  const handleOnProdDtlsModalClose = (id) => {
    setEditProductDtlsId(null);
  };

  return (
    <div
      // onSubmit={handleAllProductsSubmit(onProdDtlSubmit)}
      className={`w-full h-full`}
    >
      <CustomFormSectionTitleSubTitle
        title={"Product Details"}
        subtitle={"Add your Products by clicking on 'ADD NEW PRODUCT' below"}
        showBottomLine={true}
      />

      <div className="p-2" />

      {editProductDtlsId != null && (
        <CustomFormModal
          id={editProductDtlsId}
          modalTitle="Update Product/Item Details Below"
          modalSubmitBtnName="Update Product"
          modalCancelBtnName="Cancel"
          modalBody={ProductDetailsComponent}
          modalBodyAttr={{
            id: editProductDtlsId,
            handleOnProdDetailChange: handleOnProdDtlsSubmit,
            prodDtls: products[editProductDtlsId],
          }}
          handleOnModalFormSubmit={handleOnProdDtlsSubmit}
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
        modalBody={ProductDetailsInputComponent}
        modalBodyAttr={{
          id: products ? products.length : 0,
          handleOnProdDetailChange: handleOnProdDtlsSubmit,
          isMobileNav: isMobileNav,
        }}
        handleOnModalFormSubmit={handleOnProdDtlsSubmit}
        handleOnModalClose={handleOnProdDtlsModalClose}
        showModalOpenerBtn={true}
      />

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

      <InvoiceFormFooterButtons
        activeComponent={activeComponent}
        enableNextBtn={products.length > 0}
        enableSaveBtn={products.length > 0}
        handleOnBackClick={() => handleOnBackClick()}
        handleOnNextClick={() => handleOnNextClick()}
        // handleOnSaveClick={() => setIsProdDtlFormSubmittedOnce(true)}
        handleOnDownloadClick={() => handleOnDownloadClick()}
      />
    </div>
  );
};

export default ProductDetailsComponent;
