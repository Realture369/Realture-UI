import { FC } from "react";
import ContactCertifiedAgentSection from "../components/shared/ContactCertifiedAgentSection";
import HeaderSection from "../components/shared/HeaderSection";
import PropertyAgentsSection from "../components/shared/PropertyAgentsSection";
import PropertySearch from "../components/shared/PropertySearch";

const PropertyAgents: FC = () => {
  return (
    <>
      <HeaderSection heading="Property Agent" />
      <PropertySearch />
      <PropertyAgentsSection />
      <ContactCertifiedAgentSection />
    </>
  );
};

export default PropertyAgents;
