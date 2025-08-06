import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { FaStarOfLife } from "react-icons/fa6";
import "./index.css";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import FooterComponent from "../FooterComponent/FooterComponent";

const UpcomingCountryComponent = () => {
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="upcoming-country-container">
        <h1 className="header-title">Add Upcoming Country</h1>
        <div className="questionnair-content-final-container">
          <div className="user-content-container">
            <label className="label-name">
              Line of Business
              <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              Country <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
        </div>
        <br />
        <div className="user-btn-container">
          <button className="add-btn user-additional-btn ">Submit</button>
          <button className="search-btn user-additional-btn">Clear</button>
        </div>
        <br />
        <div className="newsletter-table-container">
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
      <FooterComponent />
    </>
  );
};

export default UpcomingCountryComponent;
