import LoginHeaderComponent from "../LoginHeaderComponent/LoginHeaderComponent";
import { Stack, TextField } from "@mui/material";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

import "./index.css";

const LoginContactUsComponent = () => {
  return (
    <div className="login-contact-us">
      <LoginHeaderComponent />
      <div className="contact-us-container">
        <form className="contact-us-form">
          <h2 className="contact-us-title">Contact Us</h2>
          <div className="info-container-set">
            <MdContactMail className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Mail</span>
          </div>
          <br />

          <Stack
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
              required
            />
            <TextField
              label="Comments"
              variant="outlined"
              multiline
              rows={2}
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
            />
          </Stack>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
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
      <div className="footer-container">
        <p className="footer-info-container-text">
          Globex Insight provides information that is subject to change and it
          may not reflect real time information at the time it is viewed. Data
          is being reviewed and revised continuously, an update may not include
          all fields at the same time.
          <br />
          <br />
          Feel free to contact your Globex Insight experts if your use of the
          latest information is critical.
          <br />
          <br />
          Copyright 2025, Globex International Group Inc. © 2025 Globex • Terms
          & Conditions • Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginContactUsComponent;
