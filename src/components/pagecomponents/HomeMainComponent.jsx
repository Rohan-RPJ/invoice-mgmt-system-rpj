import Link from "next/link";
import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import LinkWithImage from "../common/LinkWithImage";
const HomeMainComponent = ({ isMobileNav, isLoggedInUser }) => {
  return (
    <div className="w-full h-full p-5 md:p-44 sm:p-4 flex flex-col gap-3">
      {/* <Link href={"http://localhost:3000/invoice/create"}>Create Invoice</Link> */}
      <h1 className={`text-xl font-bold`}>
        Hi, Please Click below{" "}
        {isLoggedInUser
          ? "link to start creating your invoice!"
          : "link to get started!"}
      </h1>
      <div className="w-full h-full bg-blue-300 underline p-2">
        {isLoggedInUser ? (
          <LinkWithImage label={"Create Invoice"} link={"/invoice/create"} />
        ) : (
          <LinkWithImage label={"SignUp/SignIn"} link={"/api/auth/login"} />
        )}
      </div>
      <h2 className={`text-lg font-semibold italic py-6`}>
        Your feedback really matters{" "}
        <FaceSmileIcon className={`h-6 w-6 text-green-500`} />
      </h2>
    </div>
  );
};

export default HomeMainComponent;
