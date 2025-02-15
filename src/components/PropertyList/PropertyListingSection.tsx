import { useState } from "react";
import Property from "./Property";
import { PROPERTIES } from "../../data/properties";

interface TabHeading {
  id: number;
  label: string;
  value: string;
}

const FILTERS = [
  {
    id: 1,
    label: "Featured",
    value: "featured",
  },
  {
    id: 2,
    label: "For Sell",
    value: "sale",
  },
  {
    id: 3,
    label: "For Rent",
    value: "rent",
  },
];

const PropertyListingSection = () => {
  const [selectedTab, setSelectedTab] = useState<TabHeading | null>(FILTERS[0]);

  const handleSelect = (selectedItem: TabHeading) => {
    setSelectedTab(selectedItem);
  };

  const sellingProperties = PROPERTIES.filter((property) => property.isForSale);
  const rentalProperties = PROPERTIES.filter((property) => !property.isForSale);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Property Listing</h1>
              <p>
                Explore our exclusive property listings featuring premium homes,
                commercial spaces, and investment opportunities. Whether you're
                searching for a cozy apartment, a spacious villa, or a prime
                business location, we have the perfect property for you.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              {FILTERS.map((item) => (
                <li
                  key={item.id}
                  className="nav-item me-2"
                  onClick={() => handleSelect(item)}
                >
                  <a
                    className={
                      item.id === selectedTab?.id
                        ? "btn btn-outline-primary active"
                        : "btn btn-outline-primary"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div
            id="tab-1"
            className={
              selectedTab?.id === FILTERS[0].id
                ? "tab-pane fade show p-0 active"
                : "tab-pane fade show p-0"
            }
          >
            <div className="row g-4">
              {PROPERTIES.map((property) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={property.id}
                >
                  <Property property={property} />
                </div>
              ))}
              <div
                className="col-12 text-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="btn btn-primary py-3 px-5" href="">
                  Browse More Property
                </a>
              </div>
            </div>
          </div>
          <div
            id="tab-2"
            className={
              selectedTab?.id === FILTERS[1].id
                ? "tab-pane fade show p-0 active"
                : "tab-pane fade show p-0"
            }
          >
            <div className="row g-4">
              {sellingProperties.map((property) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={property.id}
                >
                  <Property property={property} />
                </div>
              ))}
              <div className="col-12 text-center">
                <a className="btn btn-primary py-3 px-5" href="">
                  Browse More Property
                </a>
              </div>
            </div>
          </div>
          <div
            id="tab-3"
            className={
              selectedTab?.id === FILTERS[2].id
                ? "tab-pane fade show p-0 active"
                : "tab-pane fade show p-0"
            }
          >
            <div className="row g-4">
              {rentalProperties.map((property) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={property.id}
                >
                  <Property property={property} />
                </div>
              ))}
              <div className="col-12 text-center">
                <a className="btn btn-primary py-3 px-5" href="">
                  Browse More Property
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingSection;
