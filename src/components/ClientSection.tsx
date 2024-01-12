import React from "react";
import "./ClientSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4, // Número de elementos a mostrar en cada slide
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the time (in milliseconds) between slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-client">
      <h1>My Clients</h1>
      <Slider {...settings}>
        <div>
          <img
            src="../images/clients/client1.png"
            alt="Cliente 1"
            className="img-carousel"
          />
        </div>
        <div>
          <img
            src="../images/clients/client2.png"
            alt="Cliente 2"
            className="img-carousel"
          />
        </div>
        <div>
          <img
            src="../images/clients/client3.png"
            alt="Cliente 3"
            className="img-carousel"
          />
        </div>
        <div>
          <img
            src="../images/clients/client4.png"
            alt="Cliente 4"
            className="img-carousel"
          />
        </div>
        <div>
          <img
            src="../images/clients/client5.png"
            alt="Cliente 5"
            className="img-carousel"
          />
        </div>
        <div>
          <img
            src="../images/clients/client6.png"
            alt="Cliente 6"
            className="img-carousel"
          />
        </div>
        {/* Agrega más elementos según sea necesario */}
      </Slider>
    </div>
  );
};

export default ClientSection;
