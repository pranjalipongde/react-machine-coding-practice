import React, { useState } from "react";
import "./starRating.css";
import { BsFillStarFill } from "react-icons/bs";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [rateColor, setRateColor] = useState(null);
  return (
    <div className="container">
      <div className="star">
        {[...Array(5)].map((star, index) => {
          const currentRate = index + 1;
          return (
            <>
              <label>
                <input
                  type="radio"
                  name="rate"
                  value={currentRate}
                  onClick={() => setRating(currentRate)}
                />
                <BsFillStarFill
                  size={40}
                  color={
                    currentRate <= (rateColor || rating) ? "yellow" : "grey"
                  }
                />
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
