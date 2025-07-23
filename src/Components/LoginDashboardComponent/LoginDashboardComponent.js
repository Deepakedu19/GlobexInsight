import "./index.css";
import { Link } from "react-router-dom";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";

const LoginDashboardComponent = () => {
  const contextValue = useContext(DataContext);
  const { myDate, setSwitchLink } = contextValue;
  const dayOfMonth = myDate.getDate(); // Returns 22 for July 22, 2025
  console.log(dayOfMonth);

  // take the day of the month as a value and use the background image accordingly
  return (
    <div className="login-dashboard">
      <div className="login-btn-container">
        <Link to="/subscription" className="login-link">
          <button className="login-button" onClick={() => setSwitchLink(false)}>
            Click here to learn more about <br />
            <br />
            <span className="logo-subscription-btn-style">
              Globex <span className="logo-style">In</span>sight
            </span>{" "}
            <br />
            <br />& apply for subscriptions
          </button>
        </Link>
      </div>
      <div className="login-form-container">
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginDashboardComponent;
