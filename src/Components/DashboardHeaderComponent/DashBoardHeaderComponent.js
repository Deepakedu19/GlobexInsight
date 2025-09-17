import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";

const countryData = [
  {
    id: 1,
    link: "/add-country-data",
    name: "Add Country Data",
  },
  {
    id: 2,
    link: "/edit-country-data",
    name: "Edit Country Data",
  },
  {
    id: 3,
    link: "/view-country-data",
    name: "View Country Data",
  },
];

const adminOptions = [
  {
    id: 1,
    link: "/organization",
    name: "Organization",
  },
  {
    id: 2,
    link: "/line-of-bussiness",
    name: "Line of Bussiness",
  },
  {
    id: 3,
    link: "/category",
    name: "Category",
  },
  {
    id: 4,
    link: "/user",
    name: "User",
  },
  {
    id: 5,
    link: "/questionnair",
    name: "Questionnair",
  },
  {
    id: 6,
    link: "/news-report",
    name: "News Report",
  },
  {
    id: 7,
    link: "/upcoming-country",
    name: "Upcoming Country",
  },
];

const otherOptions = [
  {
    id: 1,
    link: "/dashboard",
    name: "Dashboard",
  },

  {
    id: 2,
    link: "/subscription-request",
    name: "Subscription Request",
  },
];

const DashboardHeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryToggle, setIsCountryToggle] = useState(false);
  const [isAdminToggle, setIsAdminToggle] = useState(false);
  const contextValue = useContext(DataContext);

  const countryToggleIcon = isCountryToggle ? (
    <MdArrowDropUp className="drop-down-continer-icon" />
  ) : (
    <IoMdArrowDropdown className="drop-down-continer-icon" />
  );

  const adminToggleIcon = isAdminToggle ? (
    <MdArrowDropUp className="drop-down-continer-icon" />
  ) : (
    <IoMdArrowDropdown className="drop-down-continer-icon" />
  );

  const onlogoutRequest = () => {
    contextValue.setActiveLinkId(1);
    toast("Logout Successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCountryToggle(false);
    setIsAdminToggle(false);
    contextValue.setActiveLinkId(0);
    window.onclick = (e) => {
      if (!e.target.closest(".menu-icon")) {
        setIsMenuOpen(false);
      }
    };
  };

  const onAdminToggle = () => {
    contextValue.setActiveLinkId(5);
    setIsAdminToggle(!isAdminToggle);
    setIsCountryToggle(false);
    setIsMenuOpen(false);
    window.onclick = (e) => {
      if (!e.target.closest(".active-select-dropdown")) {
        setIsAdminToggle(false);
      }
    };
  };

  const onActiveToggle = (id) => {
    contextValue.setActiveLinkId(id);
  };

  const onCountryToggle = () => {
    contextValue.setActiveLinkId(4);
    setIsAdminToggle(false);
    setIsMenuOpen(false);
    setIsCountryToggle(!isCountryToggle);
    window.onclick = (e) => {
      if (!e.target.closest(".active-select-dropdown")) {
        setIsCountryToggle(false);
      }
    };
  };

  return (
    <nav className="main-Header-component">
      <div className="links-container">
        <div className="min-links-container">
          <div className="options-container">
            {/* Country data drop-down */}
            <button
              className={
                contextValue.activeLinkId === 4
                  ? "active-select-dropdown"
                  : "select-dropdown"
              }
              onClick={onCountryToggle}
            >
              Country Data {countryToggleIcon}
            </button>
            {isCountryToggle && (
              <div className="country-data-dropdown-container">
                {countryData.map((eachCountry) => (
                  <Link
                    to={eachCountry.link}
                    key={eachCountry.id}
                    className="admin-link-style"
                    onClick={() => setIsCountryToggle(!isCountryToggle)}
                  >
                    {eachCountry.name}
                  </Link>
                ))}
              </div>
            )}
            {/* Admin  drop-down */}
            <button
              className={
                contextValue.activeLinkId === 5
                  ? "active-select-dropdown"
                  : "select-dropdown"
              }
              onClick={onAdminToggle}
            >
              Admin {adminToggleIcon}
            </button>
            {isAdminToggle && (
              <div className="admin-drop-down-container">
                {adminOptions.map((eachOption) => (
                  <Link
                    to={eachOption.link}
                    id={eachOption.id}
                    className="admin-link-style"
                    onClick={() => setIsAdminToggle(false)}
                  >
                    {eachOption.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            {otherOptions.map((eachOption) => (
              <Link
                className={
                  contextValue.activeLinkId === eachOption.id
                    ? "active-link-style"
                    : "link-style"
                }
                to={eachOption.link}
                key={eachOption.id}
                onClick={() => onActiveToggle(eachOption.id)}
              >
                {eachOption.name}
              </Link>
            ))}

            <Link
              className={
                contextValue.activeLinkId === 3
                  ? "active-link-style "
                  : "link-style "
              }
              to="/support"
              onClick={() => onActiveToggle(3)}
            >
              Support
              <div
                className={
                  contextValue.activeLinkId === 3
                    ? " active"
                    : "notification-cotnainer  "
                }
              >
                0
              </div>
            </Link>
          </div>
        </div>
        <div className="menu-container">
          <IoMenu className="menu-icon" onClick={onToggleMenu} />
          {isMenuOpen && (
            <div className="menu-dropdown-container">
              <Link
                className="menu-link-style"
                to="/my-profile"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <CgProfile className="menu-min-icon" />
                My Profile
              </Link>
              <Link
                to="/"
                className="menu-link-style"
                onClick={onlogoutRequest}
              >
                <MdLogout className="menu-min-icon" /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderComponent;
