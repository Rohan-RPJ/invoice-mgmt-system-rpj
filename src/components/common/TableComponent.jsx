import React from "react";
import CustomButtonWithIcon from "./CustomButtonWithIcon";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const TableComponent = ({
  headDataObj,
  bodyDataObj,
  handleOnEditClicked,
  handleOnDeleteClicked,
}) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-x-scroll md:scrollbar-hide border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    {"SNO"}
                  </th>
                  {headDataObj.map(({ name }, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        {name.toUpperCase().includes("PERCENT")
                          ? `${name.replace(new RegExp("PERCENT", "ig"), " %")}`
                          : name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bodyDataObj?.map((bodyRowData, index) => {
                  return (
                    <tr key={index}>
                      <td
                        key={index}
                        className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap truncate max-w-xs"
                      >
                        {index + 1}
                      </td>
                      {headDataObj.map(({ name }, index1) => {
                        return (
                          <td
                            key={index1}
                            className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap truncate max-w-[280px]"
                          >
                            {bodyRowData[name]}
                          </td>
                        );
                      })}
                      <td className="py-4 text-sm font-medium text-right whitespace-nowrap">
                        <CustomButtonWithIcon
                          label=""
                          btnWidth="w-15"
                          bgColor="transparent"
                          icon={PencilSquareIcon}
                          isIconFirst={false}
                          doIconTransition={false}
                          textColor="text-green-500"
                          hoverTextColor="hover:text-green-700"
                          keepLabelIconGap={false}
                          handleOnClick={() => handleOnEditClicked(index)}
                        />
                      </td>
                      <td className="pr-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <CustomButtonWithIcon
                          label=""
                          btnWidth="w-15"
                          bgColor="transparent"
                          icon={TrashIcon}
                          isIconFirst={false}
                          doIconTransition={false}
                          textColor="text-red-500"
                          hoverTextColor="hover:text-red-700"
                          keepLabelIconGap={false}
                          handleOnClick={() => handleOnDeleteClicked(index)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
