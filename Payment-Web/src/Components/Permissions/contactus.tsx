import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./terms.css";

const Contactus = () => {
  const [state, handleSubmit] = useForm("mbjvqwyd");

  return (
    <>
      <section className="terms-section">
        <div className="terms-layout">
          <h5>Contact Us</h5>
          <p>Last updated on Jan 7th, 2024</p>

          <p>You may contact us using the information below:</p>

          <ul>
            <li>
              <strong>Merchant Legal entity name:</strong> MAANG TECHNOLOGIES
              PRIVATE LIMITED
            </li>
            <li>
              <strong>Registered Address:</strong> FLAT NO.3327, TOWER NO.3,
              SERI LINGAMPALLY, GACHIBOWLI, K. V. RANGAREDDY HYDERABAD TELANGANA
              500032
            </li>
            <li>
              <strong>Operational Address:</strong> FLAT NO.3327, TOWER NO.3,
              SERI LINGAMPALLY, GACHIBOWLI, K. V. RANGAREDDY HYDERABAD TELANGANA
              500032
            </li>
            <li>
            <strong>Telephone No:</strong> <a href="tel:+917569546490">+91 75695 46490</a>
            </li>
            <li>
              <strong>E-Mail ID:</strong>{" "}
              <a href="mailto:info@maangtechnologies.com">
                info@maangtechnologies.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contactus;
