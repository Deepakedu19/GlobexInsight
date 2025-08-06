import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { FaStarOfLife } from "react-icons/fa6";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";

const NewsReportComponent = () => {
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="newsletter-container">
        <h1 className="header-title">Newsletter</h1>
        <div className="newletter-content-container">
          <div>
            <label className="label-name">
              Latest Newsletter <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="file" />
          </div>
          <div>
            <label className="label-name">
              News Content <FaStarOfLife className="required-icon-style" />
            </label>
            <textarea rows="3" cols="70" className="textarea--style" />
          </div>
          <div className="newsletter-btn-container">
            <button className="add-btn user-additional-btn ">Save</button>
            <button className="search-btn user-additional-btn">Clear</button>
          </div>
        </div>
        {/* <div className="newsletter-btn-container">
          <button className="add-btn user-additional-btn ">Save</button>
          <button className="search-btn user-additional-btn">Clear</button>
        </div> */}
        <div className="newsletter-table-container">
          <table className="newsletter-table">
            <tr className="newsletter-table-header">
              <th className="font-style file-name-style">File Name</th>
              <th className="font-style file-name-style">Content</th>
              <th className="font-style">Delete</th>
            </tr>
            <tr className="newsletter-table-description">
              <td className="font-style file-name-style">File Name</td>
              <td className="font-style file-name-style">Content</td>
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

export default NewsReportComponent;
