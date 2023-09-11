import Link from "next/link";

const LinkWithImage = ({ label, link, image }) => {
  return (
    <Link
      href={link ? link : "#"}
      className={`font-sans font-normal whitespace-nowrap text-black text-base cursor-pointer hover:text-gigas`}
    >
      {label && label}
    </Link>
  );
};

export default LinkWithImage;
