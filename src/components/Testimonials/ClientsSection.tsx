import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../../data/testimonials";
import Testimonial from "./Testimonial";

const ClientsSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>
            Our clients love their home-buying and selling experience with us!
            We take pride in providing top-notch service, expert guidance, and
            seamless transactions. Hear what they have to say about finding
            their dream homes with us.
          </p>
        </div>
        <Swiper
          className="owl-carousel testimonial-carousel wow fadeInUp"
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
          speed={1000} // SmartSpeed
          spaceBetween={24} // Margin
          loop={true} // Loop
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 }, // Responsive items
            992: { slidesPerView: 2 },
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsSection;
