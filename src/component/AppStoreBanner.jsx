import React from "react";
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/play_store.png";
import Delivery from "../assets/delivery.gif";

const AppStoreBanner = () => {
  return (
    <section className="bg-orange-100">
      <div className="container py-10">
        <div className="text-black sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="w-full">
              <img
                src={Delivery}
                alt="Delivery GIF"
                className="w-full h-auto rounded-xl border-white border-double border-6"
              />
            </div>
            <div>
              <div className="space-y-6 max-w-xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl leading-normal font-bold tracking-tight text-gray-900">
                  Get Food <span className="text-orange-500">Deliveries</span>
                </h1>
                <p className="text-center sm:px-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique magnam harum accusantium odit?
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <a href="#">
                    <img
                      src={PlayStoreImg}
                      alt="Play Store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={AppStoreImg}
                      alt="App Store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStoreBanner;
