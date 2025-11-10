import "./index.css";
import { FaNewspaper } from "react-icons/fa";

const NewsLetterComponent = () => {
  return (
    <div className="letter-main-container">
      <div className="letter-latest-container">
        <h1 className="heading-letter-style">
          <FaNewspaper className="news-letter-icon-style" />
          Latest News Letter
        </h1>
      </div>
      <div className="letter-oldest-container">
        <h1 className="heading-letter-style">
          <FaNewspaper className="news-letter-icon-style" /> Latest Update
          Information
        </h1>
      </div>
    </div>
  );
};

export default NewsLetterComponent;
