import Link from "next/link";
import React from "react";

const HomeMainComponent = (isMobileNav) => {
  return (
    <div className="w-full h-full p-52">
      <Link href={"http://localhost:3000/invoice/create"}>Create Invoice</Link>
    </div>
  );
};

export default HomeMainComponent;
