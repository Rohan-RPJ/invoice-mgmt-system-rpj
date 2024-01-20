import {
  Bars3Icon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ShareIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import LinkWithImage from "./LinkWithImage";
import DropdownWithImage from "./DropdownWithImage";

const Header = ({
  scrolled,
  isMobileNav,
  showSideBarHandler,
  isLoggedInUser,
  userFirstName,
  userEmail,
  userImage,
}) => {
  return (
    <header
      className={`sticky top-0 z-50 bg-white w-full min-w-max h-full py-1`}
    >
      <div
        className={`w-full h-full flex items-center ${
          isMobileNav
            ? "justify-between px-2 py-[3px]"
            : "justify-center space-x-16 py-[10px]"
        } w-full ${
          scrolled ? "shadow-sm shadow-gray-500" : "shadow-sm shadow-gray-400"
        }`}
      >
        <div className={`pl-5 min-w-max pl-1 -translate-y-0.5 cursor-pointer`}>
          <Image
            src={process.env.IMAGE_BASE_URL + "logo.svg"}
            width={`${isMobileNav ? "20" : "25"}`}
            height={20}
            priority="true"
            unoptimized={true}
            alt="Logo"
            className={``}
          />
        </div>

        {isMobileNav ? (
          <Bars3Icon
            width={40}
            height={40}
            className={`text-[#6739b7] cursor-pointer`}
            onClick={() => showSideBarHandler()}
          />
        ) : (
          <div
            className={`w-full h-full flex flex-row items-center justify-between`}
          >
            <div className={`w-full h-full flex justify-start gap-8`}>
              <LinkWithImage label={"Home"} link={"/"} />
              {isLoggedInUser && (
                <>
                  {/* <DropdownWithImage
                    showDDIcon={false}
                    ddText={"My Company Details"}
                    ddItems={[
                      {
                        Icon: BuildingOffice2Icon,
                        text: "Basic Details",
                        link: "/mycompany/basicdetails",
                        onClickHandler: () => console.log("Basic Details"),
                      },
                      {
                        Icon: BuildingLibraryIcon,
                        text: "Bank Details",
                        link: "/mycompany/bankdetails",
                        onClickHandler: () => console.log("Bank Details"),
                      },
                      {
                        Icon: PencilSquareIcon,
                        text: "Capture E-Signature",
                        link: "/mycompany/esign",
                        onClickHandler: () =>
                          console.log("Capture E-Signature"),
                      },
                    ]}
                  /> */}
                  <LinkWithImage
                    label={"Create Invoice"}
                    link={"/invoice/create"}
                  />
                </>
              )}
            </div>
            <div className={`w-full h-full flex justify-end gap-8 pr-5`}>
              {!isLoggedInUser && (
                <LinkWithImage label={"Login"} link={"/api/auth/login"} />
              )}
              {isLoggedInUser && (
                <DropdownWithImage
                  ddImage={userImage}
                  ddText={"Hello, " + (userFirstName ? userFirstName : "User")}
                  ddItems={[
                    // { Icon: UsersIcon, text: "Find Friends" },
                    {
                      Icon: ArrowRightOnRectangleIcon,
                      text: "Sign out",
                      link: "/api/auth/logout",
                    },
                    // { Icon: ShareIcon, text: "Share" },
                    // {
                    //   Icon: ArrowRightOnRectangleIcon,
                    //   text: "Sign Out",
                    //   onClickHandler: () => signOut(),
                    // },
                  ]}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  scrolled: PropTypes.bool,
  isMobileNav: PropTypes.bool,
  showSideBarHandler: PropTypes.func,
};

export default Header;
