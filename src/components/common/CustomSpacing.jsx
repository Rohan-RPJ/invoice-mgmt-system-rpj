import React from "react";

const CustomSpacing = ({ paddingY }) => {
  return (
    <div
      className={`my-1 invisible`}
      style={{ padding: `${paddingY ? paddingY : "64"}px 0` }}
    />
  );
};

export default CustomSpacing;
