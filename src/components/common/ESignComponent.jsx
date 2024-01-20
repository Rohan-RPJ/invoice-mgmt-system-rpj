import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import CustomFormSectionTitleSubTitle from "./CustomFormSectionTitleSubTitle";
import { useEffect } from "react";

const ESignComponent = ({ handleGetESignatureUrl }) => {
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);
  const [initialSigpadValue, setInitialSigpadValue] = useState(null);
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  useEffect(() => {
    setInitialSigpadValue(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  }, []);
  const trim = () => {
    let capturedESignUrl = sigPad.getTrimmedCanvas().toDataURL("image/png");
    setTrimmedDataURL(capturedESignUrl);
    handleGetESignatureUrl(capturedESignUrl);
  };
  return (
    <div className={"w-full h-full px-4 flex flex-col gap-2 md:gap-4"}>
      <CustomFormSectionTitleSubTitle
        title={"E-Signature"}
        subtitle={"Please draw you signature in below box."}
      />
      <div className="w-full h-full flex flex-col sm:flex-row gap-2">
        <div className="basis-1/2 w-full h-full">
          <div className={"w-full h-full"}>
            <SignaturePad
              penColor="#3c4a85"
              canvasProps={{
                className: "w-full h-[260px] bg-white shadow-inner border-2",
                placeholder: "cmbkgmev",
              }}
              ref={(ref) => {
                sigPad = ref;
              }}
            />
          </div>
          <div className="w-full h-full flex flex-row gap-4 my-4">
            <button
              className={"basis-1/2 bg-red-200 rounded-md p-2 hover:bg-red-300"}
              onClick={clear}
            >
              <p className="text-red-500 text-lg">Clear</p>
            </button>
            <button
              className={"basis-1/2 bg-blue-200 rounded-md hover:bg-blue-300"}
              onClick={trim}
            >
              <p className="text-blue-500 text-lg">Capture</p>
            </button>
          </div>
        </div>
        <div className="basis-1/2 w-full h-full flex flex-col gap-1 justify-center items-center">
          <div className="w-full h-full flex flex-col gap-1 justify-center items-center border-2 border-gray-200 shadow-md">
            <p className="">Preview</p>
            {trimmedDataURL ? (
              <img
                // className={
                //   "w-[200px] h-[50px] bg-[length:100px_50px] bg-white shadow-md"
                // }
                className={
                  "w-full h-[228px] bg-[length:100px_50px] bg-white shadow-md"
                }
                src={trimmedDataURL}
              />
            ) : null}
          </div>
          {trimmedDataURL ? (
            <div className="w-full h-full flex flex-row gap-4 my-3">
              <button
                className={
                  "w-full bg-green-200 text-green-500 rounded-md p-2 hover:bg-green-300 disabled:bg-gray-200 disabled:text-gray-500"
                }
                onClick={clear}
                disabled={initialSigpadValue === trimmedDataURL}
              >
                <p className=" text-lg">Save E-Signature</p>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ESignComponent;
