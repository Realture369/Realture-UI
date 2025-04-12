import { FC } from "react";

interface Property {
  id: number;
  img: string;
  name: string;
  type: string;
  isForSale: boolean;
  price: string;
  location: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
}

interface Props {
  property: Property;
}

const Property: FC<Props> = ({ property }) => {
  const status = property.isForSale ? "For Sell" : "For Rent";

  return (
    <div className="property-item rounded overflow-hidden">
      <div className="position-relative overflow-hidden">
        <a href="">
          <img className="img-fluid" src={property.img} alt={property.name} />
        </a>
        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
          {status}
        </div>
        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
          {property.type}
        </div>
      </div>
      <div className="p-4 pb-0">
        <h5 className="text-primary mb-3">{property.price}</h5>
        <a className="d-block h5 mb-2" href="">
          {property.name}
        </a>
        <p>
          <i className="fa fa-map-marker-alt text-primary me-2"></i>
          {property.location}
        </p>
      </div>
      <div className="d-flex border-top">
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-ruler-combined text-primary me-2"></i>
          {property.size}
        </small>
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-bed text-primary me-2"></i>
          {property.bedrooms} Bed
        </small>
        <small className="flex-fill text-center py-2">
          <i className="fa fa-bath text-primary me-2"></i>
          {property.bathrooms} Bath
        </small>
      </div>
    </div>
  );
};

export default Property;
