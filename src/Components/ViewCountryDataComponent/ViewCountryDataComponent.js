import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { getNames, getCode } from "country-list";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";

const LineofBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const categoryOptions = [
  { id: 1, name: "Accounting" },
  { id: 2, name: "Claims Handling" },
  { id: 3, name: "General Information" },
  { id: 4, name: "Policy Related" },
  { id: 5, name: "Premium Calculation Details" },
  { id: 6, name: "Reinsurance Related Questions" },
];

const ViewCountryDataComponent = () => {
  const countries = getNames();
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="view-content-container">
        <h1 className="header-title">View Country Data</h1>
        <div className="view-details-container">
          <label className="label-name">Line of Business</label>
          <select className="lob-options-container">
            <option disabled selected>
              select
            </option>
            {LineofBusinessOptions.map((eachOption) => (
              <option key={eachOption.id}>{eachOption.name}</option>
            ))}
          </select>
        </div>
        {/* {line of bussiness} */}
        <div className="view-container-layout">
          <br />
          <br />
          <div className="country-view-container">
            <label className="label-name">
              Country{" "}
              <span className="notice-text">
                Use ctrl to select multiple options
              </span>
            </label>
            <select className="view-country-container" required multiple>
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
          <div className="country-view-container">
            <label className="label-name">
              Category Name{" "}
              <span className="notice-text">
                Use ctrl to select multiple options
              </span>
            </label>
            <select className="view-country-container" multiple>
              {/* <option disabled selected>
                select category
              </option> */}
              {categoryOptions.map((eachOption) => (
                <option key={eachOption.id}>{eachOption.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="user-btn-container ">
          <button className="add-btn user-additional-btn ">Submit</button>
          <button className="search-btn user-additional-btn ">Clear</button>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ViewCountryDataComponent;
