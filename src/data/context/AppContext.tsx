import { createContext, useState } from "react";

type Theme = "dark" | "";
interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}

const AppContext = createContext({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>("light");

  function changeTheme() {
    setTheme(theme === "" ? "dark" : "");
  }
  return (
    <div>
      <AppContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContext;
