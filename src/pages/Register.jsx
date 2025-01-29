import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

import axios from "axios"; // Import axios
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    zipcode: "",
    city: "",
    state: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  // const [errorMessage, setErrorMessage] = useState(""); // For error messages
  // const [loading, setLoading] = useState(false); // For loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      if (!validateAge(formData.dob)) {
        toast.error("You must be at least 18 years old.");
        return;
      }
      const validationErrors = {};
      Object.keys(formData).forEach((field) => {
        if (
          field !== "middlename" &&
          field !== "addressTwo" &&
          !formData[field]
        ) {
          validationErrors[field] = `${field} is required`;
          toast.error(validationErrors[field]);

          return;
        }
      });

      // console.log(formData.dob);
      if (formData.password !== formData.confirmPassword) {
        // Password confirmation check
        validationErrors.confirmPassword = "Passwords do not match";
        toast.error(validationErrors.confirmPassword);
        return;
      }

      if (Object.keys(validationErrors).length > 0) {
        // console.log(Object.keys(validationErrors).length);
        // setErrors(validationErrors);
        return;
      } else {
        // Make the POST request to the API
        const response = await axios.post(
          "https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/api/register",
          formData, // formData is sent as JSON
          {
            headers: {
              "Content-Type": "application/json", // Ensuring the server knows we are sending JSON
            },
          }
        );
        // Check if the response status is 201 (Created)
        if (response.status === 201) {
          const token = response.data.token;

          // Save the token to sessionStorage
          sessionStorage.setItem("authToken", token);

          // Navigate to the games page
          navigate("/games");
          toast.success("Registration Successful");
        } else {
          toast.error("Error during registration");
        }
      }
    } catch (error) {
      // setErrorMessage("Registration failed. Please try again.");
      // console.error("Error during registration:", error.response?.data.error);
      if (error.response?.status === 500) {
        toast.error(error.response?.data.error.errors[0].message);
      } else {
        toast.error(error.response?.data.error);
      }

      return;
    } finally {
    }
  };

  const validateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Helmet>
        <title>Register | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="games-flower"></div>

      <div className="container">
        <div className="auth-page">
          <div className="row">
            <div className="col-12">
              <h3 className="text-white justify-content-center align-items-center text-center">
                Fill the following form to sign-up and start playing!
              </h3>
            </div>
            <div className="col-12">
              <div className="auth-sub">
                <div className="auth-title mb-4">
                  <h4>Register to Play</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstname" className="mt-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter first name"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="middlename" className="mt-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      id="middlename"
                      name="middlename"
                      placeholder="Enter middle name"
                      value={formData.middlename}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname" className="mt-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter last name"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="mt-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="addressOne" className="mt-2">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="addressOne"
                      name="addressOne"
                      placeholder="Enter address Line 1"
                      value={formData.addressOne}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="addressTwo" className="mt-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="addressTwo"
                      name="addressTwo"
                      placeholder="Enter address Line 2"
                      value={formData.addressTwo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zipcode" className="mt-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      placeholder="Enter Zip Code"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city" className="mt-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state" className="mt-2">
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      className="form-control"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected>
                        Select a State
                      </option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>

                      {/* Add state options here */}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender" className="mt-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dob" className="mt-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="mt-3">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="auth-btn">
                    Sign Up
                  </button>
                </form>

                <p className="mt-3 auth-footer">
                  Already have an account?
                  <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
