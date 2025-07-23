import "./index.css";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";

const LoginDashboardComponent = () => {
  const { myDate } = useContext(DataContext);
  const dayOfMonth = myDate.getDate(); // Returns 22 for July 22, 2025
  console.log(dayOfMonth);

  // take the day of the month as a value and use the background image accordingly
  return (
    <div className="login-dashboard">
      <div className="login-btn-container">
        <button className="login-button">
          Click here to learn more about <br />
          <br />
          <span className="logo-subscription-btn-style">
            Globex <span className="logo-style">In</span>sight
          </span>{" "}
          <br />
          <br />& apply for subscriptions
        </button>
      </div>
      <div className="login-form-container">
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginDashboardComponent;
