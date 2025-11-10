// import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
// import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
// import { FaStarOfLife } from "react-icons/fa6";
// import { TfiArrowCircleRight } from "react-icons/tfi";
// import { TfiArrowCircleLeft } from "react-icons/tfi";
// import FooterComponent from "../FooterComponent/FooterComponent";
// import "./index.css";
// import { MdOutlinePlaylistAdd } from "react-icons/md";
// import { useState } from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { ToastContainer, toast } from "react-toastify";

// const NewsReportComponent = () => {
//   const [isToggleAddReport, setIsToggleAddReport] = useState(false);
//   const [newslettersFile, setNewslettersFile] = useState();
//   const [newsletterContent, setNewsletterContent] = useState("");
//   const [selectedNewsletters, setSelectedNewsletters] = useState([]);

//   const onSaveNewsContent = () => {
//     if (newslettersFile && newsletterContent) {
//       const formData = {
//         newsletterContent,
//         selectedNewsletters,
//       };
//       // You can replace this with your own API endpoint for saving the newsletter content
//       setSelectedNewsletters((prevNewsLetters) => [
//         ...prevNewsLetters,
//         formData,
//       ]);
//       setIsToggleAddReport(false);
//       setNewslettersFile(null);
//       setNewsletterContent("");
//     }
//     // fetch("https://your-api-endpoint.com/newsletters", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(formData),
//     // });

//     toast.success("Newsletter Added Successfully", {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "light",
//     });
//   };
//   return (
//     <>
//       <DashboardHeaderComponent />
//       <DashboardMinHeader />
//       <div className="newsletter-container">
//         <div className="newsletter-header-contianer">
//           <h1 className="header-title">Newsletter</h1>
//           <button
//             className="newsletter-add-btn "
//             onClick={() => {
//               setIsToggleAddReport(!isToggleAddReport);
//             }}
//           >
//             <MdOutlinePlaylistAdd />
//             Add
//           </button>
//         </div>
//         {isToggleAddReport && (
//           <div className="newletter-content-container ">
//             <div className="add-newsletter-content-details-contianer">
//               <h2 className="add-newsletter-title">
//                 Add Newsletter{" "}
//                 <IoCloseOutline
//                   className="close-btn"
//                   onClick={() => setIsToggleAddReport(!isToggleAddReport)}
//                 />
//               </h2>

//               <div className="add-newsletter-content-container">
//                 <label className="newletter-label-name">
//                   Latest Newsletter{" "}
//                   <FaStarOfLife className="required-icon-style" />
//                 </label>
//                 <input
//                   type="file"
//                   className="newsletter-file-attacment-style"
//                   value={newslettersFile}
//                   onChange={(e) => setNewslettersFile(e.target.files[0]){
//                    if(e.target.files[0].type.includes('application/pdf')){
//                     toast.error("Only PDF files are allowed", {
//                       position: "top-center",
//                       autoClose: 5000,
//                       hideProgressBar: false,
//                       closeOnClick: false,
//                       pauseOnHover: true,
//                       draggable: true,
//                       theme: "light",
//                     })
//                     }else{
//                       setIsToggleAddReport(false);
//                     setNewslettersFile(null);
//                     }
//                   }
//                     toast.success("File uploaded successfully", {
//                       position: "top-center",
//                       autoClose: 5000,
//                       hideProgressBar: false,
//                       closeOnClick: false,
//                       pauseOnHover: true,
//                       draggable: true,
//                       theme: "light",
//                     });

//                   }
//                 />
//               </div>
//               <br />
//               <div className="add-newsletter-content-container">
//                 <label className="newletter-label-name">
//                   News Content <FaStarOfLife className="required-icon-style" />
//                 </label>
//                 <textarea
//                   rows="5"
//                   cols="70"
//                   className="textarea--style"
//                   value={newsletterContent}
//                   onChange={(e) => setNewsletterContent(e.target.value)}
//                 />
//               </div>
//               <div className="newsletter-btn-container">
//                 <button
//                   className="add-btn user-additional-btn "
//                   onClick={onSaveNewsContent}
//                 >
//                   Save
//                 </button>
//                 <button className="search-btn user-additional-btn">
//                   Clear
//                 </button>
//               </div>
//               <ToastContainer />
//             </div>
//           </div>
//         )}
//         {/* <div className="newsletter-btn-container">
//           <button className="add-btn user-additional-btn ">Save</button>
//           <button className="search-btn user-additional-btn">Clear</button>
//         </div> */}
//         <div className="newsletter-table-container">
//           <table className="newsletter-table">
//             <tr className="newsletter-table-header">
//               <th className="font-style file-name-style">File Name</th>
//               <th className="font-style file-name-style">Content</th>
//               <th className="font-style">Delete</th>
//             </tr>
//             <tr className="newsletter-table-description">
//               <td className="font-style file-name-style">File Name</td>
//               <td className="font-style file-name-style">Content</td>
//               <td className="font-style">Delete</td>
//             </tr>
//           </table>
//         </div>
//         <div className="pagination-style">
//           <span className="pagination-content-new">Show entries</span>
//           <select className="drop-down-selection">
//             <option>10</option>
//             <option>25</option>
//             <option>50</option>
//           </select>
//           <TfiArrowCircleLeft className="pagination-font-style" />
//           <TfiArrowCircleRight className="pagination-font-style" />
//           <span className="pagination-content">Page 1 of 1</span>
//         </div>
//       </div>
//       <FooterComponent />
//     </>
//   );
// };

