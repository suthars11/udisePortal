import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    const submitData = async () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        setLoading(true);
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
              method: "POST",
              headers: {
                Content_Type: "application/json",
              },
              body: JSON.stringify(formValues),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `HTTP error! Status: ${response.status}, Message: ${errorData.message}`
            );
          }

          const data = await response.json();
          console.log("Login successful:", data);
          navigate("/Dashboard");
        } catch (error) {
          console.error("There was an error logging in:", error);
          setApiError(
            "Login failed. Please check your credentials and try again."
          );
        } finally {
          setLoading(false);
          setIsSubmit(false);
        }
      }
    };
    submitData();
  }, [formErrors, isSubmit, formValues, navigate]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be exactly 5 characters";
    } else if (values.password.length > 5) {
      errors.password = "Password cannot exceed more than 5 characters";
    }
    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container-fluid container">
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex">
        <div className="auth-page-content overflow-hidden pt-sm-5 ">
          <div className="container">
            <div className="row d-flex">
              <div className="col-sm-12">
                <div className="card overflow-hidden">
                  <div className="rows row g-3">
                    <div className="col-sm-6">
                      <div className="p-sm-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay"></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4 text-center">
                            <a className="d-block">
                              <img src={logo} alt="Logo" height="100" />
                            </a>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 text-success"></i>
                            </div>
                            <div
                              id="qoutescarouselIndicators"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div className="carousel-inner text-center text-white pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-5 fst-italic">
                                    "Empowering Tomorrow, Today: Innovate,
                                    Integrate, Illuminate with Pytosoft IT
                                    Solution Pvt. Ltd"
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-5 fst-italic">
                                    "Lead Flow Analysis Data Analysis Mastery"
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-5 fst-italic">
                                    "Lead Flow Analysis AI Machine Learning
                                    Mastery"
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-sm-5 p-4">
                        <div>
                          <h4 className="text-primary">
                            Hello! let's get started
                          </h4>
                          <p className="text-muted">Sign in to continue.</p>
                        </div>
                        <div className="mt-4">
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className={`form-control ${
                                  formErrors.email ? "is-invalid" : ""
                                }`}
                                id="email"
                                placeholder="Enter email"
                                value={formValues.email}
                                onChange={handleChange}
                              />
                              {formErrors.email && (
                                <div className="invalid-feedback">
                                  {formErrors.email}
                                </div>
                              )}
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  className={`form-control pe-5 password-input ${
                                    formErrors.password ? "is-invalid" : ""
                                  }`}
                                  placeholder="Enter password"
                                  id="password"
                                  value={formValues.password}
                                  onChange={handleChange}
                                />
                                <button
                                  type="button"
                                  id="password-addon"
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                  style={{ border: "none" }}
                                  onClick={togglePasswordVisibility}
                                >
                                  <i
                                    className={`ri-${
                                      showPassword ? "eye-off" : "eye"
                                    }-fill align-middle`}
                                  ></i>
                                </button>
                                {formErrors.password && (
                                  <div className="invalid-feedback">
                                    {formErrors.password}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="auth-remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="auth-remember-check"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-4">
                              <button
                                className="btn btn-success w-100"
                                type="submit"
                                disabled={loading}
                              >
                                {loading ? "Signing In..." : "Sign In"}
                              </button>
                            </div>
                            {apiError && (
                              <div className="mt-3 alert alert-danger">
                                {apiError}
                              </div>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
