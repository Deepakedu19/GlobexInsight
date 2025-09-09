import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdKey } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

const LoginFormComponent = () => {
  const [onToggleForgetPassword, setOnToggleForgtPassword] = useState(false);
  const navigate = useNavigate();

  const onDetailsSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const onHandleLogin = () => {
    setOnToggleForgtPassword(false);
  };

  const onHandleForgotPassword = () => {
    const isValidUser = false;
    if (isValidUser) {
      toast.info("Password sent to your registered email id", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please enter valid username", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {!onToggleForgetPassword && (
        <div className="login-container">
          <h2 className="login-form-heading">Login </h2>
          <label id="label-container">
            <FaUser className="login-icon-style" />{" "}
            <input type="text" id="login-input-feild" placeholder="UserName" />
          </label>
          <label id="label-container">
            <MdKey className="login-icon-style" />{" "}
            <input
              type="password"
              id="login-input-feild"
              placeholder="Password"
            />
          </label>
          <div className="login-btn-contianer">
            <button className="login-page-btn" onClick={onDetailsSubmit}>
              <CiLogin className="login-btn-icon" />
              Login
            </button>

            <span
              className="forgot-password-btn"
              onClick={() => {
                setOnToggleForgtPassword(true);
              }}
            >
              Forgot password?
            </span>
          </div>
        </div>
      )}
      {onToggleForgetPassword && (
        <div className="login-container">
          <h2 className="login-form-heading">Forget Password </h2>
          <label id="forget-password-label-container">
            Enter your GlobexInsight Username, password will be sent to your
            email id.
          </label>
          <label id="label-container">
            <FaUser className="login-icon-style" />{" "}
            <input
              type="password"
              id="login-input-feild"
              placeholder="Username"
            />
          </label>
          <div className="login-btn-contianer">
            <button
              className="sendpassword-page-btn"
              onClick={onHandleForgotPassword}
            >
              <IoMdKey className="login-btn-icon" />
              Send Password
            </button>
            <span className="forgot-password-btn" onClick={onHandleLogin}>
              Login
            </span>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default LoginFormComponent;
