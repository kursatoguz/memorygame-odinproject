import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isGameOver, closeModal, score, level } = useGlobalContext();
  return (
    <div
      className={`${isGameOver ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container">
        <h3>
          {level === 11 ? "Congratulations you won the game" : "Game Over"}
        </h3>
        <p>Your score is {score}</p>
        <button className="new-game" onClick={closeModal}>
          New Game
        </button>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
