import { FC, useState } from "react";

const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
              style={{ height: "150px" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
