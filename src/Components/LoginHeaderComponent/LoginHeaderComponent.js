import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import "./index.css"; // Assuming you have some styles in index.css

const LoginHeaderComponent = () => {
  const [isContact, setIsContact] = useState(true);
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
        {isContact && (
          <button onClick={() => setIsContact(false)}>
            <Link to="/contactUs" className="link-styles">
              Contact us
            </Link>
          </button>
        )}
        {!isContact && (
          <Link
            to="/"
            className="link-styles"
            onClick={() => setIsContact(true)}
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
