import { IconType } from "react-icons";

interface PropertyType {
  id: number;
  icon: IconType;
  title: string;
  count: number;
}

interface Props {
  propertyType: PropertyType;
}

const PropertyTypeCard = ({ propertyType }: Props) => {
  const { icon: Icon, title, count } = propertyType;

  return (
    <article>
      <a className="cat-item d-block bg-light text-center rounded p-3" href="">
        <div className="rounded p-4">
          <header className="mb-3">
            <Icon className="svg" size={32} color="#00b98e" />
          </header>
          <h6>{title}</h6>
          <span>{count} Properties</span>
        </div>
      </a>
    </article>
  );
};

export default PropertyTypeCard;
