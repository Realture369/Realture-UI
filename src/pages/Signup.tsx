import { motion } from "framer-motion";
import { FC, useState } from "react";

enum UserRoles {
  ADMIN = "admin",
  TOUR_CREATOR = "tour-creator",
  VIEWER = "viewer",
}

type UserRole = "admin" | "tour-creator" | "viewer";

interface SignUpDetail {
  fullName: string;
  emailAddress: string;
  userName?: string;
  password: string;
  profilePicture?: string;
  userRole: UserRole;
}

const Signup: FC = () => {
  const [userDetails, setUserDetails] = useState<SignUpDetail>({
    fullName: "",
    emailAddress: "",
    userName: "",
    password: "",
    profilePicture: "",
    userRole: UserRoles.VIEWER,
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleSignUp = () => {
    console.log(userDetails);
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
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <h2 className="card-title text-center">SIGN UP</h2>
                <form onSubmit={handleSignUp}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-font">
                      <strong>Full Name</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border py-3"
                        placeholder="Full Name"
                        value={userDetails?.fullName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            fullName: e.target.value,
                          })
                        }
                      />
                      <span className="input-group-text">
                        <i className="bi bi-person-vcard"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-font">
                      <strong>Email Address</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border py-3"
                        placeholder="Email Address"
                        value={userDetails?.emailAddress}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            emailAddress: e.target.value,
                          })
                        }
                      />
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-font">
                      <strong>Username</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border py-3"
                        placeholder="Username"
                        value={userDetails?.userName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            userName: e.target.value,
                          })
                        }
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
                        value={userDetails.password}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            password: e.target.value,
                          })
                        }
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
                    <label htmlFor="password" className="form-label label-font">
                      <strong>Profile Picture</strong>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        value={userDetails.profilePicture}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            profilePicture: e.target.value,
                          })
                        }
                        className="form-control border py-3"
                      />
                      <span className="input-group-text">
                        <i className="bi bi-upload"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label label-font">
                      <strong>User Role</strong>
                    </label>
                    <div className="input-group mb-3">
                      <select
                        value={userDetails.userRole}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            userRole: e.target.value as UserRole,
                          })
                        }
                        className="form-select border py-3"
                        id="password"
                      >
                        <option value={UserRoles.TOUR_CREATOR}>
                          Tour Creator
                        </option>
                        <option value={UserRoles.VIEWER}>Viewer</option>
                      </select>
                      <span className="input-group-text">
                        <i className="bi bi-upload"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-dark border-0 w-100 py-3"
                    >
                      Sign Up
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

export default Signup;
