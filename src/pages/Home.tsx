import carouselFirstImg from "../img/carousel-1.jpg";
import carouselSecondImg from "../img/carousel-2.jpg";
import PropertySearch from "../components/shared/PropertySearch";
import ContactCertifiedAgentSection from "../components/shared/ContactCertifiedAgentSection";
import PropertyAgentsSection from "../components/shared/PropertyAgentsSection";
import PropertyListingSection from "../components/PropertyList/PropertyListingSection";
import PropertyTypeSection from "../components/PropertyType/PropertyTypeSection";
import ClientsSection from "../components/Testimonials/ClientsSection";
import AdvertiseSection from "../components/About/AdvertiseSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

const Home = () => {
  return (
    <>
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">
              The Future <span className="text-primary">of Realty</span>
              Today.
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              At Realture, we blend innovation with real estate, offering
              seamless virtual tours and smarter property solutions. Experience
              the next generation of buying, selling, and renting—effortless,
              immersive, and future-ready!
            </p>
            <a
              href=""
              className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <Swiper
              className="owl-carousel header-carousel"
              modules={[Navigation, Autoplay]} // Replaces loop and autoplay
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Replaces autoplay
              speed={1500} // Replaces smartSpeed
              loop={true} // Replaces loop
              pagination={{ clickable: true }} // Replaces dots
            >
              <SwiperSlide className="owl-carousel-item">
                <img className="img-fluid" src={carouselFirstImg} alt="" />
              </SwiperSlide>
              <SwiperSlide className="owl-carousel-item">
                <img className="img-fluid" src={carouselSecondImg} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <PropertySearch />
      <PropertyTypeSection />
      <AdvertiseSection />
      <PropertyListingSection />
      <ContactCertifiedAgentSection />
      <PropertyAgentsSection />
      <ClientsSection />
    </>
  );
};

export default Home;
