import { useState } from "react";

function RatingSelect({ select }) {
  const [rating, setRating] = useState(10);

  const handleSelectedRating = (e) => {
    select(e.target.value);
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="one"
          name="rating"
          value={1}
          onChange={handleSelectedRating}
        />
        <label htmlFor="one">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="two"
          name="rating"
          value={2}
          onChange={handleSelectedRating}
        />
        <label htmlFor="two">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="three"
          name="rating"
          value={3}
          onChange={handleSelectedRating}
        />
        <label htmlFor="three">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="four"
          name="rating"
          value={4}
          onChange={handleSelectedRating}
        />
        <label htmlFor="four">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="five"
          name="rating"
          value={5}
          onChange={handleSelectedRating}
        />
        <label htmlFor="five">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="six"
          name="rating"
          value={6}
          onChange={handleSelectedRating}
        />
        <label htmlFor="six">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="seven"
          name="rating"
          value={7}
          onChange={handleSelectedRating}
        />
        <label htmlFor="seven">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="eight"
          name="rating"
          value={8}
          onChange={handleSelectedRating}
        />
        <label htmlFor="eight">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="nine"
          name="rating"
          value={9}
          onChange={handleSelectedRating}
        />
        <label htmlFor="nine">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="ten"
          name="rating"
          value={10}
          onChange={handleSelectedRating}
        />
        <label htmlFor="ten">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