// export default NewsReportComponent;

import DashboardHeaderComponent from "../DashboardHeaderComponent/DashBoardHeaderComponent";
import DashboardMinHeader from "../DashboardMinHeader/DashboardMinHeader";
import { FaStarOfLife } from "react-icons/fa6";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import FooterComponent from "../FooterComponent/FooterComponent";
import "./index.css";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const NewsReportComponent = () => {
  const [isToggleAddReport, setIsToggleAddReport] = useState(false);
  const [newslettersFile, setNewslettersFile] = useState();
  const [newsletterContent, setNewsletterContent] = useState("");
  const [selectedNewsletters, setSelectedNewsletters] = useState([]);
  const [onToggleFullScreenTable, SetOnToggleFullScreenTable] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setNewslettersFile(file);

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     setNewsletterContent(event.target.result);
    //   };
    //   reader.readAsText(file); // Use readAsDataURL for images/PDFs
    // }
  };

  const onDeleteLetter = (id) => {
    alert("Are you sure you want to delete this newsletter?");
    const filterNewsLetters = selectedNewsletters.filter((i) => i.id !== id);
    setSelectedNewsletters(filterNewsLetters);
    toast.warning("Newsletter Deleted Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const onSaveNewsContent = () => {
    const newsData = {
      id: uuidv4(),
      newslettersFile,
      newsletterContent,
    };
    setSelectedNewsletters((prevNewsLetters) => [...prevNewsLetters, newsData]);
    setIsToggleAddReport(false);
    setNewslettersFile(null);
    setNewsletterContent("");
    toast.success("Newsletter Added Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <>
      <DashboardHeaderComponent />
      <DashboardMinHeader />
      <div className="newsletter-container">
        <div className="newsletter-header-contianer">
          <h1 className="header-title">Newsletter</h1>
          <button
            className="newsletter-add-btn "
            onClick={() => {
              setIsToggleAddReport(!isToggleAddReport);
            }}
          >
            <MdOutlinePlaylistAdd />
            Add
          </button>
          <div
            className="full-screen-container"
            onClick={() => SetOnToggleFullScreenTable(true)}
          >
            <MdOutlineZoomOutMap />
          </div>
        </div>
        {/* Add Newsletter Section */}
        {isToggleAddReport && (
          <div className="newletter-content-container ">
            <div className="add-newsletter-content-details-contianer">
              <h2 className="add-newsletter-title">
                Add Newsletter{" "}
                <IoCloseOutline
                  className="close-btn"
                  onClick={() => setIsToggleAddReport(!isToggleAddReport)}
                />
              </h2>

              <div className="add-newsletter-content-container">
                <label className="newletter-label-name">
                  Latest Newsletter{" "}
                  <FaStarOfLife className="required-icon-style" />
                </label>
                <input
                  type="file"
                  className="newsletter-file-attacment-style"
                  onChange={onFileChange}
                />
              </div>
              <br />
              <div className="add-newsletter-content-container">
                <label className="newletter-label-name">
                  News Content <FaStarOfLife className="required-icon-style" />
                </label>
                <textarea
                  rows="5"
                  cols="70"
                  className="textarea--style"
                  value={newsletterContent}
                  onChange={(e) => setNewsletterContent(e.target.value)}
                />
              </div>
              <div className="newsletter-btn-container">
                <button
                  className="add-btn user-additional-btn "
                  onClick={onSaveNewsContent}
                >
                  Save
                </button>
                <button className="search-btn user-additional-btn">
                  Clear
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        )}

        {/* Fullscreen Table View */}
        <div className="newsletter-table-container">
          <table className="newsletter-table">
            <tr className="newsletter-table-header">
              <th className="font-style file-name-style">File Name</th>
              <th className="font-style file-name-style">Content</th>
              <th className=" font-style file-delete-icon">Delete</th>
            </tr>
            {selectedNewsletters.map((eachNewsletter, index) => (
              <tr className="newsletter-table-description">
                <td className=" file-name-style-description">
                  {eachNewsletter.newslettersFile.name}
                </td>
                <td className=" file-name-style-description">
                  {eachNewsletter.newsletterContent}
                </td>
                <td className="file-delete-icon ">
                  <AiFillDelete
                    className="del-icon"
                    onClick={() => onDeleteLetter(eachNewsletter.id)}
                  />
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
      <FooterComponent />

      {/* Fullscreen Table View */}
      {onToggleFullScreenTable && (
        <div className="LOB-full-sceen-table-view-container">
          <div className="newsletter-fullscreen-table-container">
            <table className="newsletter-table">
              <tr className="newsletter-table-header">
                <th className="font-style file-name-style">File Name</th>
                <th className="font-style file-name-style">Content</th>
                <th className=" font-style file-delete-icon">Delete</th>
              </tr>
              {selectedNewsletters.map((eachNewsletter, index) => (
                <tr className="newsletter-table-description">
                  <td className=" file-name-style-description">
                    {eachNewsletter.newslettersFile.name}
                  </td>
                  <td className=" file-name-style-description">
                    {eachNewsletter.newsletterContent}
                  </td>
                  <td className="file-delete-icon ">
                    <AiFillDelete
                      className="del-icon"
                      onClick={() => onDeleteLetter(eachNewsletter.id)}
                    />
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
            <div
              className="Zoom-content"
              onClick={() => {
                SetOnToggleFullScreenTable(false);
              }}
            >
              <AiOutlineFullscreenExit />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsReportComponent;
