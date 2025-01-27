import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Prizes from "./pages/Prizes";
import Games from "./pages/Games";
import Support from "./pages/Support";
import TermsOfService from "./pages/Terms";
import ResponsibleGameplayPolicy from "./pages/ResponsibleGameplayPolicy";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FAQ from "./pages/Faqs";
import PrivacyPolicy from "./pages/Policy";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/rewards" element={<Prizes />} />
        <Route path="/games" element={<Games />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/social-policy" element={<ResponsibleGameplayPolicy />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* You can uncomment and add more routes here later */}
      </Routes>
    </Router>
  );
};

export default App;
