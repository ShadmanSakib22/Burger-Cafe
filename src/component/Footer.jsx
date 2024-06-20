import React from "react";
import logo from "../assets/homeburger.png";
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/play_store.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-100 to to-white border-t-4 border-lightGold">
      <div className="px-3 pt-6 lg:px-9 border-t-2  border-darkGold">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/*Company Info*/}
          <div className="sm:col-span-2 pl-2">
            <a href="#" className="inline-flex items-center">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="ml-2 text-2xl leading-normal font-extrabold tracking-tight text-gray-800">
                Monster Burger
              </span>
            </a>
            <div className="mt-2 lg:max-w-xl">
              <p className="text-sm text-gray-800 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, ut optio itaque expedita ipsa rerum ducimus
                temporibus fuga reprehenderit cumque. Quo officiis quod aliquid
                praesentium nisi officia molestias ex quidem?
                <ul className="my-2 list-disc">
                  <span className="font-semibold">We are open on:</span>
                  <li className="mx-6">Weekends: 10am-10pm</li>
                  <li className="mx-6">Weekdays: 9am-8pm</li>
                  <li className="mx-6">Closed on Fridays!</li>
                </ul>
              </p>
            </div>
          </div>
          <hr class="w-full md:hidden" />

          {/*Quicklinks*/}
          <div className="flex flex-col gap-2 text-sm pl-2">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Quicklinks
            </p>
            <a href="#hero" className="hover:translate-x-1 hover:underline">
              Home
            </a>
            <a href="#services" className="hover:translate-x-1 hover:underline">
              Services
            </a>
            <a href="#reserve" className="hover:translate-x-1 hover:underline">
              Reservations
            </a>
            <a
              href="#testimonial"
              className="hover:translate-x-1 hover:underline"
            >
              Testimonials
            </a>
            <a href="#faq" className="hover:translate-x-1 hover:underline">
              Faq
            </a>
            <a href="#contact" className="hover:translate-x-1 hover:underline">
              Contact
            </a>
          </div>

          <hr class="w-full md:hidden" />
          {/*App & Contact*/}
          <div className="pl-2">
            <p className="text-base font-bold tracking-wide text-gray-900 mb-3">
              Download App for Delivery Services
            </p>
            <div className="flex pb-6 gap-2">
              <a href="https://play.google.com/" target="_blank">
                <img
                  src={PlayStoreImg}
                  alt="Playstore Button"
                  className="w-[120px]"
                />
              </a>
              <a href="https://www.apple.com/store" target="_blank">
                <img
                  src={AppStoreImg}
                  alt="AppStore Button"
                  className="w-[120px]"
                />
              </a>
            </div>
            <p className="text-base font-bold tracking-wide text-gray-900">
              Customer Service
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a href="mailto:admin@company.com" title="send email">
                service@example.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a href="tel:+123456789" title="call us">
                +1 234-567-8904
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-5 border-t lg:flex-row pl-2 bg-gradient-to-r  from-darkGold to-darkRed px-3 lg:px-9">
        <p className="text-sm text-gray-800">
          © Copyright 2023 Monster Burger. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
