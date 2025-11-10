import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { HiInformationCircle } from "react-icons/hi2";

import "./index.css";

const ClientDahboardComponent = () => {
  return (
    <>
      <ClientHeaderComponent />
      <ClientLinkComponent />
      <div className="dashboard-main-contianer">
        <div className="filter-container">
          <div className="client-dashboard-content-container">
            <h4 className="dashbord-text">Welcome to Globex Insight </h4>
            <div className="dashboard-para-logo-container">
              <p className="dashboard-para-text">
                Your international insurance intelligence database. Our goal is
                to provide you practical and easy to understand information and
                intelligence on global insurance markets, including laws and
                regulations, country nuances, taxes and fees, market practice,
                accounting requirements, etc.
                <br />
                <br />
                MARINE database is now available in over 100 countries. We will
                add more countries and launch additional lines of coverage in
                the near future.
                <br />
                <br />
                Please stay tuned!
              </p>
              <div className="dashboard-logo-container">
                <img
                  src="https://multum.com.au/wp-content/uploads/2022/05/Your-Trusted-Technology-Adviser-Web.png"
                  alt="promise-image"
                  className="dashboard-logo-image"
                />
              </div>
            </div>
          </div>
          <div className="info-place-contianer">
            <HiInformationCircle className="info-icon" />
            <span className="info-detail-text">Latest information updates</span>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ClientDahboardComponent;
