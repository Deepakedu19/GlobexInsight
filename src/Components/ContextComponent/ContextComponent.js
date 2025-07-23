import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [switchLink, setSwitchLink] = useState(true);
  const myDate = new Date();
  return (
    <DataContext.Provider value={{ switchLink, setSwitchLink, myDate }}>
      {props.children}
    </DataContext.Provider>
  );
};
