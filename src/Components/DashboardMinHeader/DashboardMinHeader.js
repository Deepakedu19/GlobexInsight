import { FaLinkedin } from "react-icons/fa";
import "./index.css";

const DashboardMinHeader = () => {
  return (
    <div className="login-header mini-header-position">
      <div>
        <h1 className="header-logo">
          Globex <span className="logo-style">In</span>sight
        </h1>
        <p className="logo-style">
          Your international insurance intelligence database
        </p>
      </div>
      <div>
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

export default DashboardMinHeader;
