import { FaLinkedin } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

import { CgProfile } from "react-icons/cg";
import { PiPasswordFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { useState, useContext } from "react";
import { DataContext } from "../../ContextComponent/ContextComponent";

import "./index.css";

const ClientHeaderComponent = () => {
  const { setClientActiveLinkId, setOnEditResetPassword } =
    useContext(DataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const [isContact, setIsContact] = useState(true);

  const onToggleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    window.onclick = (e) => {
      if (!e.target.closest(".client-menu-icon")) {
        setIsMenuOpen(false);
      }
    };
  };

  return (
    <div className="login-header">
      <div>
        <h1 className="header-logo">
          Globex <span className="logo-style extra-style-in">In</span>sight
        </h1>
        <p className="logo-style">
          Your international insurance intelligence database
        </p>
      </div>
      <div className="header-right-container">
        {/* <div className="header-right-container">
          <span
            className="logout-icon"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout <LuLogOut className="header-icon" />
          </span>
        </div> */}
        <a
          href="https://www.linkedin.com/company/globex-insight"
          target="_blank"
          rel="noopener noreferrer"
          className="link-styles"
        >
          Follow us on LinkedIn <FaLinkedin className="img-logo" />
        </a>
        <HiOutlineMenu className="client-menu-icon" onClick={onToggleOpen} />

        {isMenuOpen && (
          <>
            <div className="client-menu-container">
              <span
                className="logout-icon"
                onClick={() => {
                  navigate("/client-user-profile");
                  setIsMenuOpen(false);
                  setOnEditResetPassword(false);
                }}
              >
                <CgProfile className="header-icon" />
                Profile
              </span>
              <span
                className="logout-icon"
                onClick={() => {
                  navigate("/client-user-profile");
                  setIsMenuOpen(false);
                  setOnEditResetPassword(true);
                }}
              >
                <PiPasswordFill className="header-icon" />
                Reset Password
              </span>
              <span
                className="logout-icon"
                onClick={() => {
                  navigate("/client-dashboard");
                  setClientActiveLinkId(0);
                  setIsMenuOpen(false);
                }}
              >
                <IoHome className="header-icon" />
                Home
              </span>
              <span
                className="logout-icon"
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
              >
                <LuLogOut className="header-icon" />
                Logout
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClientHeaderComponent;
