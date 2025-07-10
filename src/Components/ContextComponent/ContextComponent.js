import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [switchLink, setSwitchLink] = useState(true);
  return (
    <DataContext.Provider value={{ switchLink, setSwitchLink }}>
      {props.children}
    </DataContext.Provider>
  );
};
