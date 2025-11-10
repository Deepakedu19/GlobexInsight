import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import NewsLetterComponent from "../NewsLetterComponent/NewsLetterComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { FaDatabase } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { IoAlertCircle } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

import "./index.css";

const DashboardComponent = () => {
  return (
    <div>
      <DashboardHeaderComponent />
      <div className="dashboard-main-container">
        <div className="dashboard-main-filter-container">
          <div className="login-dashboard-mini-header">
            <div>
              <h1 className="header-logo">
                Globex <span className="logo-style extra-style-in">In</span>
                sight
              </h1>
              <p className="logo-style">
                Your international insurance intelligence database
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/globex-insight"
                target="_blank"
                rel="noopener noreferrer"
                className="mini-header-linkedin-link"
              >
                Follow us on LinkedIn <FaLinkedin className="img-logo" />
              </a>
            </div>
          </div>
          <div className="dashboard-flex-container">
            <div className="dashboard-content-container">
              <div className="dashboard-content-sub-container">
                <div className="content-info-container">
                  <FaDatabase className="icon-style new-icon-position new-icon-color-style" />
                  <h2 className="heading-style">Database</h2>
                  <p className="paragraph-style">
                    With 25 year experience in international insurance, Globex
                    International delivers highest quality international
                    insurance data with Globex Insight. We get our data right
                    from the ground and shape it for your practical use to
                    support your daily information needs.
                  </p>
                </div>
                <div className="content-info-container new-background-style">
                  <FaUser className="icon-style new-style-heading new-icon-position" />
                  <h2 className="heading-style new-style-heading">Support</h2>
                  <p className="paragraph-style new-style-paragraph">
                    If you have further queries and would like to have tailor
                    made information solutions around the globe, Globex Insight
                    experts are here to assist. Contact us!.
                  </p>
                </div>
              </div>
              <div className="dashboard-content-sub-container">
                <div className="content-info-container new-container-style-3">
                  <ImHeadphones className="icon-style new-icon-position new-icon-style-3 " />
                  <h2 className="heading-style new-style-heading new-icon-style-3">
                    Other Services
                  </h2>
                  <p className="paragraph-style new-heading-para-3">
                    25 years of experience comes from day to day involvement in
                    placing insurance policies, orchestrating timely and
                    accurate payments and providing consulting services for
                    international insurance programs. Details are here!
                  </p>
                </div>
                <div className="content-info-container new-background-style-2 ">
                  <IoAlertCircle className="icon-style new-icon-position new-icon-color-style " />
                  <h2 className="heading-style new-heading-style-2">
                    About Us
                  </h2>
                  <p className="paragraph-style new-para-style-2">
                    Globex International Group, with its global reach powered by
                    its offices in Connecticut, Beijing, London and Paris
                    provides international insurance consulting services to
                    industry giants and niche players. Our corporate website has
                    more!
                  </p>
                </div>
              </div>
            </div>
            <div className="newsletter-component-container">
              <NewsLetterComponent />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DashboardComponent;
