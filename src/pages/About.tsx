import AdvertiseSection from "../components/About/AdvertiseSection";
import ContactCertifiedAgentSection from "../components/shared/ContactCertifiedAgentSection";
import HeaderSection from "../components/shared/HeaderSection";
import PropertyAgentsSection from "../components/shared/PropertyAgentsSection";
import PropertySearch from "../components/shared/PropertySearch";

const About = () => {
  return (
    <>
      <HeaderSection heading="About Us" />
      <PropertySearch />
      <AdvertiseSection />
      <ContactCertifiedAgentSection />
      <PropertyAgentsSection />
    </>
  );
};

export default About;
