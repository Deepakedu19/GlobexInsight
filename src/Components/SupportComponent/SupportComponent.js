import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { useState } from "react";
import "./index.css";
import { BiSolidEdit } from "react-icons/bi";

const SupportComponent = () => {
  const [onToggleContainer, setOnToggleContainer] = useState(false);

  const onSearchContainer = () => {
    setOnToggleContainer(!onToggleContainer);
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="subscription-container">
        <div className="support-header-component">
          <h2 className="subscrition-title">Support</h2>
          <button className="btn-search-ticket" onClick={onSearchContainer}>
            Search Ticket
          </button>
        </div>
        {onToggleContainer && (
          <div>
            <p className="content-style">Status</p>
            <select className="drop-down-ticket">
              <option disabled selected>
                Select
              </option>
              <option>Open</option>
              <option>In-Progress</option>
              <option>closed</option>
            </select>
            <button className="btn-search-ticket search-style">Search</button>
          </div>
        )}

        <div className="pagination-container addition-style-container">
          <label id="pagination-element" className="label-style">
            Show
          </label>
          <select className="drop-down-style" htmlFor="pagination-element">
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>150</option>
          </select>
          <span className="label-style">entries</span>
          <span className="label-style">Showing:1 to 1 of 1</span>
          <button className="btn-pagination-style">First</button>
          <button className="btn-pagination-style">Previous</button>
          <label className="index-page-style">1</label>
          <button className="btn-pagination-style">Next</button>
          <button className="btn-pagination-style">Last</button>
        </div>
        <div className="subscription-table">
          <table className="table-style">
            <tr className="table-header-style">
              <th className="common-font-style subject-style">Subject</th>
              <th className="common-font-style comment-style">Comment</th>
              <th className="common-font-style status-style">Status</th>
              <th className="common-font-style Date-style">Date Created</th>
              <th className="common-font-style edit-style">Edit</th>
            </tr>

            <tr className="desciption-row-style">
              <td className="table-header name-style"></td>
              <td className="table-header name-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header edit-style font-style">
                <BiSolidEdit />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default SupportComponent;
