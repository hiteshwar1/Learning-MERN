import PropTypes from "prop-types";
const GridItem = ({ isLastInRow }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-5 ${
        isLastInRow ? "mb-5" : "mb-5 mr-5"
      }`}
    >
      <img src="./src/assets/image 2.svg" alt="cardImage" />
      <h3 className="font-bold mt-6">
        Build continuous integration <br />
        pipelines with GitHub Actions
      </h3>
      <p className="mt-3">
        GitHub actions provide a really powerful <br /> way to integrate
        continuous integration <br />
        and delivery into your applications.
      </p>
    </div>
  );
};
GridItem.propTypes = {
  isLastInRow: PropTypes.bool.isRequired,
};

export default GridItem;
