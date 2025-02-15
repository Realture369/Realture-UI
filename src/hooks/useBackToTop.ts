import { useEffect } from "react";

const useBackToTop = () => {
  useEffect(() => {
    const backToTopBtn = document.querySelector(".back-to-top") as HTMLElement;

    if (!backToTopBtn) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.opacity = "1";
      } else {
        backToTopBtn.style.opacity = "0";
        setTimeout(() => {
          backToTopBtn.style.display = "none";
        }, 500);
      }
    };

    const handleBackToTopClick = (event: Event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTopBtn.addEventListener("click", handleBackToTopClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTopBtn.removeEventListener("click", handleBackToTopClick);
    };
  }, []);
};

export default useBackToTop;
