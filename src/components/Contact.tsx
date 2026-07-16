import { MdArrowOutward, MdCopyright } from "react-icons/md";
import ContactForm from "./ContactForm";
import Lanyard from "./Lanyard";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        {/* Header */}
        <div className="contact-header-content">
          <p className="contact-tag">C O N T A C T</p>
          <h3 className="contact-heading">Let's build something exceptional</h3>
          <p className="contact-desc">
            Send your requirement directly and I will respond with a clear implementation plan.
          </p>
        </div>

        {/* Grid: Form + ID Card */}
        <div className="contact-grid">
          <div className="contact-form-col">
            <ContactForm />
          </div>
          <div className="contact-card-col">
            <Lanyard position={[0, 0, 9]} gravity={[0, -40, 0]} frontImage="/images/me.png" backImage="/images/cyberpunk-back.png" />
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mrsnewzebral84@gmail.com" data-cursor="disable">
                mrsnewzebral84@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919599084183" data-cursor="disable">
                +91 9599084183
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shivamojha-coder"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-ojha-900551358/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/itx._.shiivam.__/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivam Ojha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
