import React from "react";
import { useState } from "react";
import Link from "next/link";

const ImageModal = ({ imageSrc, showImageModal, handleOnModalClose }) => {
  return (
    <div
      id="modal"
      className={`${
        !showImageModal && "hidden"
      } fixed top-0 left-0 z-[999] w-screen h-screen bg-black/70 flex justify-center items-center`}
    >
      {/* <!-- The close button --> */}
      <Link
        className="fixed z-1000 top-6 right-8 text-white text-3xl sm:text-5xl font-bold"
        href="#"
        onClick={handleOnModalClose}
      >
        &times;
      </Link>

      {/* <!-- A big image will be displayed here --> */}
      <img
        src={imageSrc}
        className="max-w-[350px] max-h-[400px] sm:max-w-[500px] sm:max-h-[600px] md:max-w-[800px] object-cover"
      />
    </div>
  );
};

export default ImageModal;
