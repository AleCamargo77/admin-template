import Link from "next/link";

interface MenuItemProps {
  text: string;
  icon: any;
  url: string;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 ${props.className}`}
      >
        {props.icon}
        <span
          className={`text-xs font-light text-gray-600 flex justify-center`}
        >
          {props.text}
        </span>
      </a>
    );
  }
  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100`}>
      {props.url} ? (<Link href={props.url}>{renderLink()}</Link>
      ): ( renderLink() )
    </li>
  );
}
