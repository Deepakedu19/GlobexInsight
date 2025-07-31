import "./index.css";
import { Link } from "react-router-dom";

const DashboardHeaderComponent = () => {
  return (
    <nav className="main-Header-component">
      <div className="links-container">
        <div className="min-links-container">
          <div className="options-container">
            <select className="select-dropdown">
              <option className="option-link">
                <Link>Country Data</Link>
              </option>
              <option className="option-link">
                <Link>Country Data</Link>
              </option>
              <option className="option-link">
                <Link>Country Data</Link>
              </option>
            </select>
            <select className="select-dropdown">
              <option className="option-link">
                <Link>Admin</Link>
              </option>
              <option className="option-link">
                <Link>Country Data</Link>
              </option>
              <option className="option-link">
                <Link>Country Data</Link>
              </option>
            </select>
          </div>
          <div>
            <Link className="link-style">Dashboard</Link>
            <Link className="link-style support-style">Support</Link>
            <Link className="link-style">Subscription Request</Link>
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
