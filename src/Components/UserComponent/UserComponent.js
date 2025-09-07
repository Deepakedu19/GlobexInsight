import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaStarOfLife } from "react-icons/fa6";
import { useState } from "react";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

const UserComponent = () => {
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [searchUserToggle, setSearchUserToggle] = useState(false);

  const onToggleAddUser = () => {
    setAddUserToggle(!addUserToggle);
    setSearchUserToggle(false);
    // window.onclick = (e) => {
    //   if (!e.target.closest(".add-btn")) {
    //     setAddUserToggle(false);
    //   }
    // };
  };

  const onToggleSearchUser = () => {
    setSearchUserToggle(!searchUserToggle);
    setAddUserToggle(false);
    // window.onclick = (e) => {
    //   if (!e.target.closest(".search-btn")) {
    //     setSearchUserToggle(false);
    //   }
    //};
  };

  const OnRegisterDetails = () => {
    toast.success("User Added Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="user-main-container">
        <div className="user-description-container">
          <div className="organization-header-container">
            <h1 className="header-title">User Registration</h1>
            <button className="add-btn" onClick={onToggleAddUser}>
              Add
            </button>
            <button className="search-btn" onClick={onToggleSearchUser}>
              Search
            </button>
          </div>
          {addUserToggle && (
            <div className="user-add-content-container ">
              <div className="user-add-content-detail-container">
                <h2 className="admin-user-header-title">
                  Add User
                  <IoCloseSharp
                    className="exit-icon"
                    onClick={() => {
                      setAddUserToggle(false);
                    }}
                  />
                </h2>
                <div className="user-content-main-container">
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      First Name{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Last Name{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Email{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                </div>
                <br />
                {/* Contianer - 2 */}
                <div className="user-content-main-container">
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Organization Name
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Account Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                </div>
                <br />
                {/*  Container -3 */}
                <div className="user-content-main-container">
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Address{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Phone{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      City <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                </div>
                <br />
                {/*  Container -4 */}
                <div className="user-content-main-container">
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Country{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Zip <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Status{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input type="text" className="user-text-input" />
                  </div>
                </div>
                <div className="checkbox-contianer">
                  <p className="para-label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="user-required-icon-style" />
                  </p>
                  <input type="checkbox" />
                  <label className="user-label-name">Cyber</label>
                  <input type="checkbox" />
                  <label className="user-label-name">D&O</label>
                  <input type="checkbox" />
                  <label className="user-label-name">General Liability</label>
                  <input type="checkbox" />
                  <label className="user-label-name">Marine</label>
                  <input type="checkbox" />
                  <label className="user-label-name">
                    Professional Indemnity
                  </label>
                  <input type="checkbox" />
                  <label className="user-label-name">Property</label>
                </div>
                <div className="admin-user-btn-container">
                  <button
                    className="add-btn user-additional-btn "
                    onClick={OnRegisterDetails}
                  >
                    Register
                  </button>
                  <button
                    className="search-btn user-additional-btn"
                    onClick={() => {
                      setAddUserToggle(false);
                    }}
                  >
                    Clear
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          )}

          {/* {search-container} */}
          {searchUserToggle && (
            <div>
              <div className="user-content-main-container">
                <div className="user-content-container">
                  <label className="label-name">
                    First Name <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Last Name <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Account Type{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <br />
              {/* second container */}
              <div className="user-content-main-container">
                <div className="user-content-container">
                  <label className="label-name">
                    User Status <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Organization Name{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="user-content-container">
                  <label className="label-name">
                    Email <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <br />
              {/* third Contianer */}
              <div className="user-content-final-container">
                <div className="user-content-container">
                  <label className="label-name">
                    User type <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <div className="user-btn-container">
                <button className="add-btn user-additional-btn ">Search</button>
                <button className="search-btn user-additional-btn">
                  Clear
                </button>
              </div>
              </div>
            </div>
          )}

          <div className="user-table-main-container">
            <table className="user-table">
              <tr className="user-table-header">
                <th className="user-header-font name-style">First Name</th>
                <th className="user-header-font name-style">Last Name</th>
                <th className="user-header-font email-style">Email</th>
                <th className="user-header-font org-style">Organization</th>
                <th className="user-header-font name-style">Account Type</th>
                <th className="user-header-font name-style">User Type</th>
                <th className="user-header-font LOB-style">LOB</th>
                <th className="user-header-font user-btn-style">Edit</th>
                <th className="user-header-font user-btn-style">Delete</th>
              </tr>
              <tr className="user-description-row">
                <td className=" name-style space-style">First Name</td>
                <td className=" name-style space-style">Last Name</td>
                <td className=" email-style space-style">Email</td>
                <td className=" org-style space-style">Organization</td>
                <td className=" name-style space-style">Account Type</td>
                <td className=" name-style space-style">User Type</td>
                <td className=" LOB-style space-style">LOB</td>
                <td className=" name-style space-style">Edit</td>
                <td className=" name-style space-style">Delete</td>
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

export default UserComponent;
