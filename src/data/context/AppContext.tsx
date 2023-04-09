import { createContext } from "react";

const AppContext = createContext({});

export function AppProvider(props: any) {
  return (
    <div>
      <AppContext.Provider
        value={{
          nome: "Teste Context API",
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContext;
