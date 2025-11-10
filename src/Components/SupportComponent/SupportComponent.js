import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoSearchOutline } from "react-icons/io5";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const SupportComponent = () => {
  const [isToggleFullScreen, setIsToggleFullScreen] = useState(false);
  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="subscription-container">
        <div className="support-header-component">
          <h2 className="subscrition-title">Support</h2>

          {/* drop-down-selection */}
          <div className="support-search-contanier">
            <MdOutlineZoomOutMap
              onClick={() => {
                setIsToggleFullScreen(true);
              }}
            />
          </div>
        </div>

        {/* support  Table */}
        <div className="support-table">
          <table className="new-support-table-style">
            <tr className="new-support-table-header-style">
              <th className="support-common-font-style subject-style ">
                Subject
              </th>
              <th className="support-common-font-style comment-style">
                Comment
              </th>
              <th className="support-common-font-style status-style">
                Status -
                <select className="status-drop-down">
                  <option selected disabled>
                    Select Status
                  </option>
                  <option>All</option>
                  <option>Open</option>
                  <option>In-Progress</option>
                  <option>Closed</option>
                </select>
              </th>
              <th className="support-common-font-style Date-style">
                Date Created
              </th>
              <th className="support-common-font-style Date-style">Edit</th>
            </tr>

            <tr className="support-desciption-row-style"></tr>
          </table>
        </div>

        {/* pagination  */}
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

      {/* Full Screen Table */}
      {isToggleFullScreen && (
        <div className="full-screen-table">
          <div className="full-screen-table-style">
            <table className="new-fullscreen-support-table-style">
              <tr className="new-support-table-header-style">
                <th className="support-common-font-style subject-style ">
                  Subject
                </th>
                <th className="support-common-font-style comment-style">
                  Comment
                </th>
                <th className="support-common-font-style status-style">
                  Status -
                  <select className="status-drop-down">
                    <option selected disabled></option>
                    <option>Open</option>
                    <option>In-Progress</option>
                    <option>Closed</option>
                  </select>
                </th>
                <th className="support-common-font-style Date-style">
                  Date Created
                </th>
                <th className="support-common-font-style Date-style">Edit</th>
              </tr>

              <tr className="support-desciption-row-style"></tr>
            </table>
          </div>
          {/* Full Screen pagination */}
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
                setIsToggleFullScreen(false);
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

export default SupportComponent;
