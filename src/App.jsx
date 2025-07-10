import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

import Graduation from "./pages/Graduation";
import Masters from "./pages/Masters";
import PostGraduation from "./pages/PostGraduation";
import CampusGallery from "./pages/CampusGallery";

const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <div className="container">
        <section id="program">
          <Title subTitle="Our PROGRAM" title="What We Offer" />
          <Programs />
        </section>
        <section id="about"><About /></section>
        <section id="campus">
          <Title subTitle="GLIMPSES" title="LPU Chronicle" />
          <Campus />
        </section>
        <section id="testimonials">
          <Title subTitle="TESTIMONIALS" title="Voices of Our Learners" />
          <Testimonials />
        </section>
        <section id="contact">
          <Title subTitle="CONTACT US" title="Get in Touch" />
          <Contact />
        </section>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/postgraduation" element={<PostGraduation />} />
        <Route path="/campus-gallery" element={<CampusGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
