import React, { useState, useContext } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(data);

  // get 4 random cards from the data array
  const getRandomCards = () => {
    const randomCards = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomCards.push(data[randomIndex]);
    }
    return randomCards;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
