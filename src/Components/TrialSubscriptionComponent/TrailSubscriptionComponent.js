import LoginHeaderComponent from "../LoginHeaderComponent/LoginHeaderComponent";
import "./index.css";

import { getNames, getCode } from "country-list";
import { IoIosMail, IoMdClose } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";

const TrialSubscriptionComponent = () => {
  // Get the list of countries and their codes
  const countries = getNames();
  const [userAgreement, setUserAgreement] = useState(false);

  const handleAgreementClick = () => {
    setUserAgreement(!userAgreement);
  };

  return (
    <>
      <LoginHeaderComponent />

      <>
        <div className="trial-subscription-container">
          <form className="trial-subscription-form">
            <h2 className=" header-style">
              Welcome to the Trial Subscription Registration
            </h2>
            <h2 className="header-style subtitle-style">Company Information</h2>

            {/** Company Information Fields */}
            <div className="trail-sub-info-container">
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Organization Name <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>

              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Address <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
            </div>
            <div className="trail-sub-info-container">
              {/** City Field */}
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  City <FaStarOfLife className="required-icon" />
                </label>

                <input type="text" className="trail-sub-input-style" required />
              </div>
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Country <FaStarOfLife className="required-icon" />
                </label>

                <select className="trail-sub-input-country-style" required>
                  <option value="" disabled selected>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} id={getCode(country)}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h2 className=" header-style subtitle-style">User Information</h2>

            {/** User Information Fields */}
            <div className="trail-sub-info-container">
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  First Name <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Last Name <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
            </div>
            <div className="trail-sub-info-container">
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Email Address <FaStarOfLife className="required-icon" />
                </label>
                <input
                  type="email"
                  className="trail-sub-input-style"
                  required
                />
              </div>
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Phone Number <FaStarOfLife className="required-icon" />
                </label>
                <input type="tel" className="trail-sub-input-style" required />
              </div>
            </div>

            <div className="trail-sub-info-container">
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Zip Code <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Country <FaStarOfLife className="required-icon" />
                </label>
                <select className="trail-sub-input-country-style" required>
                  <option value="" disabled selected>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} id={getCode(country)}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="trail-sub-info-container">
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  Address <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
              <div className="trail-sub-detail-container">
                <label className="trialsub-label-style">
                  City <FaStarOfLife className="required-icon" />
                </label>
                <input type="text" className="trail-sub-input-style" required />
              </div>
            </div>

            {/** Old MUI TextField Implementation - Commented Out */}

            {/* <Stack
              spacing={2}
              sx={{
                width: "100%",
                margin: "auto",
              }}
            >
           
              <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                <TextField
                  label="Organization Name"
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
                  label="Address"
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
              <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                <TextField
                  label="City"
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

                <select className="country-select" required>
                  <option value="" disabled selected className="select-option">
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} id={getCode(country)}>
                      {country}
                    </option>
                  ))}
                </select>
              </Stack>
              <h2 className=" header-style subtitle-style">User Information</h2>
              {/* First Name Last Name */}
            {/* <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
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
              {/* Email Address Phone Number */}
            {/* <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                <TextField
                  label="Email Address"
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
                  label="Phone Number"
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
              {/* City Address */}
            {/* <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                <TextField
                  label="City"
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
                  label="Address"
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
              </Stack> */}
            {/* Zip  Country */}
            {/* <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                <select className="country-select" required>
                  <option value="" disabled selected className="select-option">
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} id={getCode(country)}>
                      {country}
                    </option>
                  ))}
                </select>
                <TextField
                  label="Zip"
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
            </Stack>   */}
            <div className="agreement-main-container">
              <div className="agreement-container">
                <p>
                  Please read the{" "}
                  <span
                    className="agreement-highlight"
                    onClick={handleAgreementClick}
                  >
                    Agreement Details
                  </span>{" "}
                  before you complete the registration process.
                </p>
              </div>
              <div className="agreement-container">
                <input type="checkbox" />
                <label> Yes, I agree with all the terms and conditions</label>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
          {/* globex info container */}
          <div className="info-container-subscription">
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

            <a
              href="http://www.globexintl.com/"
              className="info-container-text"
            >
              globexintl.com
            </a>
          </div>
        </div>
      </>

      {userAgreement && (
        <>
          <div className="agreement-subscription-container">
            <div className="agreement-notice-container">
              <h2 className="agreement-header">
                SUBSCRIPTION AGREEMENT{" "}
                <IoMdClose
                  className="close-icon"
                  onClick={handleAgreementClick}
                />
              </h2>
              <hr className="agreement-divider" />
              <p className="agreement-text">
                This Subscription Agreement (this "Agreement") governs your and
                your Authorized Users' (as defined below) use of the Subscribed
                Information (as defined below), which is made available to you
                ("Subscriber," "you," or "your") by Globex International Group
                ("Globex," "we," "our," or "us"). If you are entering into this
                Agreement on behalf of a legal entity, you represent that you
                have the authority to bind such entity to this Agreement, in
                which case the terms "you" or "your" refers to such entity. We
                and you are each referred to herein as a "Party," and together
                are referred to herein as the "Parties." BY CLICKING THE
                "ACCEPT" BUTTON AND COMPLETING THE REGISTRATION PROCESS, YOU
                ACKNOWLEDGE AND AGREE, ON YOUR OWN BEHALF AND ON BEHALF OF YOUR
                AUTHORIZED USERS, THAT YOU HAVE REVIEWED AND ACCEPT THIS
                AGREEMENT. FURTHER, BY ACCEPTING THE TERMS HEREOF, YOU REPRESENT
                AND WARRANT THAT YOU ARE AUTHORIZED TO BIND THE ENTITY OR
                COMPANY OF WHICH YOU ARE AN OFFICER, DIRECTOR, EMPLOYEE OR
                SIMILAR. IF YOU DO NOT ACCEPT THIS AGREEMENT, OR DO NOT HAVE THE
                AUTHORITY TO BIND THE ENTITY OR AUTHORIZED USERS TO THIS
                AGREEMENT, YOU OR YOUR AUTHORIZED USERS MAY NOT ACCESS OR USE
                THE SUBSCRIBED INFORMATION. The Parties agree as follows:
              </p>
              <h5 className="agreement-subheader">
                1. PROVISION OF SUBSCRIBED INFORMATION ACCESS
              </h5>
              <p>
                <li className="agreement-list-item">
                  1.1 Subject to the terms and conditions of this Agreement,
                  Globex hereby grants to you during the Term (as defined
                  below), a non-exclusive, non-transferable, and non-assignable
                  right to permit your Authorized Users to access and use the
                  Subscribed Information through the website
                  http://www.globexinsight.net (the "Website") for your internal
                  business purposes only.
                </li>
                <li className="agreement-list-item">
                  1.2 "Authorized Users" shall mean the Subscriber and officers,
                  directors, employees, independent contractors, and agents of
                  the Subscriber.
                </li>
                <li className="agreement-list-item">
                  1.3 "Subscribed Information" means the website, content and
                  any documentation (or any part of the foregoing) provided by
                  Globex in accordance with this Agreement.
                </li>
                <li className="agreement-list-item">
                  1.4 "Content" shall mean the information and/or database
                  services provided by Globex pursuant to the terms of this
                  Agreement and the subject matter related to this Agreement in
                  any medium and/or as presented on any of the Website.
                </li>
                <li className="agreement-list-item">
                  1.5 "Documentation" shall mean any instruction manuals, user
                  guides and other recorded materials in any form, including but
                  not limited to, printed, electronic, or machine-readable form,
                  made available by Globex to the Subscriber.
                </li>
                <li className="agreement-list-item">
                  1.6 We modify the Website from time to time by adding or
                  deleting features and information to improve the user
                  experience.
                </li>
                <li className="agreement-list-item">
                  1.7 Subject to the terms of this Agreement, Globex will
                  provide the Authorized Users with the Subscribed Information
                  accessible via the password protected Website maintained by
                  Globex or using such other electronic media as agreed between
                  the parties.
                </li>
                <li className="agreement-list-item">
                  1.8 In addition, we may suspend access to the Website when we
                  believe, in our sole discretion, such suspension is in the
                  best interests of Globex, or its subscribers.
                </li>
              </p>
              <h5 className="agreement-subheader">2. SUBSCRIBER OBLIGATIONS</h5>
              <p>
                <li className="agreement-list-item">
                  2.1 The Subscriber shall pay the Fees to Globex in accordance
                  with this Agreement and any Amendment thereto.
                </li>
                <li className="agreement-list-item">
                  {" "}
                  2.2 Notwithstanding anything to the contrary in this
                  Agreement, the Subscriber shall not make available or
                  otherwise supply any of the Subscribed Information to any
                  third party, including but not limited to third parties that
                  competes with all or any part of the business carried on by
                  Globex from time to time.
                </li>{" "}
                <li className="agreement-list-item">
                  {" "}
                  2.3 The Subscriber shall not provide any information service
                  which incorporates the Subscribed Information (which
                  expression shall include for the purposes of this Section 2.3
                  any part of any version of the Subscribed Information) whether
                  by sale, rental, lending or howsoever to any third party which
                  competes with any part of the business carried on by Globex
                  from time to time.
                </li>{" "}
                <li className="agreement-list-item">
                  2.4 The Subscriber shall in any event be responsible for the
                  acts or omissions of any third party to whom access to the
                  Subscribed Information has been granted by the Subscriber to
                  the extent that such acts or omissions constitute a breach of
                  any of the provisions of this Agreement and/or would give rise
                  to any claim pursuant to any of the provisions of this
                  Agreement.
                </li>{" "}
                <li className="agreement-list-item">
                  2.5 The Subscriber shall ensure that the Subscribed
                  Information, in full or in part, shall not be integrated into
                  any other database or other information of Subscriber or any
                  Authorized User without the prior written consent of Globex.
                  The Subscriber shall ensure that no Authorized User shall hold
                  all or any part of the Subscribed Information on an intranet
                  or other basis which permits any Authorized User access to the
                  Subscribed Information by any means other than remotely
                  accessing the Subscribed Information licensed to the
                  Subscriber pursuant to this Agreement.
                </li>
              </p>
              <h5 className="agreement-subheader">3. FEES AND PAYMENT</h5>
              <p>
                <li className="agreement-list-item">
                  3.1 Subscriber shall pay all applicable subscription fees
                  within thirty (30) days of the Term and each subsequent
                  anniversary.
                </li>
                <li className="agreement-list-item">
                  3.2 We may elect to terminate this Agreement and Subscriber's
                  access to the Subscribed Information if a payment is not made
                  by the Subscriber.
                </li>
                <li className="agreement-list-item">
                  3.3 We may update or modify the subscription fees from time to
                  time, and shall provide reasonable prior notice to you upon
                  such update or modification.
                </li>
                <li className="agreement-list-item">
                  3.4 All subscription fees payable under this Agreement are
                  non-refundable.
                </li>
              </p>
              <h5 className="agreement-subheader"> 4. TERM AND TERMINATION</h5>
              <p>
                <li className="agreement-list-item">
                  4.1 The term of this Agreement commences on the date you
                  accept this Agreement (the "Effective Date" ) and continues in
                  full force and effect for an Initial Term of one Year (twelve
                  calendar months), and shall be renewed automatically for each
                  successive Year thereafter unless otherwise agreed between the
                  parties. A minimum one Year subscription is required.
                </li>
                <li className="agreement-list-item">
                  4.2 The Subscriber may terminate this Agreement after one Year
                  subscription by giving written notice to Globex not less than
                  ninety (90) days prior to the expiration of the in-force Term.
                  In the absence of such notice, this Agreement shall be
                  automatically renewed for a Year unless otherwise agreed
                  between the parties.
                </li>
                <li className="agreement-list-item">
                  4.3 Within ten (10) business days of termination of this
                  Agreement for any reason, the Subscriber shall irrevocably
                  delete, or, at Globex's option, return, all copies of the
                  Subscribed Information and all back-ups thereof and destroy,
                  or at Globex's option return, all hard copies thereof in its
                  possession and in the possession of any Authorized User and
                  Subscriber shall certify in writing to Globex that the
                  Subscriber has complied with this obligation.
                </li>
                <li className="agreement-list-item">
                  4.4 Globex shall be entitled to terminate this Agreement in
                  its sole and absolute discretion, at any time and for any
                  reason, by providing Subscriber with fifteen (15) days written
                  notice.
                </li>
              </p>
              <h5 className="agreement-subheader">5. INTELLECTUAL PROPERTY</h5>
              <p>
                <li className="agreement-list-item">
                  All right, title, and interest in and to the Subscribed
                  Information, including all modifications, improvements,
                  adaptations, enhancements, or translations made thereto, and
                  all proprietary rights therein, shall be and remain Globex's
                  sole and exclusive property
                </li>
              </p>
              <h5 className="agreement-subheader">6. CONFIDENTIALITY</h5>
              <p>
                <li className="agreement-list-item">
                  6.1 Each party undertakes with the other that it shall not
                  disclose any confidential information which it may have or
                  acquire ( whether oral, written or in any other form ) as a
                  result of or pursuant to this Agreement ( and for the purposes
                  of this section, the Subscribed Information and any part of
                  any version thereof shall be considered confidential
                  information ) including the terms of this Agreement and any of
                  the information contained in the Subscribed Information, save
                  that this section shall not apply to the disclosure of
                  information required to be disclosed by law, binding judgment,
                  order or requirement of any court or other competent
                  authority, disclosure in confidence to a party's professional
                  advisers for a purpose reasonably incidental to this Agreement
                  or information which comes into the public domain (other than
                  as a result of breach of this Section 6).
                </li>

                <li className="agreement-list-item">
                  {" "}
                  6.2 The breach by any Authorized User of this Section 5 shall
                  be deemed to be a breach by the Subscriber and the Subscriber
                  shall Indemnify and hold harmless Globex against breach by it
                  or by any Authorized User of this Section 6.{" "}
                </li>
                <li className="agreement-list-item">
                  6.3 This Section 6 shall survive termination of this Agreement
                  and all confidential information shall remain confidential in
                  accordance with this Section 6 for a period of two (2) years
                  following termination of this Agreement
                </li>
              </p>
              <h5 className="agreement-subheader">7. INDEMNITY</h5>
              <p>
                <li className="agreement-list-item">
                  The Subscriber expressly agrees that the use of the Subscribed
                  Information and any website or network or other media through
                  which the Subscribed Information is made available is
                  undertaken at the Subscriber's sole risk and responsibility
                  and the Subscriber agrees to Indemnify Globex in relation to
                  any claim arising from the use by the Subscriber or any
                  Authorized User of the Subscribed Information or information
                  obtained from it or other results of its use. This indemnity
                  will not apply in situations where Globex's liability is non
                  waivable pursuant to applicable law. Under no circumstance
                  shall Globex be responsible to any third party stemming from
                  Subscriber's use of the Subscribed Information. This Section 7
                  shall survive the termination of this Agreement
                </li>
              </p>
              <h5 className="agreement-subheader">
                8. WARRANTY AND DISCLAIMER
              </h5>
              <p>
                <li className="agreement-list-item">
                  8.1 Globex warrants that it is the proprietor of the
                  Intellectual Property in the Subscribed Information.{" "}
                </li>
                <li className="agreement-list-item">
                  8.2 Subject to Section 1, the Subscribed Information is
                  provided for the Subscriber's use only. To the fullest extent
                  permitted by law, Globex does not warrant or guarantee that
                  use of the Subscribed Information will be uninterrupted or
                  error free, that defects in the Subscribed Information will be
                  corrected or that files available for downloading from
                  Globex's website, a network or contained in any computer media
                  will be free of viruses or other code manifesting destructive
                  properties.
                </li>
                <li className="agreement-list-item">
                  {" "}
                  8.3 The Subscribed Information and amendments made thereto by
                  Globex are compiled from sources which Globex, in its sole
                  discretion, considers to be reliable and are expressions of
                  their opinion. Although Globex shall make all reasonable
                  efforts to ensure the accuracy of the Subscribed Information
                  as amended from time to time, the Subscriber acknowledges and
                  accepts that the Subscribed Information is provided 'as is'
                  and Globex makes no representations as to the validity of
                  accuracy of the data.{" "}
                </li>
                <li className="agreement-list-item">
                  8.4 Globex will employ reasonable security and virus
                  protection measures to protect the integrity of the Subscribed
                  Information.
                </li>
                <li className="agreement-list-item">
                  8.5 Except as explicitly provided herein, to the maximum
                  extent permitted by applicable law, Globex disclaims all other
                  warranties and conditions, either express or implied,
                  including but not limited to implied warranties of
                  merchantability or fitness for a particular purpose, with
                  regard to the subscribed information.
                </li>
              </p>
              <h5 className="agreement-subheader">
                9. LIMITATION OF LIABILITY
              </h5>
              <p>
                <li className="agreement-list-item">
                  9.1 Subject to Section 9.2 below and notwithstanding anything
                  to the contrary in this Agreement or any Amendment, to the
                  fullest extent permitted by law, Globex and any of its
                  contractors, employees and agents, shall not be liable for any
                  direct, indirect, incidental, special or consequential damages
                  of any nature whatsoever (including without limitation damages
                  for loss of business profits, business interruption, loss of
                  programs or information) relating to: the Subscribed
                  Information or any results obtained from its use; the use or
                  inability to use any programs, network or other media through
                  which the Subscribed Information is made available; or any
                  claim attributable to any error, omission, or inaccuracy
                  contained in the Subscribed Information.
                </li>
                <li className="agreement-list-item">
                  {" "}
                  9.2 To the extent that Globex's liability cannot be excluded
                  or limited by law, the maximum liability of Globex, its
                  employees, agents or contractors in connection with the
                  Subscribed Information shall not exceed the greater of the
                  Fees payable (a) in the Year in which any claim for such
                  direct losses was brought against Globex; or (b) in the last
                  Year in which the Subscriber subscribed the Subscribed
                  Information from Globex under this Agreement, where the
                  Subscriber has ceased to subscribe the Subscribed Information
                  at the time of making any claim.
                </li>
              </p>
              <h5 className="agreement-subheader">10. WAIVER</h5>
              <p>
                <li className="agreement-list-item">
                  No waiver or modification of this Agreement shall be effective
                  unless it is in writing and signed by both parties. The
                  failure of either party to enforce any provision of this
                  Agreement shall not constitute a waiver by either party of any
                  such provision. The past waiver of a provision by either party
                  shall not constitute a course of conduct or a waiver in the
                  future of the same provision.
                </li>
              </p>
              <h5 className="agreement-subheader">11. ASSIGNABILITY</h5>
              <p>
                <li className="agreement-list-item">
                  This Agreement shall be binding upon and inure solely to the
                  benefit of the parties hereto and their respective successors
                  and assigns, and no other person shall acquire or have any
                  right under or by virtue of this Agreement. This Agreement may
                  not be assigned or transferred by either of the parties
                  without the prior written consent of the other party.
                </li>
              </p>
              <h5 className="agreement-subheader">12. SEVERABILITY</h5>
              <p>
                <li className="agreement-list-item">
                  If any separable provision hereof shall be held to be invalid
                  or unenforceable, such invalidity or unenforceability shall
                  not affect any other provision hereof.
                </li>
              </p>
              <h5 className="agreement-subheader">
                13. ENTIRE CONTRACT AS TO MATTERS SPECIFIED
              </h5>
              <p>
                <li className="agreement-list-item">
                  13.1 This Agreement reflects the entire Agreement between the
                  parties and supersedes all other agreements, whether oral or
                  written, between the parties.
                </li>
                <li className="agreement-list-item">
                  {" "}
                  13.2 No oral Agreement or representation concerning the
                  Agreement shall be binding. Any amendment must be in writing
                  and signed by each of the parties.
                </li>
                <li className="agreement-list-item">
                  13.3 The captions and heading contained herein are for the
                  convenience of the parties only and have no force or effect.
                </li>
                <li className="agreement-list-item">
                  13.4 If any provision of this Agreement should be invalid
                  under or in conflict with current, valid and applicable laws,
                  such provision shall be severed from this Agreement, but in
                  all other respects the remainder of this Agreement will not be
                  affected and all other terms shall continue to be in full
                  force and effect.
                </li>
              </p>
              <h5 className="agreement-subheader">14. GOVERNING LAW</h5>
              <p>
                <li className="agreement-list-item">
                  This Agreement shall be construed in accordance with the laws
                  of the State of Connecticut and the parties hereby irrevocably
                  submit to the exclusive jurisdiction of the federal or state
                  courts sitting in the State of Connecticut to settle any
                  disputes which may arise in connection with this Agreement
                </li>
              </p>
              <hr className="agreement-divider" />
              <div className="btn-container">
                <button
                  className="subscription-close-button"
                  onClick={handleAgreementClick}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
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
    </>
  );
};

export default TrialSubscriptionComponent;
