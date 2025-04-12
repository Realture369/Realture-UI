import { FC } from "react";
import PropertyListingSection from "../components/PropertyList/PropertyListingSection";
import ContactCertifiedAgentSection from "../components/shared/ContactCertifiedAgentSection";
import HeaderSection from "../components/shared/HeaderSection";
import PropertySearch from "../components/shared/PropertySearch";

const PropertyList: FC = () => {
  return (
    <>
      <HeaderSection heading="Property List" />
      <PropertySearch />
      <PropertyListingSection />
      <ContactCertifiedAgentSection />
    </>
  );
};

export default PropertyList;
