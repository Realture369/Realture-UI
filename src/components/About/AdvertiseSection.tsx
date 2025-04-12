import { motion } from "framer-motion";
import aboutImg from "../../img/about.jpg";
import { FC } from "react";

const AdvertiseSection: FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-lg-6"
          >
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src={aboutImg} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-lg-6"
          >
            <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
            <p className="mb-4">
              Realture is a leading provider of 360-degree photography and
              virtual tour solutions, helping businesses in housing,
              hospitality, interior design, and commercial sectors create
              immersive digital experiences. Founded with a passion for
              innovation and visual storytelling, our mission is to enhance
              customer engagement, drive sales, and improve online visibility
              through cutting-edge technology.
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>
              360-Degree Photography
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>
              Interactive Virtual Tours
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>
              Aerial Drone Photography & Videography
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3">Read More</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseSection;
