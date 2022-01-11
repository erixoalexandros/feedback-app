import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleTextChange = (e) => {
    const input = e.target.value;
    if (input.trim() === "") {
      setMessage(null);
      setButtonDisabled(true);
    } else if (input.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      setButtonDisabled(true);
    } else {
      setMessage(null);
      setButtonDisabled(false);
    }

    setText(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      rating,
      text,
    };
    addFeedback(feedback);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button isDisabled={buttonDisabled} type="Submit">
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
