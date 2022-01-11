import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const averageRating = (
    feedback.reduce((total, { rating }) => total + rating, 0) / feedback.length
  ).toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
