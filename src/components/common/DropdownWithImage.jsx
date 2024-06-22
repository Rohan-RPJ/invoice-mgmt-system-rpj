import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import LinkWithImage from "./LinkWithImage";
import LinkWithIcon from "./LinkWithIcon";
import CustomImage from "./CustomImage";
import Link from "next/link";

/*ddItems: [
            { Icon: UsersIcon, text: "Find Friends" },
            { Icon: Cog6ToothIcon, text: "Settings" },
            { Icon: ShareIcon, text: "Share" },
            {
              Icon: ArrowRightOnRectangleIcon,
              text: "Sign Out",
              onClickHandler: () => signOut(),
            },
          ]*/
const DropdownWithImage = ({
  isActiveDropdown,
  ddItems,
  ddImage,
  ddText,
  truncateDDText,
  showDDIcon,
}) => {
  const [showDropdown, setShowDropdown] = useState(
    isActiveDropdown ? isActiveDropdown : false
  );

  const onHoverHandler = () => {
    setShowDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      e.target.getAttribute("name") !== "dropdown" && setShowDropdown(false);
    });
  }, []);

  return (
    <div className="relative flex gap-2">
      <p
        className={`text-right ${truncateDDText && "truncate"
          } hover:cursor-pointer`}
        onClick={() => onHoverHandler()}
        name="dropdown"
      >
        {ddText}
      </p>
      {ddImage ? (
        <div className="w-[35px] h-[35px] rounded-full relative cursor-pointer">
          <CustomImage
            src={ddImage}
            className="rounded-full hover:ring-4 ring-gray-400/30 duration-200"
            alt={ddText}
            onClick={() => {
              onHoverHandler();
            }}
            name="dropdown"
          />
        </div>
      ) : (
        showDDIcon && (
          <ChevronDownIcon
            width={32}
            height={32}
            className="bg-gradient-to-b from-gray-200 to-white rounded-full p-1.5 text-gray-600 cursor-pointer hover:from-gray-300"
            onClick={() => {
              onHoverHandler();
            }}
            name="dropdown"
          />
        )
      )}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition-all ease-in duration-[100ms]"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={showDropdown}
      >
        <ul
          className={`absolute w-auto whitespace-nowrap h-auto bg-slate-50 right-0 top-11 rounded-md z-10 ring-1 ring-gray-400/20 shadow-md shadow-gray-300`}
          onMouseLeave={() => onHoverHandler()}
        >
          {
            ddItems.map(({ Icon, text, link, onClickHandler }, index, arr) => (
              <li
                key={index}
                className={`flex flex-col justify-center space-x-1 px-2 cursor-pointer hover:bg-gray-200 ${index !== arr.length - 1
                  ? `${index === 0 ? "rounded-tl-md rounded-tr-md" : ""}`
                  : "rounded-bl-md rounded-br-md"
                  }`}
                onClick={onClickHandler ? () => onClickHandler() : () => { }}
              >
                {link && link !== null ?
                  <Link
                    href={link ? link : "#"}
                    className={`pr-20 pl-4 py-6 flex items-center space-x-4 font-sans font-normal whitespace-nowrap text-black text-base cursor-pointer hover:text-gigas`}
                  >
                    <Icon width={25} height={22} className={"text-gray-600"} />
                    <p className="text-gray-900">{text}</p>
                  </Link>
                  : <p className="text-gray-900">{text}</p>
                }
                <hr
                  className={`w-full ${index === arr.length - 1 && "hidden"}`}
                />
              </li>
            ))
          }
        </ul>
      </Transition>
    </div>
  );
};

export default DropdownWithImage;
