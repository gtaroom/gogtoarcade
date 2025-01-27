import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

import axios from "axios"; // Import axios
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // const [errors, setErrors] = useState({});
  // const [errorMessage, setErrorMessage] = useState("");
  // const [loading, setLoading] = useState(true); // Loading state for fetching user data
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

  const getAuthToken = () => {
    return sessionStorage.getItem("authToken");
  };

  const token = getAuthToken();

  // Fetch user details
  const getDeets = async () => {
    try {
      const res = await axios.get(
        "https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/api/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const info = res.data.user;
      setFormData({
        firstname: info?.firstname || "",
        middlename: info?.middlename || "",
        lastname: info?.lastname || "",
        email: info?.email || "",
        addressOne: info?.addressOne || "",
        addressTwo: info?.addressTwo || "",
        zipcode: info?.zipcode || "",
        city: info?.city || "",
        state: info?.state || "",
        gender: info?.gender || "",
        dob: info?.dob || "",
      });
    } catch (error) {
      // setErrorMessage("Failed to load user details. Please try again.");
      //   console.error("Error fetching user details:", error.response?.data);
      toast.error("Error fetching user details:", error.response?.data);
    } finally {
      // setLoading(false); // Stop loading once data is fetched
    }
  };

  useEffect(() => {
    getDeets();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const validationErrors = {};

      // Validate required fields
      Object.keys(formData).forEach((field) => {
        if (
          field !== "middlename" &&
          field !== "addressTwo" &&
          !formData[field]
        ) {
          validationErrors[field] = `${field} is required`;
          toast.error(validationErrors[field]);
        }
      });

      // Password confirmation check
      if (formData.password !== formData.confirmPassword) {
        validationErrors.confirmPassword = "Passwords do not match";
        toast.error(validationErrors.confirmPassword);
      }

      if (Object.keys(validationErrors).length > 0) {
        // setErrors(validationErrors);
        return;
      }

      // Make the POST request to update user data
      const response = await axios.put(
        "https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/api/profile",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigate("/");
        toast.success("Profile updated successfully");
      } else {
        // console.error("Unexpected response:", response.status);
        toast.error("Error during profile update");
      }
    } catch (error) {
      // setErrorMessage("Profile update failed. Please try again.");
      //   console.error("Error during profile update:", error.response?.data);
      toast.error("Error during profile update:", error.response?.data);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>My Account | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="games-flower"></div>

      <div className="container ">
        <div className="auth-page  w-100">
          <div className="row  w-100">
            <div className="col-12 col-md-12  w-100">
              <div className="auth-sub">
                <div className="auth-title mb-4">
                  <h4> Edit my account</h4>
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
                      <option value={formData.state} selected>
                        {formData.state}
                      </option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
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
                      <option value={formData.gender} selected>
                        {formData.gender}{" "}
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
                    />
                  </div>

                  <button type="submit" className="auth-btn">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
