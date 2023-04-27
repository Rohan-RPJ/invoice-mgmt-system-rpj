import React from "react";

/**
 *
 * btnWidth: 'w-40' if null
 *
 * isIconFirst: Boolean value - if true then Icon first and label second else vice versa
 *  -> is used for icon label placement in button and for transition
 *
 * keepLabelIconGap: Default true
 *
 * borderColor: none if null
 *
 * showTextOnSmallScreens: Default false
 */
const CustomButtonWithIcon = ({
  label,
  btnType,
  btnWidth,
  icon: Icon,
  isIconFirst,
  doIconTransition,
  handleOnClick,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  disabled,
  keepLabelIconGap,
  borderColor,
  showTextOnSmallScreens,
}) => {
  return (
    <div className={`w-full h-full`}>
      <button
        type={`${btnType ? btnType : "button"}`}
        onClick={handleOnClick}
        className={`${btnWidth == null ? `${!Icon && "w-28"} sm:w-40` : btnWidth} p-2 ${
          disabled ? "bg-gray-400" : `${bgColor} ${hoverBgColor}`
        } ${showTextOnSmallScreens ? "rounded-md" : "rounded-full"} md:rounded-md ${textColor} ${hoverTextColor!=null && hoverTextColor} ${
          borderColor != null && `border-2 ${borderColor}`
        } group transition duration-150`}
        disabled={disabled ? disabled : false}
      >
        <div
          className={`w-full h-full flex ${
            isIconFirst ? "flex-row" : "flex-row-reverse"
          } ${
            keepLabelIconGap == null || keepLabelIconGap === true
              ? "justify-around"
              : "justify-center gap-1"
          }`}
        >
          {Icon && (
            <Icon
              width="20"
              className={`transition-all duration-150 ${
                !disabled &&
                doIconTransition &&
                `${
                  isIconFirst
                    ? "group-hover:-translate-x-2"
                    : "group-hover:translate-x-2"
                }`
              }`}
            />
          )}
          <span
            className={`${
              Icon && !disabled && doIconTransition
                ? `${
                    isIconFirst
                      ? "group-hover:translate-x-1"
                      : "group-hover:-translate-x-1"
                  }`
                : ""
            }
            transition-all duration-150 ${!showTextOnSmallScreens && "hidden"} md:block`}
          >
            {label}
          </span>
        </div>
      </button>
    </div>
  );
};

export default CustomButtonWithIcon;
