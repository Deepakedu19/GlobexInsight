import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { getNames } from "country-list";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { toast } from "react-toastify";
import { useContext } from "react";
import { DataContext } from "../ContextComponent/ContextComponent";

const LineofBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const categoryOptions = [
  { id: 1, name: " Accounting" },
  { id: 2, name: "Claims Handling" },
  { id: 3, name: "General Information" },
  { id: 4, name: "Policy Related" },
  { id: 5, name: "Premium Calculation Details" },
  { id: 6, name: "Reinsurance Related Questions" },
];

const ViewCountryDataComponent = () => {
  const countries = getNames();
  // const [questionList] = useContext(DataContext);

  //----------------state--variables---------------------------
  // const [onToggleData, setOnToggleData] = useState(false);
  const [onPopupMenu, setOnPopupMenu] = useState(false);
  const [onToggleCategory, setOnToggleCategory] = useState(false);
  const [onToggleCountry, setOnToggleCountry] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState([]);
  // State to hold the IDs of selected categories
  const [checkedCategories, setCheckedCategories] = useState([]);

  // A variable to check if all categories are selected
  const isAllCategoriesSelected =
    checkedCategories.length === categoryOptions.length;

  const isAllCountriesSelected = checkedCountries.length === countries.length;

  const onHandleCategory = () => {
    setOnToggleCategory(!onToggleCategory);
    setOnToggleCountry(false);
    window.onclick = (e) => {
      if (!e.target.closest(".view-small-input-container")) {
        setOnToggleCategory(false);
      }
    };
  };

  const onHandleCountry = () => {
    setOnToggleCountry(!onToggleCountry);
    setOnToggleCategory(false);
    window.onclick = (e) => {
      if (!e.target.closest(".view-small-input-container-2")) {
        setOnToggleCountry(false);
      }
    };
  };

  const onHandleRequest = () => {
    setOnPopupMenu(!onPopupMenu);
  };

  const onCancelRequest = () => {
    setOnPopupMenu(false);
    // setOnToggleData(false);
    setCheckedCategories([]);
    setCheckedCountries([]);
    setSelectedCategories([]);
  };

  // Handler for the "Select all" checkbox
  const handleSelectAllCategory = (e) => {
    if (e.target.checked) {
      const allCategoryIds = categoryOptions.map((option) => option.id);
      const allCategoryValue = categoryOptions.map((option) => option.name);
      setCheckedCategories(allCategoryIds);
      setSelectedCategories(allCategoryValue);
    } else {
      setCheckedCategories([]);
      setSelectedCategories([]);
    }
  };

  const handleSelectAllCountry = (e) => {
    if (e.target.checked) {
      const allCountries = countries.map((eachCountry) => eachCountry);
      setCheckedCountries(allCountries);
    } else {
      setCheckedCountries([]);
    }
  };

  const handleIndividualCountry = (e) => {
    const countryValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedCountries([...checkedCountries, countryValue]);
    } else {
      setCheckedCountries(
        checkedCountries.filter((option) => option !== countryValue)
      );
    }
  };

  // Handler for individual category checkboxes
  const handleIndividualCategory = (e) => {
    const categoryId = parseInt([e.target.value.split(",")[0]]);
    const categoryValue = e.target.value.split(",")[1];
    // const categoryId = parseInt(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedCategories([...checkedCategories, categoryId]);
      setSelectedCategories([...selectedCategories, categoryValue]);
    } else {
      setCheckedCategories(checkedCategories.filter((id) => id !== categoryId));
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryValue)
      );
    }
  };

  const onHandleSelectedDetails = () => {
    // TODO: Implement the logic to fetch and display the selected data
    toast.info("Data fetched successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    setOnPopupMenu(false);
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="view-content-container">
        <div className="view-country-data-title-contianer">
          <h1 className="view-header-title">View Country Data</h1>
          <button
            className="view-country-data-filter-btn"
            onClick={onHandleRequest}
          >
            <IoFilter className="view-filter-icon" />
            Filter
          </button>
        </div>
        {/* {on menu Popup} */}
        {onPopupMenu && (
          <div className="view-details-popup-menu">
            <div className="filter-options-container">
              <h2 className="view-filter-title">Select the Data</h2>
              <div className="view-data-container">
                {/* {Lob Selection} */}
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
                        <label className="selectall-option">
                          <input
                            type="checkbox"
                            className="selectall-checkbox-style"
                            checked={isAllCategoriesSelected}
                            onChange={handleSelectAllCategory}
                          />{" "}
                          Select all
                        </label>
                        {categoryOptions.map((option) => (
                          <label
                            key={option.id}
                            className="view-category-option-label"
                          >
                            <input
                              type="checkbox"
                              value={[option.id, option.name]}
                              checked={checkedCategories.includes(option.id)}
                              onChange={handleIndividualCategory}
                              className="view-input-option-checkbox"
                            />
                            {option.name}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Country Selection (no change) */}
                  <div className="view-small-input-container-2">
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
                        <label className="selectall-country-option">
                          <input
                            type="checkbox"
                            className="selectall-checkbox-style"
                            checked={isAllCountriesSelected}
                            onChange={handleSelectAllCountry}
                          />
                          Select all
                        </label>
                        {countries.map((option, index) => (
                          <label
                            key={index}
                            className="view-category-option-label"
                          >
                            <input
                              type="checkbox"
                              value={option}
                              className="view-input-option-checkbox"
                              checked={checkedCountries.includes(option)}
                              onChange={handleIndividualCountry}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* {buttons contianer} */}
                <div className="view-button-container">
                  <button
                    className="filter-submit-btn"
                    onClick={onHandleSelectedDetails}
                  >
                    Submit
                  </button>
                  <button
                    className="filter-cancel-btn"
                    onClick={onCancelRequest}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {/* {selected options info container} */}
              <div className="view-selected-data-container">
                <div className="view-data-contianer">
                  <label className="selected-data-cotnainer-label">
                    Selected Category
                  </label>
                  {isAllCategoriesSelected ? (
                    <ul className="view-selected-option-list-container">
                      {selectedCategories.map((eachOption) => (
                        <li
                          className="selected-option-list-style"
                          key={eachOption}
                        >
                          {eachOption}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="view-selected-option-list-container">
                      {selectedCategories.map((eachOption) => (
                        <li
                          className="selected-option-list-style"
                          key={eachOption}
                        >
                          {eachOption}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="view-data-contianer">
                  <label className="selected-data-cotnainer-label">
                    Selected Country
                  </label>
                  <ul className="view-selected-option-list-container">
                    {checkedCountries.map((eachCountry) => (
                      <li className="selected-option-list-style">
                        {eachCountry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="view-country-data-table-container">
          <table className="view-country-data-table">
            <thead>
              <tr className="view-country-data-table-header-row">
                <th className="view-country-data-table-header-row-data"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="view-country-data-table-description-row">
                <td className="view-country-data-table-description-row-data">
                  No data Found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination-style">
          <span className="pagination-content-new">Show entries</span>
          <select className="drop-down-selection">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <TfiArrowCircleLeft className="pagination-font-style" />
          <TfiArrowCircleRight className="pagination-font-style" />
          <span className="pagination-content">Page 1 of 1</span>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ViewCountryDataComponent;
