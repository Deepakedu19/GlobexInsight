import "./index.css";
import { Link } from "react-router-dom";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const LoginDashboardComponent = () => {
  const contextValue = useContext(DataContext);
  const { myDate, setSwitchLink } = contextValue;
  const dayOfMonth = myDate.getDate(); // Returns 22 for July 22, 2025
  console.log(dayOfMonth);

  // take the day of the month as a value and use the background image accordingly
  // Choose background image based on dayOfMonth
  const backgroundImages = [
    "url(https://images.unsplash.com/photo-1541446201430-cf2532e3d424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    "url('https://images.unsplash.com/photo-1661790291293-b5e43e5c9f2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1615057905828-78d3c0d01268?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1580537782709-a15bb3c13a01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1627766491244-79053c4a983b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1582517378602-f109b395ce40?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1598408745613-178751e2ccde?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1747457421291-2a059f60c384?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url(https://images.unsplash.com/photo-1541446201430-cf2532e3d424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  ];
  const bgIndex = dayOfMonth % backgroundImages.length;
  console.log(bgIndex);
  const dashboardStyle = {
    backgroundImage: backgroundImages[bgIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };

  return (
    <>
      <div className="login-dashboard" style={dashboardStyle}>
        <div className="login-btn-container">
          <Link to="/subscription" className="login-link">
            <button
              className="login-button"
              onClick={() => setSwitchLink(false)}
            >
              Click here to learn more about
              <br />
              <span className="logo-subscription-btn-style">
                Globex <span className="logo-style">In</span>sight
              </span>{" "}
              <br />&<br /> apply for subscriptions
            </button>
          </Link>
        </div>
        <div className="login-form-container">
          <LoginFormComponent />
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default LoginDashboardComponent;
