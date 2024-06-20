import React from "react";
import HeroImg from "../assets/homeburger.png";
import Navbar from "./Navbar";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main
      className="md:pl-12 md:py-6 bg-gradient-to-r from-darkGold to-darkRed"
      id="hero"
    >
      <div className="md:border-2 border-dark md:border-r-0 md:rounded-l-xl">
        <section className="relative pb-8 bg-gradient-to-r from-dark to-lightRed w-full md:rounded-xl md:rounded-r-none shadow-md md:shadow-xl md:border-4 md:border-r-0 border-white">
          <div className="container">
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="pt-[5rem] grid grid-cols-1 md:grid-cols-2  place-items-center ">
              {/* text-content-section */}
              <div className="text-white mt-[2rem] lg:mt-[100px] md:mt-0 p-4 space-y-4">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text-3xl"
                >
                  Burger Cafe
                </h1>
                <h1
                  data-aos="fade-up"
                  className="text-5xl font-bold uppercase text-shadow text-lightGold"
                >
                  Finest Desi Burgers
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur soluta modi optio suscipit ex ipsum minus hic,
                  voluptates accusantium dolor!
                </p>
                <br />
                <a
                  href="#appstore"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="border border-lightGold px-4 py-2 rounded-lg m-2 hover:bg-lightRed"
                >
                  Order Now
                </a>
                <a
                  href="#reserve"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="border border-lightGold px-4 py-2 rounded-lg hover:bg-darkRed"
                >
                  Reserve Table
                </a>
              </div>
              {/* image section */}
              <div>
                <img
                  data-aos="zoom-in"
                  className="img-shadow relative z-[1] w-[400px] mt-2 lg:mt-12"
                  src={HeroImg}
                  alt="orange"
                />
              </div>
            </div>
          </div>

          {sidebar && (
            <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-lightRed z-10">
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-white flex flex-col justify-center items-center gap-6">
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-lightGold"></div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaYoutube className="text-2xl" />
                  </div>
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-lightGold"></div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Hero;
