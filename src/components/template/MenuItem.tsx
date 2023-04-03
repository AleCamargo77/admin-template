import Link from "next/link";

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  onClick: (event: any) => {};
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <a className={`flex flex-col justify-center items-center h-20 w-full`}>
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
    <li className={`hover:bg-gray-100`}>
      {props.url} ? (<Link href={props.url}>{renderLink()}</Link>
      ): ( renderLink() )
    </li>
  );
}
