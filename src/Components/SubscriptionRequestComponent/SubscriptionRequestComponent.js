import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

import { BiSolidEdit } from "react-icons/bi";

import "./index.css";

const SubscriptionRequestComponent = () => {
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="subscription-container">
        <h2 className="subscrition-title">Trail Subscription</h2>
        {/* <div className="pagination-container">
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
        </div> */}
        <div className="subscription-table">
          <table className="table-style">
            <tr className="header-row-style">
              <th className="table-header name-style">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header organization-style">Organization</th>
              <th className="table-header request-style">Request Type</th>
              <th className="table-header edit-style">Edit</th>
              <th className="table-header edit-style">Delete</th>
            </tr>

            <tr className="desciption-row-style">
              <td className="table-header name-style"></td>
              <td className="table-header name-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header request-style"></td>
              <td className="table-header edit-style font-style">
                <BiSolidEdit />
              </td>
              <td className="table-header edit-style font-style-2">
                <RiDeleteBin5Line />
              </td>
            </tr>
            <tr className="desciption-row-style">
              <td className="table-header name-style"></td>
              <td className="table-header name-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header request-style"></td>
              <td className="table-header edit-style font-style">
                {" "}
                <BiSolidEdit />
              </td>
              <td className="table-header edit-style font-style-2">
                <RiDeleteBin5Line />
              </td>
            </tr>
            <tr className="desciption-row-style">
              <td className="table-header name-style"></td>
              <td className="table-header name-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header request-style"></td>
              <td className="table-header edit-style font-style">
                {" "}
                <BiSolidEdit />
              </td>
              <td className="table-header edit-style font-style-2">
                <RiDeleteBin5Line />
              </td>
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

export default SubscriptionRequestComponent;
