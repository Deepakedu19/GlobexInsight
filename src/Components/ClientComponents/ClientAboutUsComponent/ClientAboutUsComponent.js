import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { GiTeamIdea } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa6";
import { GrNetwork } from "react-icons/gr";
import { SiAudiobookshelf } from "react-icons/si";

const ClientAboutUsComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ClientHeaderComponent />
      <ClientLinkComponent />
      <div className="container-about-us">
        <div className="container-about-us-filter">
          <div className="home-icon-container">
            <IoHome
              className="about-us-home-exit-icon"
              onClick={() => navigate("/client-dashboard")}
            />
            <label className="home-icon-label">Home</label>
          </div>
          <div className="about-us-content-main-container">
            <div className="about-us-content-container">
              <div className="about-us-items-container-1">
                <div className="about-us-item-style-2">
                  <p>
                    <GiTeamIdea className="about-us-icon" />
                    <br />
                    Team of International Insurance Experts
                  </p>
                </div>
                <div className="about-us-item-style-1">
                  <p>
                    {" "}
                    <FaBusinessTime className="about-us-icon" />
                    <br />
                    All lines of Business
                  </p>
                </div>
              </div>
              <div className="about-us-items-container-2">
                <div className="about-us-item-style-3">
                  <p>
                    {" "}
                    <GrNetwork className="about-us-icon" />
                    <br />
                    Network of insurers in 180+ countries/Territories
                  </p>
                </div>
                <div className="about-us-item-style-4">
                  <p>
                    {" "}
                    <SiAudiobookshelf className="about-us-icon" />
                    <br />
                    Procedures and systems
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-description">
              <h2 className="about-us-title">
                Who is Globex Underwriting Services ?
              </h2>
              <img
                src="https://www.globexinsight.net/images/globex_UW_Nobg.png"
                alt="globex insight"
                className="about-us-image"
              />

              <p className="about-us-sub-title">
                An independent and turnkey international solution for insurance
                organizations.
                <br />
                Who desire to write multinational business.
              </p>
              <button
                className="btn-contact-us"
                onClick={() => navigate("/contactUs")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ClientAboutUsComponent;
