import LoginHeaderComponent from "../LoginHeaderComponent/LoginHeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
// import { Stack, TextField } from "@mui/material";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaStarOfLife } from "react-icons/fa6";

import "./index.css";

const LoginContactUsComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const onHandleContactUsDetailsSubmit = (event) => {
    event.preventDefault();
    const contactUsDetails = {
      firstName,
      lastName,
      company,
      phoneNumber,
      email,
      comments,
    };
    if (Object.values(contactUsDetails).every((field) => field.trim() !== "")) {
      toast.success("Successfully submitted!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setFirstName("");
      setLastName("");
      setCompany("");
      setPhoneNumber("");
      setEmail("");
      setComments("");
    }
  };

  return (
    <div>
      <LoginHeaderComponent />
      <div className="contact-us-container">
        <form
          className="contact-us-form"
          onClick={onHandleContactUsDetailsSubmit}
        >
          <h2 className="contact-us-title">Contact Us</h2>
          <div className="info-container-set">
            <MdContactMail className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Mail</span>
          </div>
          <br />
          <div className="login-contact-username-input-container">
            <div className="login-contact-us-form-container">
              <label className="login-contact-us-form-label">
                First Name <FaStarOfLife className="required-icon" />
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="login-contact-us-input-style"
                required
              />
            </div>

            <div className="login-contact-us-form-container">
              <label className="login-contact-us-form-label">
                Last Name <FaStarOfLife className="required-icon" />
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="login-contact-us-input-style"
                required
              />
            </div>
          </div>

          <div className="login-contact-us-form-container">
            <label className="login-contact-us-form-label">
              Company <FaStarOfLife className="required-icon" />
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="login-contact-us-input-style"
              required
            />
          </div>

          <div className="login-contact-us-form-container">
            <label className="login-contact-us-form-label">
              Phone Number <FaStarOfLife className="required-icon" />
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="login-contact-us-input-style"
              required
            />
          </div>
          <div className="login-contact-us-form-container">
            <label className="login-contact-us-form-label">
              Email Address <FaStarOfLife className="required-icon" />
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-contact-us-input-style"
              required
            />
          </div>
          <div className="login-contact-us-form-container">
            <label className="login-contact-us-form-label">Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="login-contact-us-textarea-style"
              rows="4"
            />
          </div>

          {/* <Stack
            spacing={2}
            sx={{
              width: "100%",
              margin: "auto",
            }}
          >
            <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
              <TextField
                label="First Name"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "38px", // Adjust height as needed
                    fontSize: "0.8rem", // Adjust font size as needed
                    padding: "0 10px", // Reduce padding to keep text vertically centered
                    width: "400px", // Ensure it takes full width
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "0.75rem", // Adjust label font size if desired
                    transform: "translate(14px, 10px) scale(1)", // Adjust label position

                    "&.Mui-focused, &.MuiInputLabel-shrink": {
                      transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                    },
                  },
                }}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "38px", // Adjust height as needed
                    fontSize: "0.8rem", // Adjust font size as needed
                    padding: "0 10px", // Reduce padding to keep text vertically centered
                    width: "400px", // Ensure it takes full width
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "0.75rem", // Adjust label font size if desired
                    transform: "translate(14px, 10px) scale(1)", // Adjust label position
                    "&.Mui-focused, &.MuiInputLabel-shrink": {
                      transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                    },
                  },
                }}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </Stack>
            <TextField
              label="Company or Organization"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: "38px", // Adjust height as needed
                  fontSize: "0.8rem", // Adjust font size as needed
                  padding: "0 10px", // Reduce padding to keep text vertically centered
                  width: "825px", // Ensure it takes full width
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.75rem", // Adjust label font size if desired
                  transform: "translate(14px, 10px) scale(1)", // Adjust label position
                  "&.Mui-focused, &.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                  },
                },
              }}
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: "38px", // Adjust height as needed
                  fontSize: "0.8rem", // Adjust font size as needed
                  padding: "0 10px", // Reduce padding to keep text vertically centered
                  width: "825px", // Ensure it takes full width
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.75rem", // Adjust label font size if desired
                  transform: "translate(14px, 10px) scale(1)", // Adjust label position
                  "&.Mui-focused, &.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                  },
                },
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="tel"
              required
            />
            <TextField
              label="Email Address"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: "38px", // Adjust height as needed
                  fontSize: "0.8rem", // Adjust font size as needed
                  padding: "0 10px", // Reduce padding to keep text vertically centered
                  width: "825px", // Ensure it takes full width
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.75rem", // Adjust label font size if desired
                  transform: "translate(14px, 10px) scale(1)", // Adjust label position
                  "&.Mui-focused, &.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                  },
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
            <TextField
              label="Comments"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                "& .MuiInputBase-root": {
                  height: "72px", // Adjust height as needed
                  fontSize: "0.8rem", // Adjust font size as needed
                  padding: "40px 20px", // Reduce padding to keep text vertically centered
                  width: "825px", // Ensure it takes full width
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.75rem", // Adjust label font size if desired
                  transform: "translate(14px, 10px) scale(1)", // Adjust label position
                  "&.Mui-focused, &.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.8)", // Adjust label position when focused/shrunk
                  },
                },
              }}
              onChange={(e) => setComments(e.target.value)}
              value={comments}
            />
          </Stack> */}
          <button type="submit" className="submit-button">
            Submit
          </button>
          <ToastContainer />
        </form>
        {/* {Globex - information - container} */}

        <div className="info-container">
          <div className="info-container-set">
            <IoIosMail className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Mail</span>
          </div>
          <p className="info-container-text">Globex Underwriting Services</p>
          <p className="info-container-text">
            2490 Black Rock Turnpike, Fairfield,
            <br /> Connecticut, 06825, USA
          </p>
          <div className="info-container-set">
            <FaPhone className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Phone</span>
          </div>
          <p className="info-container-text">1-203-256-1475</p>
          <div className="info-container-set">
            <FaFax className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Fax</span>
          </div>
          <p className="info-container-text">1-866-578-8624</p>
          <div className="info-container-set">
            <BsGlobeAmericas className="contact-info-icon-style" />
            <span className="contact-info-icon-style">Our Website</span>
          </div>

          <a href="http://www.globexintl.com/" className="info-container-text">
            globexintl.com
          </a>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default LoginContactUsComponent;
