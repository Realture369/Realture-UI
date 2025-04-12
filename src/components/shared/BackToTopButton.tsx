import useBackToTop from "../../hooks/useBackToTop";

const BackToTopButton = () => {
  useBackToTop();

  return (
    <button
      type="button"
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
