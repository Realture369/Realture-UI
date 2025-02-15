import { useEffect } from "react";

const useSticyNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-bar");

      if (!navbar) return;

      if (window.scrollY > 45) navbar.classList.add("sticky-top");
      else navbar.classList.remove("sticky-top");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useSticyNavbar;
