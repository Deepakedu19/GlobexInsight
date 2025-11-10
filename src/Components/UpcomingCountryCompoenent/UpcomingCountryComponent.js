import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { FaStarOfLife } from "react-icons/fa6";
import "./index.css";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import FooterComponent from "../FooterComponent/FooterComponent";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useState } from "react";

const LineofBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const UpcomingCountryComponent = () => {
  const [onToggleFullScreenTable, SetOnToggleFullScreenTable] = useState(false);
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="upcoming-country-container ">
        <div className="upcoming-country-title-layout">
          <h1 className="header-title">Add Upcoming Country</h1>
          <div className="questionnair-content-final-container">
            <div className="upcoming-content-container">
              {/* <label className="upcomming-country-label-name">
                Line of Business
                <FaStarOfLife className="required-icon-style" />
              </label> */}
              <select className="upcoming-country-lob-dropdown">
                <option disabled selected>
                  select Line of Business
                </option>
                {LineofBusinessOptions.map((eachOption) => (
                  <option key={eachOption.id}>{eachOption.name}</option>
                ))}
              </select>
            </div>
            <div className="upcoming-content-container">
              {/* <label className="upcomming-country-label-name">
                Country <FaStarOfLife className="required-icon-style" />
              </label> */}
              <select className="upcoming-country-lob-dropdown">
                <option disabled selected>
                  select Country
                </option>
                {LineofBusinessOptions.map((eachOption) => (
                  <option key={eachOption.id}>{eachOption.name}</option>
                ))}
              </select>
            </div>
            <div className="upcoming-country-btn-container">
              <button className="add-btn user-additional-btn ">Submit</button>
              <button className="search-btn user-additional-btn">Clear</button>
            </div>
            <div
              className="full-screen-container"
              onClick={() => SetOnToggleFullScreenTable(true)}
            >
              <MdOutlineZoomOutMap />
            </div>
          </div>
        </div>
        <div className="newsletter-table-container">
          <table className="newsletter-table">
            <tr className="newsletter-table-header">
              <th className="font-style file-name-style">Line of Business</th>
              <th className="font-style file-name-style">Country Name</th>
              <td className="font-style file-delete-icon">Delete</td>
            </tr>
            <tr className="newsletter-table-description">
              <td className="font-style file-name-style">Line of Business</td>
              <td className="font-style file-name-style">Country Name</td>
              <td className="font-style file-delete-icon">Delete</td>
            </tr>
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
      {onToggleFullScreenTable && (
        <div className="LOB-full-sceen-table-view-container">
          <div className="newsletter-fullscreen-table-container">
            <table className="newsletter-table">
              <tr className="newsletter-table-header">
                <th className="font-style file-name-style">Line of Business</th>
                <th className="font-style file-name-style">Country Name</th>
                <th className="font-style">Delete</th>
              </tr>
              <tr className="newsletter-table-description">
                <td className="font-style file-name-style">Line of Business</td>
                <td className="font-style file-name-style">Country Name</td>
                <td className="font-style">Delete</td>
              </tr>
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
            <div
              className="Zoom-content"
              onClick={() => {
                SetOnToggleFullScreenTable(false);
              }}
            >
              <AiOutlineFullscreenExit />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingCountryComponent;
