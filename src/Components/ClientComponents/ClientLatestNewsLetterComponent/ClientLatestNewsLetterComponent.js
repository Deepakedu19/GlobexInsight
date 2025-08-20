import ClientHeaderComponent from "../ClientHeaderComponent/ClientHeaderComponent";
import ClientLinkComponent from "../ClientLinkComponents/ClientLinkComponent";
import "./index.css";
import FooterComponent from "../../FooterComponent/FooterComponent";
import { BsFilePdfFill } from "react-icons/bs";
import { IoIosJournal } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { BiSolidFilePdf } from "react-icons/bi";
import { useState } from "react";
import { HiViewGrid } from "react-icons/hi";

import { HiOutlineViewList } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ClientLatestNewsLetterComponent = () => {
  const [toggleListView, setToggleListView] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <ClientHeaderComponent />
      <ClientLinkComponent />
      <div className="client-newsletter-container">
        <div className="newsletter-container-filter">
          <div className="newsletter-content-container">
            <div className="newsletter-view-toggle">
              <HiViewGrid
                className={toggleListView ? "active-btn" : "icon-inactive-btn"}
                onClick={() => setToggleListView(false)}
              />
              <HiOutlineViewList
                className={!toggleListView ? "active-btn" : "icon-inactive-btn"}
                onClick={() => setToggleListView(true)}
              />
              <IoHome
                className="home-icon home-active-btn"
                onClick={() => navigate("/client-dashboard")}
              />
            </div>
            {toggleListView && (
              <div className="latest-news-letter-content-main">
                <div className="latest-news-letter-content">
                  <h2 className="latest-news-letter-title">
                    <IoIosJournal className="latest-news-letter-icon" />
                    Latest NewsLetter
                  </h2>
                  <ul className="latest-news-letter-list-grid-view">
                    <iframe
                      src="../files/TD Saikishore Resume Full Stack Developer.pdf "
                      width="100%"
                      height="600px"
                      title="Latest NewsLetter"
                      allowFullScreen
                      type="application/pdf"
                    ></iframe>
                  </ul>
                </div>
                <div className="previous-news-letter-content">
                  <h2 className="previous-news-letter-title">
                    <IoIosJournal className="latest-news-letter-icon" />{" "}
                    Previous NewsLetter
                  </h2>
                  <ul>
                    <li className="previous-news-letter-item">
                      <IoMdArrowDropright className="latest-news-letter-icon" />
                      <BsFilePdfFill className="latest-news-letter-icon" /> news
                      letter-1
                    </li>
                    <li className="previous-news-letter-item">
                      <IoMdArrowDropright className="latest-news-letter-icon" />
                      <BsFilePdfFill className="latest-news-letter-icon" /> news
                      letter-2
                    </li>
                    <li className="previous-news-letter-item">
                      <IoMdArrowDropright className="latest-news-letter-icon" />
                      <BsFilePdfFill className="latest-news-letter-icon" /> news
                      letter-3
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {!toggleListView && (
              <div className="newsletter-content-container-grid-view">
                <div className="latest-news-letter-content">
                  <h2 className="latest-news-letter-title">
                    <IoIosJournal className="latest-news-letter-icon" />
                    Latest NewsLetter
                  </h2>
                  <ul className="latest-news-letter-list-grid-view">
                    <embed
                      src="/TD%20Saikishore%20Resume/TD%20Saikishore%20Resume%20Full%20Stack%20Developer.pdf"
                      type="application/pdf"
                      width="800px"
                      height="600px"
                    ></embed>
                  </ul>
                </div>
                <div className="previous-news-letter-content">
                  <h2 className="previous-news-letter-title">
                    <IoIosJournal className="latest-news-letter-icon" />{" "}
                    Previous NewsLetter
                  </h2>
                  <ul className="latest-news-letter-list-grid-view">
                    <li className="latest-news-letter-item-grid-view">
                      <BiSolidFilePdf className="latest-news-letter-icon-grid-view" />
                      news letter-1
                    </li>
                    <li className="latest-news-letter-item-grid-view">
                      <BiSolidFilePdf className="latest-news-letter-icon-grid-view" />
                      news letter-2
                    </li>
                    <li className="latest-news-letter-item-grid-view">
                      <BiSolidFilePdf className="latest-news-letter-icon-grid-view" />
                      news letter-3
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ClientLatestNewsLetterComponent;
