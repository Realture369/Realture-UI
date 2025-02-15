import { motion } from "framer-motion";
import { PROPERTY_TYPES } from "../../data/property-types";
import PropertyTypeCard from "./PropertyTypeCard";

const PropertyTypeSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "600px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="mb-3">Property Types</h1>
          <p>
            Discover a wide range of properties tailored to your needs. Whether
            you're looking for a modern apartment, a luxurious villa, or a
            commercial space, we offer exceptional real estate options to suit
            every lifestyle and investment goal.
          </p>
        </motion.div>
        <div className="row g-4">
          {PROPERTY_TYPES.map((propertyType) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              key={propertyType.id}
              className="col-lg-3 col-sm-6"
            >
              <PropertyTypeCard propertyType={propertyType} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeSection;
