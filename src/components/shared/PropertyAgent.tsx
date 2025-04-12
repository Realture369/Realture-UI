import { FC } from "react";

interface Agent {
  id: number;
  img: string;
  fullName: string;
  designation: string;
}

interface Props {
  agent: Agent;
}

const PropertyAgent: FC<Props> = ({ agent }) => {
  return (
    <div
      key={agent.id}
      className="col-lg-3 col-md-6 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="team-item rounded overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={agent.img} alt={agent.fullName} />
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
  );
};

export default PropertyAgent;
