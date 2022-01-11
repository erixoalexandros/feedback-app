import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, setFeedback, setFeedbackStat }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map(({ id, rating, text }) => {
        return (
          <FeedbackItem
            key={id}
            id={id}
            rating={rating}
            text={text}
            setFeedback={setFeedback}
            setFeedbackStat={setFeedbackStat}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  setFeedback: PropTypes.func,
};

export default FeedbackList;
