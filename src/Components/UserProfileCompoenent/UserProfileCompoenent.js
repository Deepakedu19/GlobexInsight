import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { FaStarOfLife } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import "./index.css";
import FooterComponent from "../FooterComponent/FooterComponent";

const UserProfileCompoenent = () => {
  return (
    <div>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="my-profile-contianer">
        <h1 className="header-title">User Profile</h1>

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
              Email <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
        </div>
        <br />
        {/* container-2 */}
        <div className="user-content-main-container">
          <div className="user-content-container">
            <label className="label-name">
              Organization Name <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              Account Type <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              User Type <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
        </div>
        <br />
        {/* container-3 */}
        <div className="user-content-main-container">
          <div className="user-content-container">
            <label className="label-name">
              Address <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              Phone <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              City <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
        </div>
        <br />
        {/*  Container -4 */}
        <div className="user-content-main-container">
          <div className="user-content-container">
            <label className="label-name">
              Country <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              Zip <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
          <div className="user-content-container">
            <label className="label-name">
              User Status <FaStarOfLife className="required-icon-style" />
            </label>
            <input type="text" className="text-input" />
          </div>
        </div>
        <div className="checkbox-contianer">
          <p>
            Line of Business <FaStarOfLife className="required-icon-style" />
          </p>
          <label className="label-style">
            <FaCheckSquare className="checkbox-container" />
            Cyber
          </label>

          <label className="label-style">
            <FaCheckSquare className="checkbox-container" /> D&O
          </label>

          <label className="label-style">
            <FaCheckSquare className="checkbox-container" /> General Liability
          </label>

          <label className="label-style">
            <FaCheckSquare className="checkbox-container" />
            Marine
          </label>

          <label className="label-style">
            {" "}
            <FaCheckSquare className="checkbox-container" />
            Professional Indemnity
          </label>

          <label className="label-style">
            {" "}
            <FaCheckSquare className="checkbox-container" />
            Property
          </label>
        </div>
        <div className="user-btn-container">
          <button className="add-btn user-additional-btn ">Edit</button>
          <button className="search-btn user-additional-btn">Clear</button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default UserProfileCompoenent;
