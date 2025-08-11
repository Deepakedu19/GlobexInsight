import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import { getNames, getCode } from "country-list";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const lineOfBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const ClientDatabaseComponent = () => {
  const navigate = useNavigate();
  const countries = getNames();
  return (
    <>
      <ClientHeaderComponent />
      <ClientLinkComponent />

      <div className="clientDatabase-container">
        <div className="clientDatabase-inner-container">
          <div className="home-icon-container">
            <IoHome
              className="home-icon"
              onClick={() => navigate("/client-dashboard")}
            />
            <label className="home-icon-label">Home</label>
          </div>
          <div className="clientDatabase-container-layout">
            <div>
              <label className="label-name">
                Line of Business
                <span className="notice-text">
                  Use ctrl to select multiple options
                </span>
              </label>

              <select
                className="Client-database-lineof-business-container"
                multiple
                required
              >
                {/* <option disabled>Select Line of Business</option> */}
                {lineOfBusinessOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="country-view-container">
              <label className="label-name ">
                Country{" "}
                <span className="notice-text">
                  Use ctrl to select multiple options
                </span>
              </label>
              <select
                className="Client-database-lineof-business-container"
                required
                multiple
              >
                {/* <option value="" disabled selected>
              Select Country
            </option> */}
                {countries.map((country, index) => (
                  <option key={index} value={country} id={getCode(country)}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="user-btn-container client-database-btn-container">
            <button className="add-btn user-additional-btn ">Submit</button>
            <button className="search-btn user-additional-btn ">Clear</button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ClientDatabaseComponent;
