import useBackToTop from "../../hooks/useBackToTop";

const BackToTopButton = () => {
  useBackToTop();

  return (
    <button
      type="button"
      //   style={{
      //     display: "none",
      //     position: "fixed",
      //     bottom: "20px",
      //     right: "20px",
      //     opacity: 0,
      //     transition: "opacity 0.5s",
      //   }}
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
