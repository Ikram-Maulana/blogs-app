import React, { useEffect } from "react";
import "./style/section.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home - The React Project";
  }, []);

  return (
    <section className="container p-5 mx-auto">
      <h1 className="section-title">Welcome to My Website Project</h1>
      <p className="section-description">
        Hello everyone, I am ikram maulana. on this website you can get
        information about my profile and my interest in technology.
      </p>
    </section>
  );
};

export default Home;
