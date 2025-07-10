import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";
import "./index.css";

const LoginHeaderComponent = () => {
  const contextValue = useContext(DataContext);
  const { switchLink, setSwitchLink } = contextValue;
  // const [isContact, setIsContact] = useState(true);
  return (
    <div className="login-header">
      <div>
        <h1 className="header-logo">
          Globex <span className="logo-style">In</span>sight
        </h1>
        <p className="logo-style">
          Your international insurance intelligence database
        </p>
      </div>
      <div>
        {switchLink && (
          <Link
            to="/contactUs"
            className="link-styles"
            onClick={() => setSwitchLink(false)}
          >
            Contact us
          </Link>
        )}
        {!switchLink && (
          <Link
            to="/"
            className="link-styles"
            onClick={() => setSwitchLink(true)}
          >
            Login
          </Link>
        )}
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

export default LoginHeaderComponent;
