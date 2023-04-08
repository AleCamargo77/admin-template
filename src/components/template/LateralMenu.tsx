import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function LateralMenu() {
  return (
    <aside
      className={`flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200`}
    >
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notificaçöes" icon={BellIcon} />
      </ul>
      <ul className={``}>
        <MenuItem
          url="/notifications"
          text="Sair"
          icon={LogoutIcon}
          onClick={() => console.log("logout")}
          className={`text-red-600 dark:text-red-400 hover:bg-red hover:bg-red-400 hover:text-white dark:hover:text-white`}
        />
      </ul>
    </aside>
  );
}
