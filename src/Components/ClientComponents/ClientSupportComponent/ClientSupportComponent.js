import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ClientSupportComponent = () => {
  const [onToggleAdd, setOnToggleAdd] = useState(false);
  const navigate = useNavigate();

  const onAddRecord = () => {
    setOnToggleAdd(!onToggleAdd);
  };

  return (
    <div>
      <ClientHeaderComponent />
      <ClientLinkComponent />
      <div className="client-support-container">
        <div className="client-support-filter-container">
          <div className="home-btn-container">
            <button className="contact-add-btn" onClick={onAddRecord}>
              <IoMdAdd /> Create Ticket
            </button>
            <button
              className="home-btn-style"
              onClick={() => navigate("/client-dashboard")}
            >
              <IoHome className="home-icon-icon" />
            </button>
          </div>
          {onToggleAdd && (
            <div className="form-container-addRecord">
              <div className="form-details-container">
                <h2 className="form-header-title"> Create Ticket</h2>
                <div className="add-record-input-container">
                  <label className="label-name">Subject</label>
                  <input type="text" className="input-container" />
                </div>
                <br />
                <div className="add-record-input-container">
                  <label className="label-name">Description</label>
                  <textarea rows={5} className="input-container" />
                </div>
                <br />
                <div>
                  <button onClick={() => {}} className="submit-btn">
                    Submit
                  </button>
                  <button
                    onClick={() => {
                      setOnToggleAdd(false);
                    }}
                    className="clear-btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <table className="client-support-table">
            <tr className="client-support-table-header-row">
              <th className="header-font-style">Subject</th>
              <th className="header-font-style comment-width">Comment</th>
              <th className="header-font-style">Status</th>
              <th className="header-font-style">Date Created</th>
            </tr>
            <tr className="client-support-table-description-row">
              <td className="client-support-table-data">Subscription Issue</td>
              <td className="client-support-table-data comment-width">
                Unable to access subscription details.
              </td>
              <td className="client-support-table-data">Open</td>
              <td className="client-support-table-data">2023-10-01</td>
            </tr>
          </table>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ClientSupportComponent;
