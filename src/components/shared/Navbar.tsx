import { MENU } from "../../data/menu";
import iconDealImg from "../../img/icon-deal.png";
import { Link, NavLink } from "react-router-dom";
import useSticyNavbar from "../../hooks/useSticyNavbar";

const Navbar = () => {
  useSticyNavbar();

  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src={iconDealImg}
              alt="Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <h1 className="m-0 text-primary">Realture</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            {MENU.map((menuItem) => {
              if (menuItem.children && menuItem.children.length > 0) {
                return (
                  <div key={menuItem.id} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      {menuItem.label}
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      {menuItem.children.map((childItem) => (
                        <NavLink
                          key={childItem.id}
                          to={childItem.Link}
                          className="dropdown-item"
                        >
                          {childItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={menuItem.id}
                  to={menuItem.link || "/"}
                  className="nav-item nav-link"
                >
                  {menuItem.label}
                </NavLink>
              );
            })}
          </div>
          <button className="btn btn-primary px-3 d-none d-lg-flex">
            Add Property
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
