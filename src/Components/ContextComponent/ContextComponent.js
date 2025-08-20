import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [switchLink, setSwitchLink] = useState(true);
  const [activeLinkId, setActiveLinkId] = useState(1);
  const myDate = new Date();
  return (
    <DataContext.Provider
      value={{
        switchLink,
        setSwitchLink,
        myDate,
        activeLinkId,
        setActiveLinkId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
