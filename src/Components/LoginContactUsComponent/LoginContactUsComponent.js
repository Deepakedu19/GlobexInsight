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
                sx={{ width: "100%" }}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                sx={{ width: "100%" }}
                required
              />
            </Stack>
            <TextField
              label="Company or Organization"
              variant="outlined"
              required
            />
            <TextField label="Phone Number" variant="outlined" required />
            <TextField label="Email Address" variant="outlined" required />
            <TextField
              label="Comments"
              variant="outlined"
              multiline
              rows={2}
              required
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
          <p>Globex Underwriting Services</p>
          <p>
            2490 Black Rock Turnpike, Fairfield,
            <br /> Connecticut, 06825, USA
          </p>
          <div className="info-container-set">
            <FaPhone className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Phone</span>
          </div>
          <p>1-203-256-1475</p>
          <div className="info-container-set">
            <FaFax className="contact-info-icon-style" />
            <span className="contact-info-icon-style">By Fax</span>
          </div>
          <p>1-866-578-8624</p>
          <div className="info-container-set">
            <BsGlobeAmericas className="contact-info-icon-style" />
            <span className="contact-info-icon-style">Our Website</span>
          </div>
          <br />
          <a href="http://www.globexintl.com/">globexintl.com</a>
        </div>
      </div>
    </div>
  );
};

export default LoginContactUsComponent;
