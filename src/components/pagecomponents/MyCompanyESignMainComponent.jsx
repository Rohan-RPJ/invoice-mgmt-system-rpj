import React from "react";
import ESignComponent from "../common/ESignComponent";
import { useState } from "react";

const MyCompanyESignMainComponent = () => {
  const [eSignUrl, setESignUrl] = useState(null);
  const handleOnESignSaveClicked = () => {
    // set esign in invoice json to be used in pdf
  };
  return (
    <ESignComponent
      handleGetESignatureUrl={(eSignUrl) => setESignUrl(eSignUrl)}
    />
  );
};

export default MyCompanyESignMainComponent;
