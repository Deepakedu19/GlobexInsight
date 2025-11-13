import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [switchLink, setSwitchLink] = useState(true);
  const [activeLinkId, setActiveLinkId] = useState(1);
  const [clientActiveLinkId, setClientActiveLinkId] = useState(0);
  const [activeLinkstyle, setActiveLinkStyle] = useState("");
  const [onEditResetPassword, setOnEditResetPassword] = useState(false);
  const [onloginAnimation, setOnLoginAnimation] = useState(true);
  const [policyQuestion, setPolicyQuestion] = useState([]);
  const myDate = new Date();
  return (
    <DataContext.Provider
      value={{
        switchLink,
        setSwitchLink,
        myDate,
        activeLinkId,
        setActiveLinkId,
        clientActiveLinkId,
        setClientActiveLinkId,
        activeLinkstyle,
        setActiveLinkStyle,
        onEditResetPassword,
        setOnEditResetPassword,
        setOnLoginAnimation,
        onloginAnimation,
        policyQuestion,
        setPolicyQuestion,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
