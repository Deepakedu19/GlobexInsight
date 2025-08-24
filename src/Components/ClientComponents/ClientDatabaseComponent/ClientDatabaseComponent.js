import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import { getNames } from "country-list";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { IoFilter } from "react-icons/io5";
import { DataContext } from "../../ContextComponent/ContextComponent";

const lineOfBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const ClientDatabaseComponent = () => {
  const { setClientActiveLinkId } = useContext(DataContext);

  const [onTogglePopMenu, setOnTogglePopMenu] = useState(false);
  const [onToggleCountry, setOnToggleCountry] = useState(false);
  const [onToggleTable, setOnToggleTable] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const onHandleCountrySelect = (e) => {
    setSelectedCountries((prevSelected) => {
      if (prevSelected.includes(e.target.value)) {
        return prevSelected.filter((c) => c !== e.target.value);
      } else {
        return [...prevSelected, e.target.value];
      }
    });
    window.onclick = (e) => {
      if (!e.target.closest(".pop-menu-content")) {
        setOnToggleCountry(false);
      }
    };
  };

  const handleSubmit = () => {
    if (selectedCountries.length > 0) {
      setOnTogglePopMenu(false);
      setOnToggleTable(true);
    } else {
      alert("Please select at least one country.");
    }
  };

  const onHandlePopUp = () => {
    setOnTogglePopMenu(!onTogglePopMenu);
  };

  const navigate = useNavigate();
  const countries = getNames();

  return (
    <>
      <ClientHeaderComponent />
      <ClientLinkComponent />

      <div className="clientDatabase-container">
        <div className="clientDatabase-inner-container">
          <div className="client-btn-container">
            <button
              className="add-ticket-btn-container"
              onClick={onHandlePopUp}
            >
              <IoFilter className="filter-icon" />
              Filter
            </button>
            <IoHome
              className="home-icon"
              onClick={() => {
                navigate("/client-dashboard");
                setClientActiveLinkId(0);
              }}
            />
          </div>

          {onTogglePopMenu && (
            <div className="pop-menu-background">
              <div className="pop-menu-content">
                <div className="client-pop-up-content">
                  <h2 className="pop-menu-title">Select the Data</h2>
                </div>
                <div className="client-drop-down-container-layout">
                  <div className="client-drop-down-container">
                    {/* line of business container */}
                    <div className="client-lob-container">
                      <label className="client-lob-label">
                        Line of Business
                      </label>
                      <br />
                      <select className="client-lob-select-dropdown">
                        <option value="" disabled selected>
                          Select Line of Business
                        </option>
                        {lineOfBusinessOptions.map((option) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Country container */}
                    {onToggleCountry && (
                      <div>
                        <ul className="country-list">
                          {countries.map((country, index) => (
                            <label key={index} className="country-item-label  ">
                              <input
                                type="checkbox"
                                className="country-checkbox"
                                onClick={onHandleCountrySelect}
                                value={country}
                                checked={selectedCountries.includes(country)}
                              />
                              {country}
                            </label>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="client-lob-container">
                      <label className="client-lob-label">Country</label>
                      <br />
                      <p
                        className="client-Country-container"
                        onClick={() => setOnToggleCountry(!onToggleCountry)}
                      >
                        Select Countries
                        <RiArrowDropDownLine className="icon-drop-down" />
                      </p>
                    </div>
                    <div className="btn-container">
                      <button className="btn-submit" onClick={handleSubmit}>
                        Submit
                      </button>
                      <button
                        className="btn-cancel"
                        onClick={() => {
                          setOnTogglePopMenu(false);
                          setSelectedCountries([]);
                          setOnToggleCountry(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="pop-title-container">
                    <p className="pop-country-menu-title">Selected Countries</p>
                    <span className="note-text">
                      {selectedCountries.length} countries selected
                    </span>
                    {
                      <ul className="selected-countries-list">
                        {selectedCountries.map((country, index) => (
                          <li key={index} className="selected-country-item">
                            {country}
                            <IoCloseSharp
                              className="remove-country-icon"
                              onClick={() => {
                                setSelectedCountries(
                                  selectedCountries.filter(
                                    (item) => item !== country
                                  )
                                );
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
          {!onToggleTable ||
            (selectedCountries.length === 0 && (
              <div className="client-database-title">
                <h2 className="database-note-text">
                  <RiStickyNoteAddFill />
                  No records found
                </h2>
              </div>
            ))}
          {onToggleTable && selectedCountries.length > 0 && (
            <div className="table-client-container">
              <div className="btn-excel-container">
                {/* <span className="countrylist-container">
                  {selectedCountries.length > 0
                    ? selectedCountries.length > 1
                      ? `${
                          selectedCountries.length
                        } countries selected: ${selectedCountries.join(", ")}`
                      : `${
                          selectedCountries.length
                        } country selected: ${selectedCountries.join(", ")}`
                    : "No countries selected"}
                </span> */}
                <button className="export-excel-button">Export to Excel</button>
              </div>
              <div className="table-header-container">
                <table className="table-client-database">
                  <thead>
                    <tr className="tclient-database-table-header-row">
                      <th className="table-head-font-style">"</th>
                      {selectedCountries.map((eachCountry, index) => (
                        <th key={index} className="table-head-font-style">
                          {eachCountry}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ClientDatabaseComponent;
