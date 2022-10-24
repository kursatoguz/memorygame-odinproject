import React, { useState, useEffect, useContext } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(data);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameCards, setGameCards] = useState([]);

  // get unique random cards from the data array
  const getRandomCards = () => {
    const randomCards = [];
    const cardsLength = cards.length;
    const randomCardsLength = level * 5;
    let randomCard;
    while (randomCards.length < randomCardsLength) {
      randomCard = cards[Math.floor(Math.random() * cardsLength)];
      if (!randomCards.includes(randomCard)) {
        randomCards.push(randomCard);
      }
    }
    setGameCards(randomCards);
  };
  const handleCards = (id) => {
    // store id of the clicked card
    const selectedCard = gameCards.find((card) => card.id === id);
    // check if the card is already selected
    if (selectedCards.includes(selectedCard)) {
      setIsGameOver(true);
      return;
    }
    // add the selected card to the selected cards array
    setSelectedCards([...selectedCards, selectedCard]);
    setScore(score + 1);

    if (selectedCards.length === level * 5 - 1) {
      setLevel(level + 1);
      setSelectedCards([]);
    } else {
      shuffleCards();
    }
  };
  // set best score
  if (score > bestScore) {
    setBestScore(score);
  }

  const shuffleCards = () => {
    // shuffle gameCards
    setLoading(true);
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setGameCards([...shuffledCards]);
    setLoading(false);
  };

  const closeModal = () => {
    setIsGameOver(false);
    startNewGame();
  };
  const startNewGame = () => {
    setLevel(1);
    setScore(0);
    setSelectedCards([]);
    getRandomCards();
  };
  useEffect(() => {
    setLoading(true);
    if (level === 11) {
      setIsGameOver(true);
    } else {
      setTimeout(() => {
        getRandomCards();
      }, 100);
    }
    setLoading(false);
  }, [level]);
  return (
    <AppContext.Provider
      value={{
        level,
        loading,
        isGameOver,
        score,
        bestScore,
        handleCards,
        gameCards,
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
