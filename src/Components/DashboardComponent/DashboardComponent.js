import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import NewsLetterComponent from "../NewsLetterComponent/NewsLetterComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { FaDatabase } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { IoAlertCircle } from "react-icons/io5";

import "./index.css";

const DashboardComponent = () => {
  return (
    <div>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="dashboard-main-container">
        <div className="dashboard-content-container">
          <div className="content-info-container">
            <FaDatabase className="icon-style" />
            <h2 className="heading-style">Database</h2>
            <p className="paragraph-style">
              With 25 year experience in international insurance, Globex
              International delivers highest quality international insurance
              data with Globex Insight. We get our data right from the ground
              and shape it for your practical use to support your daily
              information needs.
            </p>
          </div>
          <div className="content-info-container">
            <FaUser className="icon-style" />
            <h2 className="heading-style">Support</h2>
            <p className="paragraph-style">
              If you have further queries and would like to have tailor made
              information solutions around the globe, Globex Insight experts are
              here to assist. Contact us!.
            </p>
          </div>
          <div className="content-info-container">
            <ImHeadphones className="icon-style" />
            <h2 className="heading-style">Other Services</h2>
            <p className="paragraph-style">
              25 years of experience comes from day to day involvement in
              placing insurance policies, orchestrating timely and accurate
              payments and providing consulting services for international
              insurance programs. Details are here!
            </p>
          </div>
          <div className="content-info-container">
            <IoAlertCircle className="icon-style extra-icon-style" />
            <h2 className="heading-style">About Us</h2>
            <p className="paragraph-style">
              Globex International Group, with its global reach powered by its
              offices in Connecticut, Beijing, London and Paris provides
              international insurance consulting services to industry giants and
              niche players. Our corporate website has more!
            </p>
          </div>
        </div>
      </div>
      <div>
        <NewsLetterComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default DashboardComponent;
