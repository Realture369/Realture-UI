import { motion } from "framer-motion";
import { useState } from "react";

const PROPERTY_TYPES = [
  { id: 1, value: "apartment", label: "Apartment" },
  { id: 2, value: "independent_house", label: "Independent House" },
  { id: 3, value: "villa", label: "Villa" },
  { id: 4, value: "studio_apartment", label: "Studio Apartment" },
  { id: 5, value: "penthouse", label: "Penthouse" },
  { id: 6, value: "townhouse", label: "Townhouse" },
  { id: 7, value: "duplex", label: "Duplex" },
  { id: 8, value: "condominium", label: "Condominium (Condo)" },
  { id: 9, value: "bungalow", label: "Bungalow" },
  { id: 10, value: "office_space", label: "Office Space" },
  { id: 11, value: "retail_shop", label: "Retail Shop" },
  { id: 12, value: "showroom", label: "Showroom" },
  { id: 13, value: "co_working_space", label: "Co-working Space" },
  { id: 14, value: "shopping_mall_unit", label: "Shopping Mall Unit" },
  { id: 15, value: "commercial_complex", label: "Commercial Complex" },
  { id: 16, value: "warehouse", label: "Warehouse" },
  { id: 17, value: "factory", label: "Factory" },
  { id: 18, value: "manufacturing_unit", label: "Manufacturing Unit" },
  { id: 19, value: "industrial_shed", label: "Industrial Shed" },
  { id: 20, value: "cold_storage", label: "Cold Storage" },
  { id: 21, value: "residential_plot", label: "Residential Plot" },
  { id: 22, value: "commercial_plot", label: "Commercial Plot" },
  { id: 23, value: "industrial_land", label: "Industrial Land" },
  { id: 24, value: "agricultural_land", label: "Agricultural Land" },
  { id: 25, value: "farm_land", label: "Farm Land" },
  { id: 26, value: "hotel", label: "Hotel" },
  { id: 27, value: "resort", label: "Resort" },
  { id: 28, value: "pg_hostel", label: "PG/Hostel" },
  { id: 29, value: "guest_house", label: "Guest House" },
  { id: 30, value: "farmhouse", label: "Farmhouse" },
];

const LOCATIONS = [
  { id: 1, value: "adyar", label: "Adyar" },
  { id: 2, value: "annanagar", label: "Anna Nagar" },
  { id: 3, value: "ambattur", label: "Ambattur" },
  { id: 4, value: "chromepet", label: "Chromepet" },
  { id: 5, value: "egmore", label: "Egmore" },
  { id: 6, value: "guindy", label: "Guindy" },
  { id: 7, value: "kelambakkam", label: "Kelambakkam" },
  { id: 8, value: "kodambakkam", label: "Kodambakkam" },
  { id: 9, value: "kolathur", label: "Kolathur" },
  { id: 10, value: "madipakkam", label: "Madipakkam" },
  { id: 11, value: "medavakkam", label: "Medavakkam" },
  { id: 12, value: "mylapore", label: "Mylapore" },
  { id: 13, value: "nungambakkam", label: "Nungambakkam" },
  { id: 14, value: "omr", label: "OMR (Old Mahabalipuram Road)" },
  { id: 15, value: "perambur", label: "Perambur" },
  { id: 16, value: "porur", label: "Porur" },
  { id: 17, value: "purasaiwalkam", label: "Purasaiwalkam" },
  { id: 18, value: "sholinganallur", label: "Sholinganallur" },
  { id: 19, value: "tambaram", label: "Tambaram" },
  { id: 20, value: "thiruvanmiyur", label: "Thiruvanmiyur" },
  { id: 21, value: "t_nagar", label: "T Nagar" },
  { id: 22, value: "vadapalani", label: "Vadapalani" },
  { id: 23, value: "velachery", label: "Velachery" },
];

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("SearchQuery: ", searchQuery);
    console.log("PropertyType: ", propertyType);
    console.log("Location: ", location);
  };

  return (
    <motion.div
      className="container-fluid bg-primary mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{ padding: "35px" }}
    >
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select
                  className="form-select border-0 py-3"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  {PROPERTY_TYPES.map((propertyType) => (
                    <option key={propertyType.id} value={propertyType.value}>
                      {propertyType.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select border-0 py-3"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  {LOCATIONS.map((location) => (
                    <option key={location.id} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-dark border-0 w-100 py-3"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertySearch;
