import "./Contact.css";
import photo from "../imgs/b8-architecture-contact-image.jpg";
import { Outlet } from "react-router-dom";
import OffcanvasExample from "../Header/Header";

const Contact = () => {
  return (
    <div>
      <OffcanvasExample></OffcanvasExample>
      <Outlet></Outlet>
      <div className="photo"></div>
      <div className="container">
        <div className="text-block">
          <div className="royal">
            <h3> WE ARE ROYAL DOME</h3>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <p className="address"> Abu Dhabi | Al Ain</p>
            <p className="email">
              <a href="mailto:email@royal.dome">email@royal.dome</a>
            </p>
            <p className="office">
              <a href="tel:0097150000">Ofice: +97150000</a>
            </p>
            <p className="mobile">
              <a href="tel:0097150000">Mobile: +97150000</a>
            </p>
            <p className="website">royaldome.ae</p>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className="work">
          <div className="work-h">
            <h3>WRITE SOMETHING!</h3>
          </div>
          <div className="form">
            <div className="caption">
              <h3>Work With Us! </h3>
              <p className="email-work">
                <a href="mailto:email@royal.dome">email@royal.dome</a>
              </p>
            </div>
            <form>
              <input type="text" placeholder="Your Full Name"></input>
              <input type="text" placeholder="Your Full Phone"></input>
              <input type="email" placeholder="Your Full Email"></input>
              <input type="text" placeholder="Write Something"></input>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
