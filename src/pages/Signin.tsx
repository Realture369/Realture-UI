import { motion } from "framer-motion";
import { FC, useState } from "react";

const Signin: FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    setUserName("");
    setPassword("");
  };

  return (
    <motion.div
      className="container-fluid bg-transparent mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{ padding: "35px" }}
    >
      <div className="container">
        <div className="row g-2">
          <div className="col-md-6 offset-md-3">
            {/* <h2 className="text-center">SIGN IN</h2> */}
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <h2 className="card-title text-center">SIGN IN</h2>
                <form onSubmit={handleSignIn}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-font">
                      <strong>Email address</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border py-3"
                        placeholder="Email Address / Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label label-font">
                      <strong>Password</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type={passwordVisibility ? "text" : "password"}
                        className="form-control border py-3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="input-group-text"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <i
                          className={
                            passwordVisibility
                              ? "bi bi-eye-fill"
                              : "bi bi-eye-slash-fill"
                          }
                        ></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-dark border-0 w-100 py-3"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
