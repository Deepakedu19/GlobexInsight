import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaStarOfLife } from "react-icons/fa6";
import { useState, useEffect } from "react";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const userInitialDetails = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    organizationName: "Globex Corporation",
    accountType: "Admin",
    userType: "Employee",
    address: "123 Main St",
    phone: "555-1234",
    city: "Metropolis",
    country: "USA",
    zip: "12345",
    userStatus: "Active",
    lineOfBusiness: ["Cyber", "D&O"],
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    organizationName: "Initech",
    accountType: "User",
    userType: "Contractor",
    address: "456 Elm St",
    phone: "555-5678",
    city: "Smallville",
    country: "USA",
    zip: "67890",
    userStatus: "Inactive",
    lineOfBusiness: ["Professional Indemnity", "Property"],
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    organizationName: "Acme Corp",
    accountType: "User",
    userType: "Employee",
    address: "789 Oak St",
    phone: "555-9012",
    city: "Gotham",
    country: "USA",
    zip: "13579",
    userStatus: "Active",
    lineOfBusiness: ["General Liability", "Marine"],
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    email: "bob.brown@example.com",
    organizationName: "Umbrella Corp",
    accountType: "User",
    userType: "Employee",
    address: "321 Pine St",
    phone: "555-3456",
    city: "Raccoon City",
    country: "USA",
    zip: "24680",
    userStatus: "Active",
    lineOfBusiness: ["Cyber", "D&O"],
  },
];

