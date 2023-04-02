import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={props.url}>
        <a className={`flex flex-col justify-center items-center h-20 w-full`}>
          {props.icon}
        </a>
        <span
          className={`text-xs font-light text-gray-600 flex justify-center`}
        >
          {props.text}
        </span>
      </Link>
    </li>
  );
}
