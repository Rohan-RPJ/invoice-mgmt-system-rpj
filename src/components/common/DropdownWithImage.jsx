import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import LinkWithImage from "./LinkWithImage";
import LinkWithIcon from "./LinkWithIcon";
import CustomImage from "./CustomImage";

const DropdownWithImage = ({
  isActiveDropdown,
  ddItems,
  ddImage,
  ddText,
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
    <div className="relative flex gap-2 items-center">
    <p className={`w-[120px] text-right truncate`}>{ddText}</p>
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
        <ChevronDownIcon
          width={32}
          height={32}
          className="bg-gray-200 rounded-full p-1.5 text-gray-600 cursor-pointer hover:bg-gray-300"
          onClick={() => {
            onHoverHandler();
          }}
          name="dropdown"
        />
        
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
            /*[
            { Icon: UsersIcon, text: "Find Friends" },
            { Icon: Cog6ToothIcon, text: "Settings" },
            { Icon: ShareIcon, text: "Share" },
            {
              Icon: ArrowRightOnRectangleIcon,
              text: "Sign Out",
              onClickHandler: () => signOut(),
            },
          ]*/
            ddItems.map(({ Icon, text, link, onClickHandler }, index, arr) => (
              <li
                key={index}
                className={`flex flex-col justify-center space-x-1 px-2 cursor-pointer hover:bg-gray-200 ${
                  index !== arr.length - 1
                    ? `${
                        index === 0
                          ? "rounded-tl-md rounded-tr-md"
                          : ""
                      }`
                    : "rounded-bl-md rounded-br-md"
                }`}
                onClick={onClickHandler ? () => onClickHandler() : () => {}}
              >
                <div className={`pr-20 pl-4 py-6`}>
                  <LinkWithIcon text={text} link={link} icon={Icon} />
                </div>
                <hr className={`w-full ${index === arr.length - 1 && "hidden"}`} />
              </li>
            ))
          }
        </ul>
      </Transition>
    </div>
  );
};

export default DropdownWithImage;
