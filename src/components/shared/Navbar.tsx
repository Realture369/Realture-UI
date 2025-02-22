import { useState } from "react";
import { MENU } from "../../data/menu";
import realtureLogo from "../../assets/relature-logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import useSticyNavbar from "../../hooks/useSticyNavbar";

const Navbar: React.FC = () => {
  useSticyNavbar();

  // State to manage navbar collapse
  const [isNavOpen, setIsNavOpen] = useState(false);
  // State to track open dropdowns
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Toggle the mobile navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Toggle dropdown menus
  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

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
              src={realtureLogo}
              alt="Icon"
              style={{ width: "30px", height: "32px" }}
            />
          </div>
          <h1 className="m-0 text-primary">Realture</h1>
        </Link>

        {/* Navbar Toggle Button (for mobile) */}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            {MENU.map((menuItem) =>
              menuItem.children && menuItem.children.length > 0 ? (
                <div key={menuItem.id} className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn"
                    onClick={() => toggleDropdown(menuItem.id)}
                  >
                    {menuItem.label}
                  </button>
                  <div
                    className={`dropdown-menu rounded-0 m-0 ${
                      openDropdown === menuItem.id ? "show" : ""
                    }`}
                  >
                    {menuItem.children.map((childItem) => (
                      <NavLink
                        key={childItem.id}
                        to={childItem.link}
                        className="dropdown-item"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {childItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={menuItem.id}
                  to={menuItem.link || "/"}
                  className="nav-item nav-link"
                  onClick={() => setIsNavOpen(false)}
                >
                  {menuItem.label}
                </NavLink>
              )
            )}
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
