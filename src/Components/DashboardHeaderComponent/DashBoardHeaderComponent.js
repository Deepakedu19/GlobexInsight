import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { NavLink } from 'react-router-dom';

import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

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
          <div >
            {/* Country data drop-down */}
            <button
              className={`link-style ${isCountryToggle ? 'active-link' : ''}`}
              onClick={onCountryToggle}
            >
              Country Data <span className="dropdown-icon">{countryToggleIcon}</span>
            </button>
            {isCountryToggle && (
              <ul className="country-data-dropdown-container">
                <li className="admin-link-style">Add Country Data</li>
                <li className="admin-link-style">Edit Country Data</li>
                <li className="admin-link-style">View Country Data</li>
              </ul>
            )}
            {/* Admin  drop-down */}
            <button
              className={`link-style ${isAdminToggle ? 'active-link' : ''}`}
              onClick={onAdminToggle}>
              Admin <span className="dropdown-icon">{adminToggleIcon}</span>
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
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive && !isAdminToggle && !isCountryToggle ? 'link-style active-link' : 'link-style'
              }
            >
              Dashboard
            </NavLink>

            <NavLink to="/support" className={({ isActive }) =>
              isActive  && !isAdminToggle && !isCountryToggle ? 'link-style active-link' : 'link-style'} >
              Support
              <div className="notification-cotnainer">0</div>
            </NavLink>
            <NavLink to="/subscription-request"
              className={({ isActive }) =>
                isActive  && !isAdminToggle && !isCountryToggle? 'link-style active-link' : 'link-style'}>
              Subscription Request
            </NavLink>
          </div>
        </div>
        <div>
          <Link className="link-style">My Profile</Link>
          <Link to="/" className="link-style">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderComponent;
