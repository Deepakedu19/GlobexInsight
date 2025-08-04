import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { useState } from "react";
import "./index.css";
import { BiSolidEdit } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoCaretBackCircle } from "react-icons/io5";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const SupportComponent = () => {
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="subscription-container">
        <div className="support-header-component">
          <h2 className="subscrition-title">Support</h2>

          <div className="search-contanier">
            <p className="content-style">Status</p>
            <select className="drop-down-ticket">
              <option disabled selected>
                Select
              </option>
              <option>Open</option>
              <option>In-Progress</option>
              <option>closed</option>
            </select>
            <button className="search-style">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        <div className="support-table">
          <table className="support-table-style">
            <tr className="support-table-header-style">
              <th className="common-font-style subject-style">Subject</th>
              <th className="common-font-style comment-style">Comment</th>
              <th className="common-font-style status-style">Status</th>
              <th className="common-font-style Date-style">Date Created</th>
              <th className="common-font-style edit-style">Edit</th>
            </tr>

            <tr className="support-desciption-row-style">
              <td className="table-header name-style"></td>
              <td className="table-header name-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header organization-style"></td>
              <td className="table-header edit-style font-style">
                <BiSolidEdit />
              </td>
            </tr>
          </table>
          <div className="table-footer">
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

export default SupportComponent;
