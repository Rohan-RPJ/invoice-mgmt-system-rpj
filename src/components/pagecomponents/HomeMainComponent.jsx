import Link from "next/link";
import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
const HomeMainComponent = ({ isMobileNav, isLoggedInUser }) => {
  return (
    <div className="w-full h-full md:p-44 sm:p-4">
      {/* <Link href={"http://localhost:3000/invoice/create"}>Create Invoice</Link> */}
      <h1 className={`text-xl p-5 font-bold`}>
        Hi, Please Click below{" "}
        {isLoggedInUser
          ? "Create Invoice to start creating your invoice!"
          : "SignUp/SignIn to get started!"}
      </h1>
      {isLoggedInUser ? (
        <LinkWithImage label={"Create Invoice"} link={"/invoice/create"} />
      ) : (
        <LinkWithImage label={"SignUp/SignIn"} link={"/api/auth/login"} />
      )}

      <h2 className={`text-lg p-5 font-semibold italic`}>
        Your feedback really matters{" "}
        <FaceSmileIcon className={`h-6 w-6 text-green-500`} />
      </h2>
    </div>
  );
};

export default HomeMainComponent;
