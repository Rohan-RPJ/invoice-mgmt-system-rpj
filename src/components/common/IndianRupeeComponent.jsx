import { Image } from "@react-pdf/renderer";
import React from "react";

const IndianRupeeComponent = () => {
  return (
    <Image
      style={{ width: "6px", height: "6px" }}
      src={process.env.IMAGE_BASE_URL + "indian-rupee.png"}
    />
  );
};

export default IndianRupeeComponent;
