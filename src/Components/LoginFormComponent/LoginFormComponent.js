import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

import "./index.css";

const LoginFormComponent = () => {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <h2 className="login-form-title">Login</h2>
        <div className="login-input-container">
          <div className="login-input-icon-container">
            <FaUser className="login-input-icon" />
          </div>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="login-input-tag"
          />
        </div>
        <div className="login-input-container">
          <div className="login-input-icon-container">
            <MdKey className="login-input-icon" />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="login-input-tag"
          />
        </div>
        <button type="submit" className="login-btn">
          <CiLogin className="login-btn-icon" />
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginFormComponent;
