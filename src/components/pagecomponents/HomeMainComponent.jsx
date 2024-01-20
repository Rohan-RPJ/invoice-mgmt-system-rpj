import Link from "next/link";
import React from "react";

const HomeMainComponent = (isMobileNav) => {
  return (
    <div className="w-full h-full p-44 sm:p-4">
      {/* <Link href={"http://localhost:3000/invoice/create"}>Create Invoice</Link> */}
      <h1 className={`text-xl p-5 font-bold`}>
        Hi, Please Click on Create Invoice Link to start creating your invoice!
      </h1>
      <h2 className={`text-lg p-5 font-semibold italic`}>
        Your feedback really matters
      </h2>
    </div>
  );
};

export default HomeMainComponent;
