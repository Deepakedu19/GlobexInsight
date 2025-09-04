import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { BiRename } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";

import { MdContactPage } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import FooterComponent from "../FooterComponent/FooterComponent";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";
import { MdLocationCity } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { MdPushPin } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdPrivacyTip } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const UserProfileComponent = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  // State to manage editing mode for first and last names
  const [address, setAddress] = useState("123 Main St");
  const [city, setCity] = useState("Anytown");
  const [country, setCountry] = useState("USA");
  const [zip, setZip] = useState("12345");
  const [phone, setPhone] = useState("123-456-7890");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingCity, setIsEditingCity] = useState(false);
  const [isEditingCountry, setIsEditingCountry] = useState(false);
  const [isEditingZip, setIsEditingZip] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="user-profile-container">
        <div>
          <h1 className="user-profile-title">User Profile</h1>
        </div>
        <div className="user-content-container">
          <div className="user-profile-details">
            <h2 className="user-profile-name">
              {firstName.toUpperCase().charAt(0)}
              {lastName.toUpperCase().charAt(0)}
            </h2>

            <p className="user-profile-fullname">
              {firstName} {lastName}
            </p>
            <p className="user-profile-email">john.doe@example.com</p>
          </div>
          <div className="user-details-container">
            <div className="editable-containers">
              <div className="personal-detail-name-container">
                <p className="personal-detail-name">
                  <div>
                    <MdContactPage className="address-icon" />
                    <span className="profil-name-label">First Name</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingFirstName ? (
                      <input
                        type="text"
                        value={firstName}
                        className="personal-detail-input-container"
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={() => setIsEditingFirstName(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingFirstName(false);
                          }
                        }}
                      />
                    ) : (
                      <span className="personal-detail-value">
                        {firstName}{" "}
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingFirstName(true);
                          }}
                        />
                      </span>
                    )}
                  </span>
                </p>
                <p className="personal-detail-name">
                  <div>
                    <BiRename className="address-icon" />
                    <span className="profil-name-label">Last Name</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingLastName ? (
                      <input
                        type="text"
                        value={lastName}
                        className="personal-detail-input-container"
                        onChange={(e) => setLastName(e.target.value)}
                        onBlur={() => setIsEditingLastName(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingLastName(false);
                          }
                        }}
                      />
                    ) : (
                      <span className="personal-detail-value">
                        {lastName}{" "}
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingLastName(true);
                          }}
                        />
                      </span>
                    )}
                  </span>
                </p>
              </div>
              <div className="personal-detail-address-container">
                <p className="personal-detail-name">
                  <div className="detail-icon-container">
                    <AiFillPhone className="address-icon" />
                    <span className="profil-name-label">Contact</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingPhone ? (
                      <input
                        type="text"
                        value={phone}
                        className="personal-detail-input-container"
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={() => setIsEditingPhone(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingPhone(false);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <span>{phone}</span>
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingPhone(true);
                          }}
                        />
                      </>
                    )}
                  </span>
                </p>
                {/* {address} */}
                <p className="personal-detail-name">
                  <div className="detail-icon-container">
                    <IoIosPin className="address-icon-specific" />
                    <span className="address-profil-name-label">Address</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingAddress ? (
                      <input
                        type="text"
                        value={address}
                        className="personal-detail-input-container"
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={() => setIsEditingAddress(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingAddress(false);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <span className="address-value">
                          {address}
                          <FaEdit
                            className="profil-edit-icon"
                            onClick={() => {
                              setIsEditingAddress(true);
                            }}
                          />
                        </span>
                      </>
                    )}
                  </span>
                </p>
                {/* city */}
                <p className="personal-detail-name">
                  <div className="detail-icon-container">
                    <MdLocationCity className="address-icon" />
                    <span className="profil-name-label">City</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingCity ? (
                      <input
                        type="text"
                        value={city}
                        className="personal-detail-input-container"
                        onChange={(e) => setCity(e.target.value)}
                        onBlur={() => setIsEditingCity(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingCity(false);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <span>{city}</span>
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingCity(true);
                          }}
                        />
                      </>
                    )}
                  </span>
                </p>
                {/* country */}
                <p className="personal-detail-name">
                  <div className="detail-icon-container">
                    <BiWorld className="address-icon" />
                    <span className="profil-name-label">Country</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingCountry ? (
                      <input
                        type="text"
                        value={country}
                        className="personal-detail-input-container"
                        onChange={(e) => setCountry(e.target.value)}
                        onBlur={() => setIsEditingCountry(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingCountry(false);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <span>{country}</span>
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingCountry(true);
                          }}
                        />
                      </>
                    )}
                  </span>
                </p>
                {/* {Zip} */}
                <p className="personal-detail-name">
                  <div className="detail-icon-container">
                    <MdPushPin className="address-icon" />
                    <span className="profil-name-label">Zip</span>
                  </div>
                  <span className="personal-detail-value">
                    {isEditingZip ? (
                      <input
                        type="text"
                        value={zip}
                        className="personal-detail-input-container"
                        onChange={(e) => setZip(e.target.value)}
                        onBlur={() => setIsEditingZip(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setIsEditingZip(false);
                          }
                        }}
                      />
                    ) : (
                      <>
                        <span>{zip}</span>
                        <FaEdit
                          className="profil-edit-icon"
                          onClick={() => {
                            setIsEditingZip(true);
                          }}
                        />
                      </>
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div className="personal-detail-container-2">
              <div className="personal-detail-other-container">
                <p className="personal-detail-name">
                  <MdMapsHomeWork className="address-icon" />
                  <span>Other Details</span>
                </p>
                <div className="personal-detail-organization-container">
                  <label className="label-detail-name">
                    <LiaIndustrySolid className="other-details-logo-style" />
                    Organization Name
                  </label>
                  <span className="other-personal-detail-value">
                    Globex Corporation
                  </span>
                </div>
                <div className="personal-detail-organization-container">
                  <label className="label-detail-name">
                    {" "}
                    <MdPrivacyTip className="other-details-logo-style" />
                    Account Type
                  </label>
                  <span className="other-personal-detail-value">Premium</span>
                </div>
                <div className="personal-detail-organization-container">
                  <label className="label-detail-name">
                    <FaUserAlt className="other-details-logo-style" /> Type
                  </label>
                  <span className="other-personal-detail-value">Admin</span>
                </div>
                <div className="lob-personal-detail-organization-container">
                  <label className="label-detail-name">
                    <MdBusinessCenter className="other-details-logo-style" />
                    Line of Business
                  </label>
                  <span className="other-personal-detail-value">
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      Cyber
                    </li>
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      D&O
                    </li>
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      General Liability
                    </li>
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      Marine
                    </li>
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      Professional Indemnity
                    </li>
                    <li className="other-personal-detail-item">
                      <IoIosCheckbox className="checkbox-icon" />
                      Property
                    </li>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default UserProfileComponent;
