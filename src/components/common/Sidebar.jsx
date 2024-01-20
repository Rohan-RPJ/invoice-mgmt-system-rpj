import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { XMarkIcon } from "@heroicons/react/24/solid";
import LinkWithImage from './LinkWithImage';

const Sidebar = ({ scrolled, isMobileNav, isLoggedInUser }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarHandler = () => {
    setShowSideBar((prevVal) => !prevVal);
  };

  const removeSideBarOnClickHandler = () => {
    if (showSideBar) setShowSideBar(false);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 bg-white w-full min-w-max h-full`}>
        <Header
          scrolled={scrolled}
          isMobileNav={isMobileNav}
          showSideBarHandler={showSideBarHandler}
        />
      </div>

      {/* Dark Overlay Start */}
      <div
        className={`opacity-0 ${
          !showSideBar ? "-z-[100000]" : "!opacity-60 z-[100000]"
        } fixed top-0 left-0 w-full h-[100vh] transition-all duration-[500ms]`}
        onClick={() => removeSideBarOnClickHandler()}
      >
        <div
          className={`w-full h-screen min-h-max overflow-auto scrollbar-hide absolute top-0 left-0 right-0 bottom-0 z-[999] bg-black`}
        ></div>
      </div>
      {/* Dark Overlay End */}

      <div
        className={`w-[54%] h-[100vh] ${
          showSideBar ? "translate-x-0" : "-z-[100001] translate-x-[1000px]"
        } fixed top-0 right-0 bg-white transition-all duration-[500ms] z-[100001] py-12`}
      >
        <div
          className={`w-full flex items-center justify-end pr-1.5 pt-0.5`}
          onClick={() => removeSideBarOnClickHandler()}
        >
          <XMarkIcon width={30} className={`text-black`} />
        </div>

        <div className={`w-full flex flex-col space-y-5 py-5`}>
          {/* "Home",
            "Business Solutions",
            "Press",
            "Careers",
            "About Us",
            "Blog",
            "Contact Us",
            "Trust & Safety", */}
          {(isLoggedInUser
            ? [
                { text: "Home", link: "/" },
                { text: "Create Invoice", link: "/invoice/create" },
                { text: "Sign Out", link: "/api/auth/logout" },
              ]
            : [
                { text: "Home", link: "/" },
                { text: "Sign In", link: "/api/auth/login" },
              ]
          ).map(({ text, link }, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-center justify-start space-x-8 group`}
              >
                <span
                  className={`${index === 0 && "bg-[#6739B7]"} w-4 h-6`}
                ></span>
                <span
                  className={`text-base font-[500] text-black group-hover:text-[#6739b7]`}
                >
                  <LinkWithImage label={text} link={link} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  scrolled: PropTypes.bool,
  isMobileNav: PropTypes.bool,
};

export default Sidebar;
