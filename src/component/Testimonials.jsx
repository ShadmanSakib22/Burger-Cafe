import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Jane Doe",
      rating: 5,
      imgSrc: "./people/wom1.jpeg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "John Doe",
      rating: 4,
      imgSrc: "./people/man1.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Jane Smith",
      rating: 5,
      imgSrc: "./people/wom2.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "John Smith",
      rating: 4,
      imgSrc: "./people/man2.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Emily Johnson",
      rating: 5,
      imgSrc: "./people/wom3.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Michael Brown",
      rating: 3,
      imgSrc: "./people/man3.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Sarah Davis",
      rating: 4,
      imgSrc: "./people/wom4.jpeg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "David Wilson",
      rating: 5,
      imgSrc: "./people/man4.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",
      name: "Laura Martinez",
      rating: 4,
      imgSrc: "./people/wom5.webp",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="text-yellow-500">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-10 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
          What customers are saying
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-1 px-3">
              <div className="p-12 rounded-lg border border-solid border-gray-200 shadow-lg mb-8 bg-white">
                <p className="text-xl font-semibold">{testimonial.text}</p>
                <p className="mt-6">{testimonial.detail}</p>
                <div className="flex items-center mt-8">
                  <img
                    className="w-12 h-12 mr-4 rounded-full"
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                  />
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {renderStars(testimonial.rating)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
