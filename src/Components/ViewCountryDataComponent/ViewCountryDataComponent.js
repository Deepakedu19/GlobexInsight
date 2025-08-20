import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { getNames } from "country-list";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoFilter } from "react-icons/io5";
import { MdExtensionOff } from "react-icons/md";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

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
  const [onToggleData, setOnToggleData] = useState(false);
  const [onPopupMenu, setOnPopupMenu] = useState(false);
  const [onToggleCategory, setOnToggleCategory] = useState(false);
  const [onToggleCountry, setOnToggleCountry] = useState(false);

  const onHandleCategory = () => {
    setOnToggleCategory(!onToggleCategory);
    setOnToggleCountry(false);
  };

  const onHandleCountry = () => {
    setOnToggleCountry(!onToggleCountry);
  };
  const onHandleRequest = () => {
    setOnPopupMenu(!onPopupMenu);
  };

  const onCancelRequest = () => {
    setOnPopupMenu(false);
    setOnToggleData(false);
  };
  const countries = getNames();
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="view-content-container">
        <h1 className="header-title">View Country Data</h1>
        <button className="filter-btn" onClick={onHandleRequest}>
          <IoFilter className="view-filter-icon" />
          Filter
        </button>
        {!onToggleData && (
          <div className="no-records-found">
            <h2 className="no-records-title">
              <MdExtensionOff /> No records found
            </h2>
          </div>
        )}
        {onPopupMenu && (
          <div className="view-details-popup-menu">
            <div className="filter-options-container">
              <h2 className="view-filter-title">Select the Data</h2>
              <div className="view-data-container">
                <div className="view-input-container">
                  <label className="view-data-label">Line of Business</label>
                  <br />
                  <select className="view-data-select">
                    <option value="" disabled selected>
                      Select Line of Business
                    </option>
                    {LineofBusinessOptions.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="view-container-layout">
                  {/* Category Selection */}
                  <div className="view-small-input-container">
                    <label className="view-data-label">Category</label>
                    <br />
                    <label
                      className="view-data-tag-label"
                      onClick={onHandleCategory}
                    >
                      Select multiple category <FaCaretDown />
                    </label>
                    {onToggleCategory && (
                      <div className="view-category-options">
                        {categoryOptions.map((option) => (
                          <label
                            value={option.name}
                            className="view-category-option-label"
                          >
                            <input
                              type="checkbox"
                              key={option.id}
                              value={option.name}
                              className="view-input-option-checkbox"
                            />
                            {option.name}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Country Selection */}
                  <div className="view-small-input-container">
                    <label className="view-data-label">Country</label>
                    <br />
                    <label
                      className="view-data-tag-label"
                      onClick={onHandleCountry}
                    >
                      Select multiple Countries <FaCaretDown />
                    </label>
                    {onToggleCountry && (
                      <div className="view-country-options">
                        {countries.map((option) => (
                          <label
                            value={option.name}
                            className="view-category-option-label"
                          >
                            <input
                              type="checkbox"
                              key={option.id}
                              value={option}
                              className="view-input-option-checkbox"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="view-button-container">
                  <button className="filter-submit-btn">Submit</button>
                  <button
                    className="filter-cancel-btn"
                    onClick={onCancelRequest}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default ViewCountryDataComponent;
