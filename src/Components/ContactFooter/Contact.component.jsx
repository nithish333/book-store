import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="contactTitle">Contact us</h1>
      <div className="contact">
        <div className="findUs">
          <h3>Where to find us :</h3>
          <p>1-39,Drax street</p>
          <p>Mutant city</p>
          <p>New york</p>
          <p>+1-096-356-6789</p>
        </div>
        <div className="followUs">
          <h3>Follow us on Social Media</h3>
          <div
            style={{
              margin: "10px",
            }}
            class="icons"
          >
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagramSquare size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
