import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import CustomFormSectionTitleSubTitle from "./CustomFormSectionTitleSubTitle";

const ESignComponent = ({ handleGetESignatureUrl }) => {
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  const trim = () => {
    setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL("image/png"));
    handleGetESignatureUrl(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };
  return (
    <div className={"w-full h-full px-4 flex flex-col gap-2 md:gap-4"}>
      <CustomFormSectionTitleSubTitle
        title={"E-Signature"}
        subtitle={"Please draw you signature in below box."}
      />
      <div className={"w-full h-full"}>
        <SignaturePad
          canvasProps={{
            className: "w-full h-[200px] bg-white shadow-inner border-2 my-4",
            placeholder: "cmbkgmev",
          }}
          ref={(ref) => {
            sigPad = ref;
          }}
        />
      </div>
      <div className="w-full h-full flex flex-row gap-4">
        <button
          className={"basis-1/2 bg-red-200 rounded-md p-2"}
          onClick={clear}
        >
          Clear
        </button>
        <button className={"basis-1/2 bg-blue-200 rounded-md"} onClick={trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL ? (
        <img
          className={
            "w-[200px] h-[50px] bg-[length:100px_50px] bg-white shadow-md"
          }
          src={trimmedDataURL}
        />
      ) : null}
    </div>
  );
};

export default ESignComponent;
