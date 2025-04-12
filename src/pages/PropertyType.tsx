import { FC } from "react";
import PropertyTypeSection from "../components/PropertyType/PropertyTypeSection";
import HeaderSection from "../components/shared/HeaderSection";
import PropertySearch from "../components/shared/PropertySearch";

const PropertyType: FC = () => {
  return (
    <>
      <HeaderSection heading="Property Type" />
      <PropertySearch />
      <PropertyTypeSection />
    </>
  );
};

export default PropertyType;
