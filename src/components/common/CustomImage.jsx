import { useState } from "react";
import Image from "next/image";

const CustomImage = ({ src, ...props }) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallBack = () => {
    setIsReady(true);
  };

  const { className, doTransition } = { ...props };
  return (
    <Image
      fill
      src={src}
      {...props}
      className={`object-cover bg-gray-200 transition duration-1000 ${
        (doTransition && (isReady ? "bg-gray-100 blur-0" : "blur-xl"))
      } ${className}`}
      onLoadingComplete={onLoadCallBack}
    />
  );
};

export default CustomImage;
