import LoginHeaderComponent from "../LoginHeaderComponent/LoginHeaderComponent";
import backgroundImage from "../../SiteImages/images/backgroundImage.jpeg";
import { Link } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";

const options = [
  {
    id: 1,
    optionName: "Trial Subscription Registration",
    link: "/trial-subscription-registration",
  },
  {
    id: 2,
    optionName: "Annual Subscription Registration",
    link: "/annual-subscription-registration",
  },
  { id: 3, optionName: "Login", link: "/" },
  { id: 4, optionName: "Contact Us", link: "/contactUs" },
];

const SubscriptionDetailComponent = () => {
  const contextValue = useContext(DataContext);
  const { setSwitchLink } = contextValue;

  return (
    <div className="subscription-detail">
      <LoginHeaderComponent />
      <div
        className="subscription-content-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div className="subscription-content">
          {options.map((option) => (
            <Link
              className="subscription-link-style"
              to={option.link}
              key={option.id}
            >
              <button
                className="subscription-option"
                onClick={() => setSwitchLink(option.id !== 3 ? false : true)}
              >
                {option.optionName}
              </button>
            </Link>
          ))}
        </div>
        <div className="subscription-details-main-container">
          <div className="subscription-details-container">
            <div className="subscription-detail-logo ">
              <img
                src="https://www.globexinsight.net/images/globex_UW_Nobg.png"
                alt="globex-logo"
                className="globex-logo"
              />
              <ul>
                <li className="subscription-detail-list">
                  <p className="subscription-detail-title">Experience </p>
                </li>
                <li className="subscription-detail-list">
                  <p className="subscription-detail-title">Expertise</p>
                </li>
                <li className="subscription-detail-list">
                  <p className="subscription-detail-title">Execution</p>
                </li>
              </ul>
            </div>
            <div className="subscription-detail-text">
              <p className="subscription-detail-title">
                Globex Insight is an online platform to provide practical and
                easy to understand Information and Intelligence on global
                insurance markets, including Laws and Regulations, Country
                Nuances, Taxes and Fees, Market Practice, Accounting
                Requirements, etc. per line of coverage and on an annual
                subscription basis.
              </p>

              <p className="subscription-detail-title">
                The first line of coverage - MARINE is now available!
              </p>
              <table className="subscription-detail-table">
                <thead>
                  <tr className="subscription-detail-table-header-row">
                    <th className="subscription-detail-table-header">
                      Features
                    </th>
                    <th className="subscription-detail-table-header">
                      STANDARD Subscription
                    </th>
                    <th className="subscription-detail-table-header">
                      PREMIUM Subscription
                    </th>
                  </tr>
                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      Unlimited Number of Users{" "}
                    </td>
                    <td className="subscription-detail-table-cell">✓</td>
                    <td className="subscription-detail-table-cell">✓</td>
                  </tr>
                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      All Countries Included
                    </td>
                    <td className="subscription-detail-table-cell">✓</td>
                    <td className="subscription-detail-table-cell">✓</td>
                  </tr>
                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      Unlimited Report Export
                    </td>
                    <td className="subscription-detail-table-cell">✓</td>
                    <td className="subscription-detail-table-cell">✓</td>
                  </tr>
                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      +Report Customization
                    </td>
                    <td className="subscription-detail-table-cell">✗</td>
                    <td className="subscription-detail-table-cell">✓</td>
                  </tr>
                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      +Additional Q&A Support
                    </td>
                    <td className="subscription-detail-table-cell">✗</td>
                    <td className="subscription-detail-table-cell">✓</td>
                  </tr>

                  <tr className="subscription-detail-table-row">
                    <td className="subscription-detail-table-cell">
                      Price(Annual)
                    </td>
                    <td className="subscription-detail-table-cell">US$7,500</td>
                    <td className="subscription-detail-table-cell">
                      US$20,000
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-container">
          <p className="footer-info-container-text">
            Globex Insight provides information that is subject to change and it
            may not reflect real time information at the time it is viewed. Data
            is being reviewed and revised continuously, an update may not
            include all fields at the same time. Feel free to contact your
            Globex Insight experts if your use of the latest information is
            critical.
            <br />
            <br />
            Copyright 2025, Globex International Group Inc. © 2025 Globex •
            Terms & Conditions • Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetailComponent;
