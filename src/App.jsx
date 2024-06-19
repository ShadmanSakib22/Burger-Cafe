import React from "react";
import "../src/index.css";
import Hero from "./component/Hero.jsx";
import Services from "./component/Services.jsx";
import Featured from "./component/Featured.jsx";
import AppStoreBanner from "./component/AppStoreBanner.jsx";
import Testimonials from "./component/Testimonials.jsx";
import Contact from "./component/Contact.jsx";
import FAQ from "./Faq.jsx";
import Footer from "./component/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Featured />
      <AppStoreBanner />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
