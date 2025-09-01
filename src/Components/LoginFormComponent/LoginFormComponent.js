import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import "./index.css";

const LoginFormComponent = () => {
  const navigate = useNavigate();

  const onDetailsSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-form-heading">Login </h2>
      <label id="label-container">
        <FaUser className="login-icon-style" />{" "}
        <input type="text" id="login-input-feild" placeholder="UserName" />
      </label>
      <label id="label-container">
        <MdKey className="login-icon-style" />{" "}
        <input type="password" id="login-input-feild" placeholder="Password" />
      </label>
      <div className="login-btn-contianer">
        <button className="login-page-btn" onClick={onDetailsSubmit}>
          <CiLogin className="login-btn-icon" />
          Login
        </button>
        <span className="forgot-password-btn">Forgot password?</span>
      </div>
    </div>
  );
};

export default LoginFormComponent;
