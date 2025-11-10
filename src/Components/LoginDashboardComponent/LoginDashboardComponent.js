import "./index.css";
import { Link } from "react-router-dom";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LoginDashboardComponent = () => {
  const contextValue = useContext(DataContext);
  const { myDate, setSwitchLink, onloginAnimation } = contextValue;
  const dayOfMonth = myDate.getDate(); // Returns 22 for July 22, 2025
  console.log(dayOfMonth);

  // take the day of the month as a value and use the background image accordingly
  // Choose background image based on dayOfMonth
  const backgroundImages = [
    "url(https://images.unsplash.com/photo-1541446201430-cf2532e3d424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    "url('https://images.unsplash.com/photo-1661790291293-b5e43e5c9f2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1615057905828-78d3c0d01268?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1580537782709-a15bb3c13a01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url(https://images.pexels.com/photos/1823680/pexels-photo-1823680.jpeg)",
    "url('https://images.pexels.com/photos/5800228/pexels-photo-5800228.jpeg')",
    "url('https://images.unsplash.com/photo-1582517378602-f109b395ce40?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url(https://images.pexels.com/photos/15194859/pexels-photo-15194859.jpeg)",
    "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url(https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg)",
    "url('https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1747457421291-2a059f60c384?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url(https://images.unsplash.com/photo-1541446201430-cf2532e3d424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    "url(https://images.unsplash.com/photo-1527086983597-b4d44c4a66d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  ];
  const bgIndex = dayOfMonth % backgroundImages.length;
  console.log(bgIndex);
  const dashboardStyle = {
    backgroundImage: backgroundImages[bgIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };

  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.to(".login-btn-container", {
      y: 20,
      duration: 0.5,
      delay: 0.3,
      opacity: 1,
    });
    timeline.from(".login-form-container", {
      y: 5,
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <>
      <div></div>
      <div className="login-dashboard" style={dashboardStyle}>
        <div className="login-dashboard-overlay">
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
      </div>

      <FooterComponent />
    </>
  );
};

export default LoginDashboardComponent;
