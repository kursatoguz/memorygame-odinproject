import React from "react";
import { useGlobalContext } from "../context";
const SingleCart = ({ card }) => {
  const { handleCards } = useGlobalContext();
  return (
    <div className="card" onClick={() => handleCards(card.id)}>
      <img src={card.imageUrl} alt="Avatar" />
      <div className="container">
        <h4>
          <b>
            {card.fullName} / {card.title}
          </b>
        </h4>
        <p>{card.family}</p>
      </div>
    </div>
  );
};

export default SingleCart;
