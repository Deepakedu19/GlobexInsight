import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { PiClockUserBold } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { BiRename } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { GiHomeGarage } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { LiaSatelliteDishSolid } from "react-icons/lia";
import { FaLock } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { useState, useContext } from "react";
import { DataContext } from "../../ContextComponent/ContextComponent";
import { FaStarOfLife } from "react-icons/fa";

const ClientUserProfileComponent = () => {
  const [onEditToggle, setOnEditToggle] = useState(false);
  const { onEditResetPassword, setOnEditResetPassword } =
    useContext(DataContext);
  return (
    <>
      <ClientHeaderComponent />
      <div className="client-user-profile-main-contianer">
        <div className="client-user-profile-container">
          {/* User profile details go here */}
          <div className="client-user-profile-cover-image">
            <div className="client-user-profile-overlay">
              <div className="client-user-profile-logo">
                <p className="client-user-profile-initials">JD</p>
              </div>
            </div>
          </div>
          <div className="client-user-profile-details">
            <h2 className="client-user-profile-name">John Doe</h2>
            <div className="user-contact-mini-details-container">
              <p className="client-user-profile-email">
                <CiMail className="client-profil-desc-icons" />
                johndoe@example.com
              </p>
              <p className="client-user-profile-email">
                <BsTelephone className="client-profil-desc-icons" />
                +91123456789
              </p>
              <p className="client-user-profile-email">
                <FaUserTag className="client-profil-desc-icons" />
                Active
              </p>
              <p className="client-user-profile-email">
                <PiClockUserBold className="client-profil-desc-icons" />
                Annual
              </p>
            </div>
          </div>
        </div>
        {/* {client personal info container} */}
        {!onEditToggle && (
          <div className="client-main-info-contianer">
            <div className="client-personal-info-contact-container">
              <div className="client-user-edit-btn">
                <h2 className="client-profil-header-title">Personal Info</h2>
                <FaEdit
                  className="client-edit-btn"
                  onClick={() => {
                    setOnEditToggle(true);
                  }}
                />
              </div>
              <div className="editable-info-container">
                <label className="editable-info-style">
                  <BiRename className="client-profil-desc-icons" /> Name
                  <span className="contact-value-label">John Doe</span>
                </label>
                <br />
                <label className="editable-info-style">
                  <FaPhoneAlt className="client-profil-desc-icons" /> Contact
                  <span className="contact-value-label">+1234556778</span>
                </label>
                <br />
                <br />
                <label className="editable-info-style">
                  <RiUserLocationFill className="client-profil-desc-icons" />{" "}
                  Address
                </label>
                <div className="location-contianer">
                  <label className="editable-info-style">
                    <GiHomeGarage className="client-profil-desc-perosnal-icons" />{" "}
                    Address
                    <span className="contact-value-label">Hno - 22-123</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <FaLocationDot className="client-profil-desc-perosnal-icons" />{" "}
                    City
                    <span className="contact-value-label">Bnglr</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <FaGlobe className="client-profil-desc-perosnal-icons" />{" "}
                    Country
                    <span className="contact-value-label">India</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <LiaSatelliteDishSolid className="client-profil-desc-perosnal-icons" />{" "}
                    Zip
                    <span className="contact-value-label">12345</span>
                  </label>
                </div>
                <div className="password-reset-container">
                  <button
                    className="reset-password-style"
                    onClick={() => {
                      setOnEditResetPassword(true);
                    }}
                  >
                    Reset password
                  </button>
                </div>
              </div>
            </div>
            {/* {client other info container} */}
            {!onEditResetPassword && (
              <div className="client-other-details-main-container">
                <div className="client-user-edit-btn">
                  <h2 className="client-profil-header-title">Other Info</h2>
                  <FaLock className="client-edit-btn" />
                </div>
                <div className="location-contianer">
                  <label className="editable-info-style">
                    <GiHomeGarage className="client-profil-desc-perosnal-icons" />{" "}
                    Organization Name
                    <span className="contact-value-label">CBSIT</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <FaLocationDot className="client-profil-desc-perosnal-icons" />{" "}
                    Account Type
                    <span className="contact-value-label">Basic</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <FaGlobe className="client-profil-desc-perosnal-icons" />{" "}
                    User Status
                    <span className="contact-value-label">Active</span>
                  </label>
                  <br />
                  <label className="editable-info-style">
                    <LiaSatelliteDishSolid className="client-profil-desc-perosnal-icons" />{" "}
                    User Type
                    <span className="contact-value-label">Annual User</span>
                  </label>
                  <br />
                  <label className=" lob-style">
                    <LiaSatelliteDishSolid className="client-profil-desc-perosnal-icons" />{" "}
                    Line of Business
                    <div className="client-profie-lob-style">
                      <span className="contact-value-label">
                        <IoIosCheckbox className="checkbox-style" />
                        Cyber
                      </span>
                      <span className="contact-value-label">
                        {" "}
                        <IoIosCheckbox className="checkbox-style" />
                        D&O
                      </span>
                      <span className="contact-value-label">
                        {" "}
                        <IoIosCheckbox className="checkbox-style" />
                        General Ability
                      </span>
                      <span className="contact-value-label">
                        {" "}
                        <IoIosCheckbox className="checkbox-style" />
                        Marine
                      </span>
                      <span className="contact-value-label">
                        {" "}
                        <IoIosCheckbox className="checkbox-style" />
                        Professional Indemnity
                      </span>
                      <span className="contact-value-label">
                        {" "}
                        <IoIosCheckbox className="checkbox-style" />
                        Propert{" "}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            )}
            {onEditResetPassword && (
              <div className="client-other-details-main-container">
                <h2 className="edit-header-title">Reset Password </h2>
                <div className="reset-password-container">
                  <div className="reset-password-detail-container">
                    <label className="edit-label-name">
                      Password <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <br />
                    <input className="reset-password-input-form" type="text" />
                  </div>
                  <br />
                  <div className="reset-password-detail-container">
                    <label className="edit-label-name">
                      Reset Password{" "}
                      <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <br />
                    <input className="reset-password-input-form" type="text" />
                  </div>
                  <br />
                  <div className="reset-password-detail-container">
                    <label className="edit-label-name">
                      Confirm Password{" "}
                      <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <br />
                    <input className="reset-password-input-form" type="text" />
                  </div>
                  <div className="editable-btn-contianer">
                    <button type="submit" class="submit-btn-password">
                      Submit
                    </button>
                    <button
                      type="button"
                      class="submit-btn-cancel"
                      onClick={() => {
                        setOnEditResetPassword(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {onEditToggle && (
          <div className="client-main-info-contianer">
            <div className="client-editable-details-container">
              <h2 className="edit-header-title">Edit Details</h2>
              <div className="editable-form-detail-contianer">
                <div className="editable-common-feild-contianer">
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      First Name <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="text" />
                  </div>
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Last Name <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="text" />
                  </div>
                </div>
                <br />
                {/* {Email and Phone number} */}
                <div className="editable-common-feild-contianer">
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Email <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="mail" />
                  </div>
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Phone Number <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="number" />
                  </div>
                </div>
                <br />
                {/* {Address and Country} */}
                <div className="editable-common-feild-contianer">
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Address <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="mail" />
                  </div>
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Country <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="text" />
                  </div>
                </div>
                {/* {City & pincode} */}
                <br />
                <div className="editable-common-feild-contianer">
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      City <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="mail" />
                  </div>
                  <div className="edit-name-container">
                    <label className="edit-label-name">
                      Zip <FaStarOfLife className="reqire-edit-icon" />
                    </label>
                    <input className="editable-input-form" type="text" />
                  </div>
                </div>
                <div className="editable-btn-contianer">
                  <button type="submit" class="submit-btn-primary">
                    Submit
                  </button>
                  <button
                    type="button"
                    class="cancel-btn-primary"
                    onClick={() => {
                      setOnEditToggle(false);
                      setOnEditResetPassword(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default ClientUserProfileComponent;
