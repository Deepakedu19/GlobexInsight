import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponents from "../ClientLinkComponents/ClientLinkComponent";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { useContext } from "react";
import { DataContext } from "../../ContextComponent/ContextComponent";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdModelTraining } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";

const ClientOtherServicesComponent = () => {
  const navigate = useNavigate();
  const { setClientActiveLinkId } = useContext(DataContext);

  return (
    <div>
      <ClientHeaderComponent />
      <ClientLinkComponents />
      {/* Layout style -1 */}
      {/* <div className="client-other-services-main-container">
        <div className="client-other-services-content-filter">
          <div className="home-icon-container">
            <div>
              <h2 className="home-icon-title">
                What other services Globex Underwriting Services offer?
                <IoHome
                  className="home-exit-icon"
                  onClick={() => {
                    navigate("/client-dashboard");
                    setClientActiveLinkId(0);
                  }}
                />
              </h2>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://www.globexinsight.net/images/globex_UW_Nobg.png"
              alt="Globex Insight"
              className="client-other-services-image"
            />
          </div>
          <h2 className="information-title">Information and Intelligence</h2>
          <h2 className="TE-title">Training and Education</h2>
          <h2 className="PA-title">Premium Accounting</h2>
          <h2 className="PAdmin-title">Program Administration</h2>
          <h2 className="IE-title">International Expertise</h2>
          <h2 className="PAS-title">Placement and Accounting Services</h2>
        </div>
      </div> */}
      {/* Layout style -2 */}
      <div className="client-otherServices-main-container">
        <div className="client-otherServices-content-filter">
          <div className="home-icon-container">
            <IoHome
              className="client-other-services-home-exit-icon"
              onClick={() => {
                navigate("/client-dashboard");
                setClientActiveLinkId(0);
              }}
            />
          </div>
          <h1 className="client-otherServices-content-title">
            What other services Globex Underwriting Services offer?
          </h1>
          <img
            src="https://www.globexinsight.net/images/globex_UW_Nobg.png"
            alt="Globex-logo"
            className="client-otherServices-globex-image  "
          />
        </div>
      </div>
      <div className="client-otherServices-content-tiles">
        <div className="client-otherServices-tile-container">
          <div className="client-otherServices-image-and-icon-container">
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <IoIosInformationCircleOutline className="other-service-icon" />{" "}
                Information and Intelligence
              </h3>
            </div>
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <MdModelTraining className="other-service-icon" /> Training and
                Education
              </h3>
            </div>
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <MdOutlineWorkspacePremium className="other-service-icon" />{" "}
                Premium Accounting
              </h3>
            </div>
          </div>
          <div className="client-otherServices-image-and-icon-container">
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <RiAdminFill className="other-service-icon" />
                Program Administration
              </h3>
            </div>
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <FaUserTie className="other-service-icon" />
                International Expertise
              </h3>
            </div>
            <div className="client-otherServices-image-container">
              <h3 className="other-service-title">
                <MdManageAccounts className="other-service-icon" />
                Placement and Accounting Services
              </h3>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ClientOtherServicesComponent;
