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
            <h4 className="dashbord-text">
              Welcome to Globex Insight,
              <br /> your international insurance intelligence database. Our
              goal is to provide you practical and easy to understand
              information and intelligence on global insurance markets,
              including laws and regulations, country nuances, taxes and fees,
              market practice, accounting requirements, etc.
              <br /> MARINE database is now available in over 100 countries. We
              will add more countries and launch additional lines of coverage in
              the near future. <br />
              Please stay tuned!
            </h4>
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
