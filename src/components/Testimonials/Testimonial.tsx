import { FC } from "react";

interface Testimonial {
  id?: number;
  name: string;
  feedback: string;
  profession: string;
  avatar: string;
}

interface Props {
  testimonial: Testimonial;
}

const Testimonial: FC<Props> = ({ testimonial }) => {
  return (
    <div className="testimonial-item bg-light rounded p-3">
      <div className="bg-white border rounded p-4">
        <p>{testimonial.feedback}</p>
        <div className="d-flex align-items-center">
          <img
            className="img-fluid flex-shrink-0 rounded"
            src={testimonial.avatar}
            style={{ width: "45px", height: "45px" }}
          />
          <div className="ps-3">
            <h6 className="fw-bold mb-1">{testimonial.name}</h6>
            <small>{testimonial.profession}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
