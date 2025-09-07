import { AiFillDatabase } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { DataContext } from "../../ContextComponent/ContextComponent";

const dashboardOptions = [
  {
    id: 1,
    link: "/client-database",
    name: "Database",
    icon: <AiFillDatabase className="client-header-icon-style" />,
    linkStyle: "client-dashboard-links-contianer blue-container",
  },
  {
    id: 2,
    link: "/client-support",
    name: "Support",
    icon: <FaUserAlt className="client-header-icon-style" />,
    linkStyle: "client-dashboard-links-contianer green-container",
  },
  {
    id: 3,
    link: "/client-other-services",
    name: "Other Services",
    icon: <ImHeadphones className="client-header-icon-style" />,
    linkStyle: "client-dashboard-links-contianer orange-container",
  },
  {
    id: 4,
    link: "/client-about-us",
    name: "About Us",
    icon: <IoInformationCircleSharp className="client-header-icon-style" />,
    linkStyle: "client-dashboard-links-contianer yellow-container",
  },
  {
    id: 5,
    link: "/client-latestNewsLetter",
    name: "Latest Newsletter",
    icon: <LuNewspaper className="client-header-icon-style" />,
    linkStyle: "client-dashboard-links-contianer skyblue-container",
  },
];

const ClientLinkComponent = () => {
  const {
    clientActiveLinkId,
    setClientActiveLinkId,
    activeLinkstyle,
    setActiveLinkStyle,
  } = useContext(DataContext);

  const handleLink = (id) => {
    setClientActiveLinkId(id);
    if (id === 1) {
      setActiveLinkStyle(
        "client-dashboard-links-contianer blue-style active-link"
      );
    } else if (id === 2) {
      setActiveLinkStyle(
        "client-dashboard-links-contianer green-style active-link"
      );
    } else if (id === 3) {
      setActiveLinkStyle(
        "client-dashboard-links-contianer orange-style active-link"
      );
    } else if (id === 4) {
      setActiveLinkStyle(
        "client-dashboard-links-contianer yellow-style active-link"
      );
    } else if (id === 5) {
      setActiveLinkStyle(
        "client-dashboard-links-contianer skyblue-style active-link"
      );
    }
  };

  return (
    <>
      <div className="options-Link-main-contianer">
        {dashboardOptions.map((eachOption) => (
          <Link
            to={eachOption.link}
            key={eachOption.id}
            className={
              clientActiveLinkId === eachOption.id
                ? activeLinkstyle
                : eachOption.linkStyle
            }
            title={eachOption.name}
            onClick={() => handleLink(eachOption.id)}
          >
            {eachOption.icon}
            {eachOption.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ClientLinkComponent;
