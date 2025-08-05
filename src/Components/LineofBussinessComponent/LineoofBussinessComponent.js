import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import FooterComponent from "../FooterComponent/FooterComponent";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const LineofBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const LineofBussinessComponent = () => {
  return (
    <div>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="organization-container">
        <div className="header-container">
          <h1 className="header-title">Line of Business</h1>
          <label className="category-label-style">Line of Business</label>
          <select className="category-option-container">
            <option disabled selected>
              select
            </option>
            {LineofBusinessOptions.map((eachOption) => (
              <option key={eachOption.id}>{eachOption.name}</option>
            ))}
          </select>
        </div>
        <div className="table-container">
          <table className="LOB-table-style">
            <tr className="LOB-table-header-style">
              <th className="LOB-category-style">Line of Business</th>
              <th className="LOB-button-style">Edit</th>
              <th className="LOB-button-style">Delete</th>
            </tr>
            <tr className="LOB-table-description-style">
              <td className="LOB-category-style"></td>
              <td className="LOB-button-style"></td>
              <td className="LOB-button-style"></td>
            </tr>
          </table>
          <div className="pagination-container">
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
    </div>
  );
};

export default LineofBussinessComponent;
