import React from "react";
import Hero from "./Pages/Hero/Hero";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div className="container">
      <section id="home">
      <Hero />
      </section>
      <section id="services">
      <Services />
      </section>
      <section id="portfolio">
      <Portfolio />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </div>
  );
};

export default App;
