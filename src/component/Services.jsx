import React from "react";
import { MdEvent, MdDeliveryDining, MdTableBar } from "react-icons/md";

const Services = () => {
  return (
    <div className="py-16 w-full px-8 bg-red-50" id="services">
      <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl leading-normal font-extrabold text-gray-800 tracking-tight aos-init aos-animate mb-1"
        >
          Our <span className="text-lightRed">Services</span>
        </h1>
        <p
          className="text-base text-gray-700 md:text-md aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </p>
      </div>
      <div
        className="grid max-w-md gap-8 row-gap-10 mx-auto lg:max-w-full lg:grid-cols-3 md:max-w-full md:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Card 1: Reserve Table */}
        <div className="flex flex-col sm:flex-row  p-4 shadow-xl rounded-xl bg-white hover:scale-110">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <MdTableBar className="w-12 h-12 text-lightRed" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Reserve Table</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm px-4 py-2 text-gray-700 list-disc">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <a
              href="/reserve"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-lightRed hover:text-darkRed"
            >
              Learn more
            </a>
          </div>
        </div>
        {/* Card 2: Food Delivery */}
        <div className="flex flex-col sm:flex-row  p-4 shadow-xl rounded-xl bg-white hover:scale-110">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <MdDeliveryDining className="w-12 h-12 text-lightRed" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Food Delivery</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm px-4 py-2 text-gray-700 list-disc">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <br />
            </ul>
            <a
              href="/appbanner"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-lightRed hover:text-darkRed"
            >
              Learn more
            </a>
          </div>
        </div>
        {/* Card 3: Host Events */}
        <div className="flex flex-col sm:flex-row md:col-span-2 md:mx-auto lg:col-span-1 p-4 shadow-xl rounded-xl bg-white hover:scale-110">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <MdEvent className="w-12 h-12 text-lightRed" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Host Events</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm px-4 py-2 text-gray-700 list-disc">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-lightRed hover:text-darkRed"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
