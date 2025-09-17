import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const categoryOptions = [
  { id: 1, name: "Accounting" },
  { id: 2, name: "Claims Handling" },
  { id: 3, name: "General Information" },
  { id: 4, name: "Policy Related" },
  { id: 5, name: "Premium Calculation Details" },
  { id: 6, name: "Reinsurance Related Questions" },
];

const LineofBusinessOptions = [
  { id: 1, name: "Cyber" },
  { id: 2, name: "D&O" },
  { id: 3, name: "General Liability" },
  { id: 4, name: "Marine" },
  { id: 5, name: "Professional Indemnity" },
  { id: 6, name: "Property" },
];

const QuestionnairComponent = () => {
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [searchUserToggle, setSearchUserToggle] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [lineOfBusiness, setLineOfBusiness] = useState("");
  const [ToggleEditMenu, setToggleEditMenu] = useState(false);
  const [onEditQuestionId, setOnEditQuestionId] = useState("");

  // toggle edit menu
  const onToggleEditMenu = (id) => {
    setOnEditQuestionId(id);
    console.log(id);
    setToggleEditMenu(true);
    const questionnairEdit = questionList.find(
      (question) => question.id === id
    );
    if (questionnairEdit) {
      setQuestionNumber(questionnairEdit.questionNumber);
      setQuestionText(questionnairEdit.questionText);
      setCategory(questionnairEdit.category);
      setQuestionType(questionnairEdit.questionType);
      setLineOfBusiness(questionnairEdit.lineOfBusiness);
    }
  };

  // toggle add menu
  const onToggleAddUser = () => {
    setAddUserToggle(!addUserToggle);
    setSearchUserToggle(false);
    setQuestionNumber("");
    setQuestionText("");
    setCategory("");
    setQuestionType("");
    setLineOfBusiness("");
  };

  //toggle search menu
  const onToggleSearchUser = () => {
    setSearchUserToggle(!searchUserToggle);
    setAddUserToggle(false);
  };

  const onAddQuestionnair = () => {
    const newQuestion = {
      id: uuidv4(),
      questionNumber,
      questionText,
      category,
      questionType,
      lineOfBusiness,
    };
    setQuestionList([...questionList, newQuestion]);
    toast.success("Question Added Successfully", {
      position: "top-center",
      autoClose: 3000,

      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    setCategory("");
    setLineOfBusiness("");
    setQuestionNumber("");
    setQuestionText("");
    setQuestionType("");
  };

  const onEditQuestionnair = () => {
    const updateQuestionDetails = {
      id: onEditQuestionId,
      questionNumber,
      questionText,
      category,
      questionType,
      lineOfBusiness,
    };
    setQuestionList((prevList) =>
      prevList.map((que) =>
        que.id === updateQuestionDetails.id ? updateQuestionDetails : que
      )
    );
    toast.info("Questionnair updated", {
      toastId: "edit-toast",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const onDeleteQuestionnair = (id) => {
    alert("Are you sure you want to delete this record?");
    const filteredList = questionList.filter((que) => que.id !== id);
    setQuestionList(filteredList);
    toast.warning("Questionnair Deleted", {
      toastId: "edit-toast",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <div>
        <DashboardHeaderComponent />
        <DashboardMinHeader />
        <div className="questionnair-container">
          <div className="organization-header-container">
            <h1 className="header-title">Questionnair</h1>

            <button className="add-btn" onClick={onToggleAddUser}>
              Add
            </button>
            <button className="search-btn" onClick={onToggleSearchUser}>
              Search
            </button>
          </div>

          {/* // Add User Container */}
          {addUserToggle && (
            <div className="questionnair-main-container">
              <div className="questionnair-detail-container">
                <h2 className="add-question-title">
                  Add Question
                  <IoCloseSharp
                    className="header-close-btn"
                    onClick={() => {
                      setAddUserToggle(false);
                    }}
                  />
                </h2>
                <div className="user-content-main-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question Number{" "}
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionNumber}
                      onChange={(e) => setQuestionNumber(e.target.value)}
                    />
                  </div>
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                {/* Contianer - 2 */}
                <div className="user-content-main-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Category <FaStarOfLife className="required-icon-style" />
                    </label>
                    <select
                      className="questionnair-select-text-input"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option disabled value="" selected>
                        {" "}
                        select Category
                      </option>
                      {categoryOptions.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question Type
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="user-content-main-final-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Line of Business{" "}
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <select
                      className="questionnair-select-text-input"
                      value={lineOfBusiness}
                      onChange={(e) => setLineOfBusiness(e.target.value)}
                    >
                      <option disabled value="" selected>
                        select Line of Business
                      </option>
                      {LineofBusinessOptions.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="user-btn-container">
                  <button
                    className="add-btn user-additional-btn "
                    onClick={onAddQuestionnair}
                  >
                    Submit
                  </button>
                  <button className="search-btn user-additional-btn">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* {Edit Container} */}
          {ToggleEditMenu && (
            <div className="questionnair-main-container">
              <div className="questionnair-detail-container">
                <h2 className="add-question-title">
                  Edit Question
                  <IoCloseSharp
                    className="header-close-btn"
                    onClick={() => {
                      setToggleEditMenu(false);
                    }}
                  />
                </h2>
                <div className="user-content-main-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question Number{" "}
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionNumber}
                      onChange={(e) => setQuestionNumber(e.target.value)}
                    />
                  </div>
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                {/* Contianer - 2 */}
                <div className="user-content-main-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Category <FaStarOfLife className="required-icon-style" />
                    </label>
                    <select
                      className="questionnair-select-text-input"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option disabled value="" selected>
                        {" "}
                        select Category
                      </option>
                      {categoryOptions.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Question Type
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <input
                      type="text"
                      className="questionnair-text-input"
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="user-content-main-final-container">
                  <div className="questionnair-user-content-container">
                    <label className="questionnair-label-name">
                      Line of Business{" "}
                      <FaStarOfLife className="required-icon-style" />
                    </label>
                    <select
                      className="questionnair-select-text-input"
                      value={lineOfBusiness}
                      onChange={(e) => setLineOfBusiness(e.target.value)}
                    >
                      <option disabled value="" selected>
                        select Line of Business
                      </option>
                      {LineofBusinessOptions.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="user-btn-container">
                  <button
                    className="add-btn user-additional-btn "
                    onClick={onEditQuestionnair}
                  >
                    Submit
                  </button>
                  <button className="search-btn user-additional-btn">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* // Search User Container */}
          {searchUserToggle && (
            <div className="questionnair-main-container">
              <div className="Questionnair-search-main-container">
                <h2 className="search-question-title">
                  {" "}
                  Search Question
                  <IoCloseSharp
                    className="header-close-btn"
                    onClick={() => {
                      setSearchUserToggle(false);
                    }}
                  />
                </h2>
                <div className="questionair-search-content-container">
                  <label className="questionnair-label-name">
                    Question Type{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <br />
                <div className="questionair-search-content-container">
                  <label className="questionnair-label-name">
                    Line of Business{" "}
                    <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <br />
                <div className="questionair-search-content-container">
                  <label className="questionnair-label-name">
                    Category <FaStarOfLife className="required-icon-style" />
                  </label>
                  <input type="text" className="text-input" />
                </div>
                <br />
                <br />
                <div className="user-btn-container">
                  <button className="add-btn user-additional-btn ">
                    QSearch
                  </button>
                  <button className="search-btn user-additional-btn">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* // Search User Container */}
          <div className="questionnair-table-contianer">
            <table className="questionnair-table">
              <tr className="questionnair-row-header">
                <th className="questionnair-font-style s-no-style">Q Number</th>
                <th className="questionnair-font-style question-style">
                  Question
                </th>
                <th className="questionnair-font-style category-style">
                  Category
                </th>
                <th className="questionnair-font-style s-no-style">
                  Question Type
                </th>
                <th className="questionnair-font-style category-style">LOB</th>
                <th className="questionnair-font-style s-no-style">Edit </th>
                <th className="questionnair-font-style s-no-style">Delete</th>
              </tr>

              {questionList.map((eachQuestion) => (
                <tr
                  key={eachQuestion.id}
                  className="questionnair-row-description"
                >
                  <td className="questionnair-font-style s-no-style">
                    {eachQuestion.questionNumber}
                  </td>
                  <td className="questionnair-font-style question-style">
                    {eachQuestion.questionText}
                  </td>
                  <td className="questionnair-font-style category-style">
                    {eachQuestion.category}
                  </td>
                  <td className="questionnair-font-style s-no-style">
                    {eachQuestion.questionType}
                  </td>
                  <td className="questionnair-font-style category-style">
                    {eachQuestion.lineOfBusiness}
                  </td>
                  <td className="questionnair-font-style s-no-style">
                    <MdEditSquare
                      className="user-edit-icon"
                      onClick={() => onToggleEditMenu(eachQuestion.id)}
                    />
                  </td>
                  <td className="questionnair-font-style s-no-style">
                    <AiFillDelete
                      className="user-edit-icon"
                      onClick={() => onDeleteQuestionnair(eachQuestion.id)}
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          {/* {pagination contianer} */}
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

export default QuestionnairComponent;
