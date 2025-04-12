import { Link } from "react-router-dom";
import propertyOneImg from "../../img/property-1.jpg";
import propertyTwoImg from "../../img/property-2.jpg";
import propertyThreeImg from "../../img/property-3.jpg";
import propertyFourImg from "../../img/property-4.jpg";
import propertyFiveImg from "../../img/property-5.jpg";
import propertySixImg from "../../img/property-6.jpg";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              <a href="tel:+919952356169">+91 99523 56169</a>
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              <a href="mailto:realture369@gmail.com">realture369@gmail.com</a>
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <Link className="btn btn-link text-white-50" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link text-white-50" to="/contact">
              Contact Us
            </Link>
            <a className="btn btn-link text-white-50" href="">
              Our Services
            </a>
            <a className="btn btn-link text-white-50" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
              Terms & Condition
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Photo Gallery</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertyOneImg}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertyTwoImg}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertyThreeImg}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertyFourImg}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertyFiveImg}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src={propertySixImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>
              Subscribe to our newsletter for the latest property listings,
              market insights, and exclusive real estate updates.
            </p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Realture
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
