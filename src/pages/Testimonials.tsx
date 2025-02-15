import HeaderSection from "../components/shared/HeaderSection";
import PropertySearch from "../components/shared/PropertySearch";
import ClientsSection from "../components/Testimonials/ClientsSection";

const Testimonials = () => {
  return (
    <>
      <HeaderSection heading="Testimonial" />
      <PropertySearch />
      <ClientsSection />
    </>
  );
};

export default Testimonials;
