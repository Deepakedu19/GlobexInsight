import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponents from "../ClientLinkComponents/ClientLinkComponent";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { useContext } from "react";
import { DataContext } from "../../ContextComponent/ContextComponent";

const ClientOtherServicesComponent = () => {
  const navigate = useNavigate();
  const { setClientActiveLinkId } = useContext(DataContext);

  return (
    <div>
      <ClientHeaderComponent />
      <ClientLinkComponents />
      <div className="client-other-services-main-container">
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
            {/*  */}
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
      </div>
      <FooterComponent />
    </div>
  );
};

export default ClientOtherServicesComponent;
