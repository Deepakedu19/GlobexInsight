import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";

import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const DashboardHeaderComponent = () => {
  const [isCountryToggle, setIsCountryToggle] = useState(false);
  const [isAdminToggle, setIsAdminToggle] = useState(false);

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

  const onAdminToggle = () => {
    setIsAdminToggle(!isAdminToggle);
    setIsCountryToggle(false);
  };

  const onCountryToggle = () => {
    setIsAdminToggle(false);
    setIsCountryToggle(!isCountryToggle);
  };

  return (
    <nav className="main-Header-component">
      <div className="links-container">
        <div className="min-links-container">
          <div className="options-container">
            {/* Country data drop-down */}
            <button className="select-dropdown " onClick={onCountryToggle}>
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
            <button className="select-dropdown" onClick={onAdminToggle}>
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
            <Link className="link-style" to="/dashboard">
              Dashboard
            </Link>
            <Link className="link-style support-style" to="/support">
              Support
              <div className="notification-cotnainer">0</div>
            </Link>
            <Link className="link-style" to="/subscription-request">
              Subscription Request
            </Link>
          </div>
        </div>
        <div>
          <Link className="link-style" to="/my-profile">
            My Profile
          </Link>
          <Link to="/" className="link-style">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderComponent;
