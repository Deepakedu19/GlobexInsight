import { FaLinkedin } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import "./index.css";

const ClientHeaderComponent = () => {
  const navigate = useNavigate();
  // const [isContact, setIsContact] = useState(true);
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
        <div className="header-right-container">
          <span
            className="logout-icon"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout <LuLogOut className="header-icon" />
          </span>
        </div>
        <a
          href="https://www.linkedin.com/company/globex-insight"
          target="_blank"
          rel="noopener noreferrer"
          className="link-styles"
        >
          Follow us on LinkedIn <FaLinkedin className="img-logo" />
        </a>
      </div>
    </div>
  );
};

export default ClientHeaderComponent;
