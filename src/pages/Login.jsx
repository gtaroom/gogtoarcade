import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the email and password fields are empty
    if (!email || !password) {
      setError("Email and password are required.");
      return; // Stop the execution if any field is empty
    }

    try {
      const response = await axios.post(
        "https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/api/login",
        {
          email,
          password,
        }
      );

      // const response = await axios.get("https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/test", {});
      // console.log(response);

      // Handle successful response
      if (response.status === 200) {
        const token = response.data.token;

        // Save the token to sessionStorage
        sessionStorage.setItem("authToken", token);

        // Redirect or update state
        window.location.href = "/games";

        toast.success("Login Successful");
      }
    } catch (err) {
      // console.error("Login failed:", err.response?.data);
      toast.error("Login failed:", err.response?.data);

      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div className="games-flower"></div>

      <div className="container">
        <div className="auth-page">
          <div className="row">
            <div className="col-12">
              <h3 className="text-white justify-content-center align-items-center text-center">
                Fill the following form to sign-in and start playing!
              </h3>
            </div>
            <div className="col-12">
              <div className="auth-sub">
                <div className="auth-title mb-4">
                  <h4>Login to Play</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="mt-3">
                      Email Address
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      Password
                    </label>
                    <br />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {error && <p className="text-danger">{error}</p>}

                  <button type="submit" className="auth-btn">
                    Sign In
                  </button>
                </form>

                <p className="mt-3 auth-footer">
                  Don’t have an account? <Link to="/register">Sign Up Now</Link>
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

export default Login;
