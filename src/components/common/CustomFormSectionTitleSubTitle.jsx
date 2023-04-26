import React from "react";

const CustomFormSectionTitleSubTitle = ({ title, subtitle }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col px-4 pt-14 pb-10 gap-2">
        <h4 className="font-bold text-base">{title}</h4>
        <h5 className="text-base text-gray-600">{subtitle}</h5>
      </div>
      <hr className={`w-[97%]`} />
    </div>
  );
};

export default CustomFormSectionTitleSubTitle;
