import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { getNames, getCode } from "country-list";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

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
  const [onToggleCategory, setOnToggleCategory] = useState(true);
  const [onSelectCategories, setOnSelectCategories] = useState([]);

  const isAllCategoriesSelected =
    onSelectCategories.length === categoryOptions.length;

  const countries = getNames();
  const onhandleCategory = () => {
    setOnToggleCategory(false);
  };

  const onhandleAllSelect = (e) => {
    if (e.target.checked) {
      const allCategories = categoryOptions.map(
        (eachOption) => eachOption.name
      );

      setOnSelectCategories(allCategories);

      console.log(categoryOptions.length === onSelectCategories.length);
    } else {
      setOnSelectCategories([]);
      // console.log(categoryOptions.length === onToggleCategories.length);
    }
  };

  const handleIndividualCategory = (e) => {
    const isChecked = e.target.checked;
    console.log(e.target.value);
    console.log(isChecked);
    if (isChecked) {
      setOnSelectCategories([...onSelectCategories, e.target.value]);
    } else {
      setOnSelectCategories(
        onSelectCategories.filter((value) => value !== e.target.value)
      );
    }
  };

  return (
    <div
    // onClick={() => {
    //   setOnToggleCategory(false);
    // }}
    >
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="add-country-mother-container">
        <div className="add-country-contianer ">
          <h1 className="add-header-title">Add Country</h1>
          <div className="add-country-details-contianer">
            <div className="details-container">
              {/* <lable className="add-country-label-name">Country</lable> */}
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
              {/* <label className="add-country-label-name">Line of Business</label> */}
              <select className="country-option-container">
                <option disabled selected>
                  Select Line of Business
                </option>
                {LineofBusinessOptions.map((eachOption) => (
                  <option key={eachOption.id}>{eachOption.name}</option>
                ))}
              </select>
            </div>

            {/* {categoryDropDown} */}

            <div className="details-container">
              <p className="add-category-lable-name" onClick={onhandleCategory}>
                Select Category Name
                <FaAngleDown />
              </p>
            </div>
            {!onToggleCategory && (
              <div className="add-category-dropdown-options">
                <label className="add-category-select-all-options-style">
                  {" "}
                  <input
                    type="checkbox"
                    className="checkbox-style"
                    onChange={onhandleAllSelect}
                    checked={isAllCategoriesSelected}
                  />
                  Select All
                </label>
                {categoryOptions.map((eachOption) => (
                  <label
                    className="add-category-dropdown-lable"
                    key={eachOption.id}
                  >
                    <input
                      type="checkbox"
                      className="checkbox-style"
                      checked={onSelectCategories.includes(eachOption.name)}
                      onChange={handleIndividualCategory}
                      value={eachOption.name}
                    />{" "}
                    {eachOption.name}
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="adduser-btn-container ">
            <button className="submit-btn ">Submit</button>
            <button className="clear-btn  ">clear</button>
          </div>
        </div>
        <div
          className="add-country-details-main-container"
          onClick={() => {
            setOnToggleCategory(true);
          }}
        ></div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AddCountryDataComponent;
