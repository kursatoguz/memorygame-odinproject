import React from "react";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { score, bestScore } = useGlobalContext();
  return (
    <nav>
      <div className="app-name">GOT Memory Game</div>
      <div className="scores">
        Score: {score} | Best: {bestScore}
      </div>
    </nav>
  );
};

export default Navbar;
