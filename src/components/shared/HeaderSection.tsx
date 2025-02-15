import HeaderImg from "../../img/header.jpg";

interface Props {
  heading: string;
}

const HeaderSection = ({ heading }: Props) => {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">{heading}</h1>
          {/* <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink to="#">Pages</NavLink>
              </li>
              <li
                className="breadcrumb-item text-body active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav> */}
        </div>
        <div className="col-md-6 animated fadeIn">
          <img className="img-fluid" src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
