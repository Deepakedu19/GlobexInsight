import LoginHeaderComponent from "../LoginHeaderComponent/LoginHeaderComponent";

const LoginContactUsComponent = () => {
  return (
    <div className="login-contact-us">
      <LoginHeaderComponent />
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, please reach out to us at:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@globexinsight.com">
            support@globexinsight.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LoginContactUsComponent;
