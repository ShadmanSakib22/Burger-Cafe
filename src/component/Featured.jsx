import React from "react";
import Slider from "react-slick";
import burger1 from "../assets/burger/burger1.png";
import burger2 from "../assets/burger/burger2.png";
import burger3 from "../assets/burger/burger3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Slower transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slower autoplay speed
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pb-[3rem] bg-white">
      <div className="container mt-[5rem] space-y-4 col-span-1 w-4/5">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h1 className="text-4xl font-bold text-dark">
            Pick your <span className="text-lightRed">Poison</span>
          </h1>
          <p className="text-sm opacity-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
            dolorem fuga.
          </p>
        </div>
        <Slider {...settings} className="border-2 border-gray-100 rounded-2xl">
          <div className="p-4 text-center space-y-6">
            <img
              src={burger1}
              alt="Chicken Burger"
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-darkRed">
                Chicken Burger
              </h1>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-4 text-center space-y-6">
            <img
              src={burger2}
              alt="Vegetable Burger"
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-darkRed">
                Vegetable Burger
              </h1>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-4 text-center space-y-6">
            <img
              src={burger3}
              alt="Monster Burger"
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-darkRed">
                Monster Burger
              </h1>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div
        id="reserve"
        className="container col-span-1 mt-[5rem] space-y-4 border-white border-4 border-double text-center bg-gradient-to-r from-darkRed to-dark rounded-2xl p-4 w-4/5"
      >
        <h1 className="text-4xl font-bold text-white">
          Reservation <span className="text-lightGold">Form</span>
        </h1>

        <form className="space-y-4 max-w-md mx-auto">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
          />
          <div className="flex space-x-4">
            <input
              type="date"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
            />
            <input
              type="time"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lightGold opacity-65"
            />
          </div>
          <p className="text-sm opacity-50 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            type="submit"
            className="w-full py-2 border-2 border-lightGold bg-black opacity-50 text-white font-bold rounded-md hover:bg-lightRed transition-colors"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Featured;
