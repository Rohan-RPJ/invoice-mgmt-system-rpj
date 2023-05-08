import React, { useState, useEffect } from "react";

const Temp = () => {
  const [toggle, setToggle] = useState(false);
  const [doIt, setDoIt] = useState(false)

  const onBtnHoverHandler = () => {
    setDoIt(true)
      setTimeout(() => {
        setToggle((prev) => !prev);
      }, 30);
  };

  useEffect(()=> {
    if(doIt) onBtnHoverHandler()
  }, [toggle])

  return (
    <div
      className={`w-full h-full flex flex-col md:flex-row gap-2 justify-center ${
        toggle ? "bg-black" : "bg-white"
      }`}
    >
      <button onMouseEnter={() => setDoIt(false)} className="my-[300px] font-bold hover:animate-bounce transition-all duration-50 shadow-lg hover:shadow-red-400 basis-1/3 bg-[#ffde03] w-[400px] p-4 text-red-500 border-[4px] border-blue-600 hover:bg-[#f2e3fd] hover:text-gray-600">
        My Button 1
      </button>
      <button
        onMouseEnter={onBtnHoverHandler}
        className="my-[300px] hover:animate-spin basis-1/3 bg-[#FF0266] dark:bg-white w-[400px] p-4 text-[#b00020] font-bold border-[4px] border-[#b00020] hover:bg-[#FF1266] hover:text-blue-500"
      >
        My Button 2
      </button>
    </div>
  );
};

export default Temp;
