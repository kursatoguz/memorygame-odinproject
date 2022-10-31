import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
const SingleCart = ({ card }) => {
  const { handleCards } = useGlobalContext();
  const [loadedImg, setLoadedImg] = React.useState(false);
  return (
    <div className="card" onClick={() => handleCards(card.id)}>
      {loadedImg ? null : <Loading />}
      <img
        style={loadedImg ? {} : { display: "none" }}
        src={card.imageUrl}
        onLoad={() => setLoadedImg(true)}
        alt="Avatar"
      />
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
