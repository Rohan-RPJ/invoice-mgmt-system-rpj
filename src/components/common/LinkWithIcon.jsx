import Link from "next/link";

const LinkWithIcon = ({ text, link, icon: Icon }) => {
  return (
    <Link
      href={link ? link : "#"}
      className={`flex items-center space-x-4 font-sans font-normal whitespace-nowrap text-black text-base cursor-pointer hover:text-gigas`}
    >
      <Icon width={25} height={22} className={"text-gray-600"} />
      <p className="text-gray-900">{text}</p>
    </Link>
  );
};

export default LinkWithIcon;