const UserComponent = () => {
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [searchUserToggle, setSearchUserToggle] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [userType, setUserType] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [lineOfBusiness, setLineOfBusiness] = useState([]);
  const [userList, setUserList] = useState([]);
  const [editUserToggle, setEditUserToggle] = useState(false);

  // on Toggle Add User menu
  const onToggleAddUser = () => {
    setAddUserToggle(!addUserToggle);
    setSearchUserToggle(false);
    // window.onclick = (e) => {
    //   if (!e.target.closest(".add-btn")) {
    //     setAddUserToggle(false);
    //   }
    // };
  };

  // on Toggle  Edit User Menu
  const onEditHandler = (userId) => {
    setEditUserToggle(true);
    const userToEdit = userList.find((user) => user.id === userId);
    if (userToEdit) {
      setFirstName(userToEdit.firstName);
      setLastName(userToEdit.lastName);
      setEmail(userToEdit.email);
      setOrganizationName(userToEdit.organizationName);
      setAccountType(userToEdit.accountType);
      setUserType(userToEdit.userType);
      setAddress(userToEdit.address);
      setPhone(userToEdit.phone);
      setCity(userToEdit.city);
      setCountry(userToEdit.country);
      setZip(userToEdit.zip);
      setUserStatus(userToEdit.userStatus);
      setLineOfBusiness(userToEdit.lineOfBusiness);
    }
  };

  // on Toggle Search User menu
  const onToggleSearchUser = () => {
    setSearchUserToggle(!searchUserToggle);
    setAddUserToggle(false);
    // window.onclick = (e) => {
    //   if (!e.target.closest(".search-btn")) {
    //     setSearchUserToggle(false);
    //   }
    //};
  };

  useEffect(() => {
    setUserList(userInitialDetails);
  }, []);

  const OnRegisterDetails = () => {
    const userDetails = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      organizationName,
      accountType,
      userType,
      address,
      phone,
      city,
      country,
      zip,
      userStatus,
      lineOfBusiness,
    };
    console.log(userDetails);
    setUserList([...userList, userDetails]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setOrganizationName("");
    setAccountType("");
    setUserType("");
    setAddress("");
    setPhone("");
    setCity("");
    setCountry("");
    setZip("");
    setUserStatus("");
    setLineOfBusiness([]);

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
                    <input
                      type="text"
                      className="user-text-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Last Name{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Email{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Account Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Phone{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="tel"
                      className="user-text-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      City <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Zip <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Status{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkbox-contianer">
                  <p className="para-label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="user-required-icon-style" />
                  </p>
                  <input type="checkbox" value="Cyber" />
                  <label className="user-label-name">Cyber</label>
                  <input type="checkbox" value="D&O" />
                  <label className="user-label-name">D&O</label>
                  <input type="checkbox" value="General Liability" />
                  <label className="user-label-name">General Liability</label>
                  <input type="checkbox" value="Marine" />
                  <label className="user-label-name">Marine</label>
                  <input type="checkbox" value="Professional Indemnity" />
                  <label className="user-label-name">
                    Professional Indemnity
                  </label>
                  <input type="checkbox" value="Property" />
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

          {editUserToggle && (
            <div className="user-add-content-container ">
              <div className="user-add-content-detail-container">
                <h2 className="admin-user-header-title">
                  Edit User
                  <IoCloseSharp
                    className="exit-icon"
                    onClick={() => {
                      setEditUserToggle(false);
                    }}
                  />
                </h2>
                <div className="user-content-main-container">
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      First Name{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Last Name{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Email{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Account Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Type{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Phone{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="tel"
                      className="user-text-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      City <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
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
                    <input
                      type="text"
                      className="user-text-input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      Zip <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="admin-user-content-container">
                    <label className="user-label-name">
                      User Status{" "}
                      <FaStarOfLife className="user-required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="user-text-input"
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkbox-contianer">
                  <p className="para-label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="user-required-icon-style" />
                  </p>
                  <input
                    type="checkbox"
                    checked={lineOfBusiness.cyber}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        cyber: e.target.checked,
                      })
                    }
                  />
                  <label className="user-label-name">Cyber</label>
                  <input
                    type="checkbox"
                    checked={lineOfBusiness.do}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        do: e.target.checked,
                      })
                    }
                  />
                  <label className="user-label-name">D&O</label>
                  <input
                    type="checkbox"
                    checked={lineOfBusiness.generalLiability}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        generalLiability: e.target.checked,
                      })
                    }
                  />
                  <label className="user-label-name">General Liability</label>
                  <input
                    type="checkbox"
                    checked={lineOfBusiness.marine}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        marine: e.target.checked,
                      })
                    }
                  />
                  <label className="user-label-name">Marine</label>
                  <input
                    type="checkbox"
                    checked={lineOfBusiness.professionalIndemnity}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        professionalIndemnity: e.target.checked,
                      })
                    }
                  />
                  <label className="user-label-name">
                    Professional Indemnity
                  </label>

                  <input
                    type="checkbox"
                    checked={lineOfBusiness.property}
                    onChange={(e) =>
                      setLineOfBusiness({
                        ...lineOfBusiness,
                        property: e.target.checked,
                      })
                    }
                  />
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
            <div className="user-add-content-container">
              <div className="user-search-content-detail-container">
                <h2 className="admin-search-user-header-title">
                  Search User
                  <IoCloseSharp
                    className="exit-icon"
                    onClick={() => {
                      setSearchUserToggle(false);
                    }}
                  />
                </h2>
                <div className="admin-search-content-details-contianer">
                  <div className="user-content-main-container">
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        First Name{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        Last Name{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                  </div>
                  <br />
                  {/* {Container-2} */}
                  <div className="user-content-main-container">
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        Account Type{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        User Status{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                  </div>

                  <br />
                  {/*  container - 3*/}
                  <div className="user-content-main-container">
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        Organization Name{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        Email <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                  </div>
                  <br />
                  {/* final Contianer */}
                  <div className="admin-user-content-main-final-container">
                    <div className="admin-user-content-container">
                      <label className="user-label-name">
                        User type{" "}
                        <FaStarOfLife className="required-icon-style" />
                      </label>
                      <input type="text" className="text-input" />
                    </div>
                  </div>
                </div>
                <div className="admin-user-btn-container">
                  <button className="add-btn user-additional-btn ">
                    Search
                  </button>
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
              {userList.map((eachUser, index) => (
                <tr className="user-description-row" key={index}>
                  <td className="name-style space-style">
                    {eachUser.firstName}
                  </td>
                  <td className="name-style space-style">
                    {eachUser.lastName}
                  </td>
                  <td className="email-style space-style">{eachUser.email}</td>
                  <td className="org-style space-style">
                    {eachUser.organizationName}
                  </td>
                  <td className="name-style space-style">
                    {eachUser.accountType}
                  </td>
                  <td className="name-style space-style">
                    {eachUser.userType}
                  </td>
                  <td className="LOB-style space-style">
                    {eachUser.lineOfBusiness.join(", ")}
                  </td>
                  <td className="name-style space-style">
                    <MdEditSquare
                      className="user-edit-icon"
                      onClick={() => onEditHandler(eachUser.id)}
                    />
                  </td>
                  <td className="name-style space-style">
                    <AiFillDelete className="user-edit-icon" />
                  </td>
                </tr>
              ))}
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
      </div>
      <FooterComponent />
    </>
  );
};

export default UserComponent;
