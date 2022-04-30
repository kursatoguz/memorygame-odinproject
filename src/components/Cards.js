import React from "react";
import SingleCard from "./SingleCart";
import { useGlobalContext } from "../context";

const Cards = () => {
  const { gameCards } = useGlobalContext();

  return (
    <div>
      <div className="cards">
        {gameCards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
