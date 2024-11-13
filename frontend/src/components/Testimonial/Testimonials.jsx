import React from "react";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    resposive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <h5 id="textTestimonial">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </h5>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3"> XYX</h6>
            <h6> Customer </h6>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </h5>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3"> Dooodles</h6>
            <h6> Customer </h6>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </h5>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3"> Dorki</h6>
            <h6> Customer </h6>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </h5>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3"> Domey</h6>
            <h6> Customer </h6>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </h5>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Galin</h6>
            <h6> Customer </h6>
          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Testimonials;
