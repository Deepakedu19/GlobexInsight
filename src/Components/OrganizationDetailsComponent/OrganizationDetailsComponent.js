import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa6";
import { useState } from "react";

import "./index.css";

const OrganizationDetailsComponent = () => {
  const [addContainerToggle, setAddContainerToggle] = useState(false);
  const [searchContainerToggle, setSearchContainerToggle] = useState(false);
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="organization-container">
        <div className="organization-header-container">
          <h1 className="header-title">Organization Details</h1>
          <button
            className="add-btn"
            onClick={() => setAddContainerToggle(true)}
          >
            Add
          </button>
          <button
            className="search-btn"
            onClick={() => setSearchContainerToggle(!searchContainerToggle)}
          >
            Search
          </button>
        </div>
        {searchContainerToggle && (
          <div className="search-container">
            <div className="search-content-container">
              <label className="label-name">
                Organization Name{" "}
                <FaStarOfLife className="required-icon-style" />
              </label>
              <input type="text" className="text-input" />
            </div>
            <div className="search-content-container">
              <label className="label-name">
                City <FaStarOfLife className="required-icon-style" />
              </label>
              <input type="text" className="text-input" />
            </div>
            <button className="add-btn new-additional-btn ">search</button>
            <button className="search-btn new-additional-btn">clear</button>
          </div>
        )}
        <div className="organization-details-table-container">
          <table className="organization-table">
            <tr className="table-header-style">
              <th className="organization-style font-style">
                Organization Name
              </th>
              <th className="font-style place-style"> City</th>
              <th className="font-style place-style">Country</th>
              <th className="font-style btn-style">View/Edit</th>
              <th className="font-style btn-style">Delete</th>
            </tr>
            <tr className="table-content-style">
              <td className="organization-style font-style"></td>
              <td className="font-style place-style"></td>
              <td className="font-style place-style"></td>
              <td className="font-style btn-style"></td>
              <td className="font-style btn-style"></td>
            </tr>
          </table>
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
      </div>
      {/* Add Organization-container */}
      {addContainerToggle && (
        <div className="add-orgainization-contianer">
          <div className="add-orgainization-details-container">
            <div className="container-header">
              <h1 className="contianer-titles">Add Organization Details</h1>
              <IoCloseSharp
                className="close-btn"
                onClick={() => setAddContainerToggle(false)}
              />
            </div>
            <div className="container-row-alignment">
              <div className="container-data-alignment">
                <div className="details-container">
                  <label className="label-name">
                    Organization Name{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    Address <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    City <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    Status <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <div className="container-data-alignment">
                <div className="details-container">
                  <label className="label-name">
                    Country
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    Zip <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    Website <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="details-container">
                  <label className="label-name">
                    Comments <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button className="add-btn">Add</button>
              <button className="search-btn">Clear</button>
            </div>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default OrganizationDetailsComponent;
