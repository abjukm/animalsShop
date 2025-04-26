import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cats from "../pages/Cats";
import Dogs from "../pages/Dogs";
import Birds from "../pages/Birds";
import Fishes from "../pages/Fishes";
import Intro from "../components/Intro";
import Section from "../components/Registr/Section";
import React from "react";
import MembershipPlans from "../components/MembershipPlans";

export const Navigation = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/fishes" element={<Fishes />} />
          <Route path="/registr" element={<Section />} />
          <Route path="/join" element={<MembershipPlans />} />
        </Routes>
      </Router>
    </>
  );
};
