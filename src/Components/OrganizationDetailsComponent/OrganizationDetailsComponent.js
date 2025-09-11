import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

const referenceDetails = [
  {
    id: 1,
    organizationName: "ABC Corp",
    address: "123 Main St",
    city: "New York",
    country: "USA",
    zip: "10001",
    website: "www.abccorp.com",
    comments: "Leading company in tech",
    status: "Active",
  },
  {
    id: 2,

    organizationName: "XYZ Ltd",
    address: "456 Elm St",
    city: "Los Angeles",
    country: "USA",
    zip: "90001",
    website: "www.xyzltd.com",
    comments: "Innovative solutions provider",
    status: "Inactive",
  },
  {
    id: 3,
    organizationName: "Tech Solutions",
    address: "789 Oak St",
    city: "Chicago",
    country: "USA",
    zip: "60601",
    website: "www.techsolutions.com",
    comments: "IT services and consulting",
    status: "Active",
  },
  {
    id: 4,
    organizationName: "Global Enterprises",
    address: "321 Pine St",
    city: "Houston",
    country: "USA",
    zip: "77001",
    website: "www.globalenterprises.com",
    comments: "Multinational corporation",
    status: "Active",
  },
];

const OrganizationDetailsComponent = () => {
  const [addContainerToggle, setAddContainerToggle] = useState(false); // to toggle add menu
  const [isOrganisationId, setIsOrganisationId] = useState();
  const [organizationDetailsList, setOrganizationDetailsList] = useState([]);
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState("");
  const [onEditDetails, setOnEditDetails] = useState(false);

  useEffect(() => {
    // Load initial data from referenceDetails
    setOrganizationDetailsList(referenceDetails);
  }, []);
  // To toggle add organization details container
  const onHandleSubmitOrganizationDetails = () => {
    setAddContainerToggle(!addContainerToggle);
  };

  // To delete organization details
  const onHandleDeleteOrganizationDetails = (id) => {
    alert("Are you sure you want to delete this record?");
    const filteredList = organizationDetailsList.filter((org) => org.id !== id);
    setOrganizationDetailsList(filteredList);
  };

  // To edit organization details
  const onHandleEditOrganizationDetails = (id) => {
    const organizationToEdit = organizationDetailsList.find(
      (org) => org.id === id
    );
    if (organizationToEdit) {
      setIsOrganisationId(organizationToEdit.id);
      setOrganizationName(organizationToEdit.organizationName);
      setAddress(organizationToEdit.address);
      setCity(organizationToEdit.city);
      setCountry(organizationToEdit.country);
      setZip(organizationToEdit.zip);
      setWebsite(organizationToEdit.website);
      setComments(organizationToEdit.comments);
      setStatus(organizationToEdit.status);
    }
    setOnEditDetails(!onEditDetails);
  };

  // To submit edited organization details
  const onSubmitEditOrganizationDetails = (id) => {
    const updatedOrganizationDetails = {
      id: isOrganisationId,
      organizationName,
      address,
      city,
      country,
      zip,
      website,
      comments,
      status,
    };

    //
    console.log(updatedOrganizationDetails);
    setOrganizationDetailsList((prevList) =>
      prevList.map((org) =>
        org.id === updatedOrganizationDetails.id
          ? updatedOrganizationDetails
          : org
      )
    );
    alert("Successfully Edited");
  };
  // To clear form details
  const onHandleClearForm = () => {
    setOrganizationName("");
    setAddress("");
    setCity("");
    setCountry("");
    setZip("");
    setWebsite("");
    setComments("");
    setStatus("");
  };

  // To add organization details
  const onAddOrganizationDetails = (e) => {
    e.preventDefault();
    toast.success("Successfully Added", {
      toastId: "add-toast",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const newOrganizationDetails = {
      id: uuidv4(),
      organizationName,
      address,
      city,
      country,
      zip,
      website,
      comments,
      status,
    };

    setOrganizationDetailsList((prevList) => [
      ...prevList,
      newOrganizationDetails,
    ]);
    setOrganizationName("");
    setAddress("");
    setCity("");
    setCountry("");
    setZip("");
    setWebsite("");
    setComments("");
    setStatus("");
  };

  // To search organization details
  const onHandleSearchOrganizationDetails = () => {
    const filteredList = organizationDetailsList.filter(
      (org) =>
        org.organizationName
          .toLowerCase()
          .includes(organizationName.toLowerCase()) ||
        org.city.toLowerCase().includes(city.toLowerCase())
    );
    if (filteredList.length === 0) {
      toast.error("No matching records found", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,

        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setOrganizationDetailsList(filteredList);
    }
  };

  // To clear search form
  const onHandleSearchClearForm = () => {
    setOrganizationName("");
    setCity("");
    setOrganizationDetailsList(referenceDetails);
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <ToastContainer />
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
              <input
                type="text"
                className="text-input"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </div>
            <div className="search-content-container">
              <input
                type="text"
                className="text-input"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button
              className="add-btn new-additional-btn "
              onClick={onHandleSearchOrganizationDetails}
            >
              search
            </button>
            <button
              className="search-btn new-additional-btn"
              type="button"
              onClick={onHandleSearchClearForm}
            >
              clear
            </button>
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
                <th className="font-style btn-style-header">View/Edit</th>
                <th className="font-style btn-style-header">Delete</th>
              </tr>
            </thead>
            <tbody className="organization-table-body">
              {organizationDetailsList.map((org, index) => (
                <tr className="table-content-style" key={index}>
                  <td className="organization-style org-detail-font-style">
                    {org.organizationName}
                  </td>
                  <td className="place-style org-detail-font-style">
                    {org.city}
                  </td>
                  <td className="place-style org-detail-font-style">
                    {org.country}
                  </td>
                  <td
                    className="btn-style "
                    onClick={() => onHandleEditOrganizationDetails(org.id)}
                  >
                    <MdEditSquare />
                  </td>
                  <td className=" btn-style ">
                    <AiFillDelete
                      onClick={() => onHandleDeleteOrganizationDetails(org.id)}
                    />
                    <ToastContainer />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* {** Pagination Container **} */}
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
                  <input
                    type="text"
                    className="text-input"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Address <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    City <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Status <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
              <div className="container-data-alignment">
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Country
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Zip <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Website <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Comments <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="organization-btn-container">
              <button
                className="add-btn"
                type="submit"
                onClick={onAddOrganizationDetails}
              >
                Add
              </button>

              <button
                className="search-btn"
                type="button"
                // onClick={onClearForm}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Organization-container */}

      {onEditDetails && (
        <div className="edit-organization-container">
          <div className="edit-orgainization-details-container">
            <h2 className="contianer-titles">
              Edit Organization Details{" "}
              <IoCloseSharp
                className="close-btn"
                onClick={() => setOnEditDetails(false)}
              />
            </h2>

            <div className="container-row-alignment">
              <div className="container-data-alignment">
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Organization Name{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Address <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    City <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Status <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
              <div className="container-data-alignment">
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Country
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Zip <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Website <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="org-details-container">
                  <label className="organization-label-name">
                    Comments <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input
                    type="text"
                    className="text-input"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="organization-btn-container">
              <button
                className="add-btn"
                type="submit"
                onClick={onSubmitEditOrganizationDetails}
              >
                Submit
              </button>

              <button
                className="search-btn"
                type="button"
                onClick={onHandleClearForm}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterComponent />
    </>
  );
};

export default OrganizationDetailsComponent;
