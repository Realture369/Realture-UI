import { FC } from "react";
import HeaderSection from "../components/shared/HeaderSection";
import PropertySearch from "../components/shared/PropertySearch";
import ClientsSection from "../components/Testimonials/ClientsSection";

const Testimonials: FC = () => {
  return (
    <>
      <HeaderSection heading="Testimonial" />
      <PropertySearch />
      <ClientsSection />
    </>
  );
};

export default Testimonials;
