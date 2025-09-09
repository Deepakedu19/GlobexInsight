import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";

const OrganizationDetailsComponent = () => {
  const [addContainerToggle, setAddContainerToggle] = useState(false); // to toggle add menu
  const [isDetailsLoaded, setIsDetailsLoaded] = useState(false);

  const onHandleSubmitOrganizationDetails = () => {
    setAddContainerToggle(!addContainerToggle);
  };

  const onAddOrganizationDetails = () => {
    toast.success("Successfully Added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setIsDetailsLoaded(true);
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="organization-container">
        <div className="organization-header-container ">
          <h1 className="header-title">Organization Details</h1>
          <button
            className="add-btn-content"
            onClick={onHandleSubmitOrganizationDetails}
          >
            <MdOutlinePlaylistAdd className="add-icon" />
            Add
          </button>
          {/* {Search Container} */}
          <div className="search-container ">
            <div className="search-content-container">
              {/* <label className="organization-label-name">
                Organization Name{" "}
                <FaStarOfLife className="required-icon-style" />
              </label> */}
              <input
                type="text"
                className="text-input"
                placeholder="Organization Name"
              />
            </div>
            <div className="search-content-container">
              {/* <label className="organization-label-name">
                City <FaStarOfLife className="required-icon-style" />
              </label> */}
              <input type="text" className="text-input" placeholder="City" />
            </div>
            <button className="add-btn new-additional-btn ">search</button>
            <button className="search-btn new-additional-btn">clear</button>
          </div>
        </div>

        {/* {Table Contianer} */}

        <div className="organization-details-table-container">
          <table className="organization-table">
            <thead className="organization-table-head">
              <tr className="organization-table-header-style ">
                <th className="organization-style font-style">
                  Organization Name
                </th>
                <th className="font-style place-style"> City</th>
                <th className="font-style place-style">Country</th>
                <th className="font-style btn-style">View/Edit</th>
                <th className="font-style btn-style">Delete</th>
              </tr>
            </thead>
            <tbody className="organization-table-body">
              <tr className="table-content-style">
                <td className="organization-style font-style">1</td>
                <td className="font-style place-style">....</td>
                <td className="font-style place-style">.....</td>
                <td className="font-style btn-style">3333</td>
                <td className="font-style btn-style">33333333</td>
              </tr>
            </tbody>
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
      {/* Add Organization-container */}
      {addContainerToggle && (
        <div className="add-orgainization-contianer">
          <div className="add-orgainization-details-container">
            <h2 className="contianer-titles">
              Add Organization Details{" "}
              <IoCloseSharp
                className="close-btn"
                onClick={() => setAddContainerToggle(false)}
              />
            </h2>

            <div className="container-row-alignment">
              <div className="container-data-alignment">
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Organization Name{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Address <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    City <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Status <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
              <div className="container-data-alignment">
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Country
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Zip <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Website <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Comments <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
              </div>
            </div>
            <div className="organization-btn-container">
              <button className="add-btn" onClick={onAddOrganizationDetails}>
                Add
              </button>

              <button className="search-btn">Clear</button>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default OrganizationDetailsComponent;
