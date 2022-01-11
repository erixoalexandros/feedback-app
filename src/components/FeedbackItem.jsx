import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ id, rating, text, setFeedback }) {
  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback((prevFeedback) => {
        return prevFeedback.filter((item) => item.id !== id);
      });
    }
  };
  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
};

export default FeedbackItem;
