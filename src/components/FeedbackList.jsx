import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, setFeedback }) {
  return (
    <div className="feedback-list">
      {feedback.map(({ id, rating, text }, index) => {
        return (
          <FeedbackItem
            key={id}
            index={index}
            rating={rating}
            text={text}
            setFeedback={setFeedback}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
