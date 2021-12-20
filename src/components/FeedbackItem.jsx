function FeedbackItem({ index, rating, text, setFeedback }) {
  const handleFeedbackRating = () => {
    console.log(index);
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleFeedbackRating}>Click</button>
    </div>
  );
}

export default FeedbackItem;
