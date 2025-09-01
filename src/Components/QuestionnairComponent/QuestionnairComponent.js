import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";

const QuestionnairComponent = () => {
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [searchUserToggle, setSearchUserToggle] = useState(false);

  const onToggleAddUser = () => {
    setAddUserToggle(!addUserToggle);
    setSearchUserToggle(false);
  };

  const onToggleSearchUser = () => {
    setSearchUserToggle(!searchUserToggle);
    setAddUserToggle(false);
  };
  return (
    <>
      <div>
        <DashboardHeaderComponent />
        <DashboardMinHeader />
        <div className="questionnair-container">
          <div className="organization-header-container">
            <h1 className="header-title">Questionnair</h1>

            <button className="add-btn" onClick={onToggleAddUser}>
              Add
            </button>
            <button className="search-btn" onClick={onToggleSearchUser}>
              Search
            </button>
          </div>
          {addUserToggle && (
            <div className="user-add-content-container">
              <div className="user-add-content-detail-container">
                <div className="add-user-header">
                  <h2 className="header-title">Add Question</h2>
                </div>
              <div className="user-content-main-container">
                <div className="user-content-container">
                  <label className="label-name">
                    Question Number{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Question <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Category <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <br />
              {/* Contianer - 2 */}
              <div className="questionnair-content-final-container">
                <div className="user-content-container">
                  <label className="label-name">
                    Question Type
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <br />

              <div className="user-btn-container">
                <button className="add-btn user-additional-btn ">Submit</button>
                <button className="search-btn user-additional-btn">
                  Clear
                </button>
              </div>
              </div>
            </div>
          )}
          {searchUserToggle && (
            <div className="user-add-content-container">
              <div className="user-add-content-detail-container">
                <div className="add-user-header">
                  <h2 className="header-title">Add Question</h2>
                </div>
              <div className="user-content-main-container">
                <div className="user-content-container">
                  <label className="label-name">
                    Question Type{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Category <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <br />

              <div className="user-btn-container">
                <button className="add-btn user-additional-btn ">
                  QSearch
                </button>
                <button className="search-btn user-additional-btn">
                  Clear
                </button>
              </div>
              </div>
            </div>
          )}
          <div className="questionnair-table-contianer">
            <table className="questionnair-table">
              <tr className="questionnair-row-header">
                <th className="questionnair-font-style s-no-style">Q Number</th>
                <th className="questionnair-font-style question-style">
                  Question
                </th>
                <th className="questionnair-font-style category-style">
                  Category
                </th>
                <th className="questionnair-font-style s.no-style">
                  Question Type
                </th>
                <th className="questionnair-font-style category-style">LOB</th>
                <th className="questionnair-font-style s.no-style">Edit </th>
                <th className="questionnair-font-style s.no-style">Delete</th>
              </tr>
              <tr className="questionnair-row-description">
                <td className="questionnair-font-style s-no-style">Q Number</td>
                <td className="questionnair-font-style question-style">
                  Question
                </td>
                <td className="questionnair-font-style category-style">
                  Category
                </td>
                <td className="questionnair-font-style s.no-style">
                  Question Type
                </td>
                <td className="questionnair-font-style category-style">LOB</td>
                <td className="questionnair-font-style s.no-style">Edit </td>
                <td className="questionnair-font-style s.no-style">Delete</td>
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
      </div>
      <FooterComponent />
    </>
  );
};

export default QuestionnairComponent;
