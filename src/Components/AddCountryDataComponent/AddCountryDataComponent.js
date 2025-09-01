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

const AddCountryDataComponent = () => {
  const countries = getNames();
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="add-country-contianer">
        <h1 className="header-title">Add Country</h1>
        <div className="add-country-details-contianer">
          <div className="details-container">
            <label className="add-country-label-name">Country</label>
            <select className="country-option-container" required>
              <option value="" disabled selected>
                Select Country
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country} id={getCode(country)}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {/* Line of bussiness DropDown */}

          <div className="details-container">
            <label className="add-country-label-name">Line of Business</label>
            <select className="country-option-container">
              <option disabled selected>
                select
              </option>
              {LineofBusinessOptions.map((eachOption) => (
                <option key={eachOption.id}>{eachOption.name}</option>
              ))}
            </select>
          </div>

          {/* {categoryDropDown} */}
          <div className="details-container">
            <label className="add-country-label-name">Category Name</label>
            <select className="country-option-container">
              <option disabled selected>
                select category
              </option>
              {categoryOptions.map((eachOption) => (
                <option key={eachOption.id}>{eachOption.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="user-btn-container ">
          <button className="add-btn user-additional-btn ">Submit</button>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AddCountryDataComponent;
