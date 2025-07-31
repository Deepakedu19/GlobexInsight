import "./index.css";
import { FaNewspaper } from "react-icons/fa";

const NewsLetterComponent = () => {
  return (
    <div className="letter-main-container">
      <div className="letter-latest-container">
        <h1 className="heading-letter-style">
          Latest News Letter <FaNewspaper />
        </h1>
      </div>
      <div className="letter-oldest-container">
        <h1 className="heading-letter-style">
          Latest Information Letter <FaNewspaper />
        </h1>
      </div>
    </div>
  );
};

export default NewsLetterComponent;
