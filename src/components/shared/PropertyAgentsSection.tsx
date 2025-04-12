import { FC } from "react";
import { AGENTS } from "../../data/property-agents";

const PropertyAgentsSection: FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Property Agents</h1>
          <p>
            Meet our team of experienced and dedicated real estate agents who
            are committed to helping you find the perfect property. Whether
            you're buying, selling, or investing, our experts provide
            personalized guidance, market insights, and seamless transaction
            support to ensure a smooth real estate experience.
          </p>
        </div>
        <div className="row g-4">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src={agent.img}
                    alt={agent.fullName}
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{agent.fullName}</h5>
                  <small>{agent.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAgentsSection;
