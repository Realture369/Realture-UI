import { FC } from "react";
import callToActionImg from "../../img/call-to-action.jpg";

const ContactCertifiedAgentSection: FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded p-3">
          <div
            className="bg-white rounded p-4"
            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid rounded w-100"
                  src={callToActionImg}
                  alt=""
                />
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                  <h1 className="mb-3">Contact With Our Certified Agent</h1>
                  <p>
                    Connect with our experienced and certified real estate
                    agents for expert guidance in buying, selling, or renting
                    properties. We are committed to helping you find the perfect
                    home or investment with personalized support every step of
                    the way.
                  </p>
                </div>
                <a href="" className="btn btn-primary py-3 px-4 me-2">
                  <i className="fa fa-phone-alt me-2"></i>Make A Call
                </a>
                <a href="" className="btn btn-dark py-3 px-4">
                  <i className="fa fa-calendar-alt me-2"></i>Get Appoinment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCertifiedAgentSection;
