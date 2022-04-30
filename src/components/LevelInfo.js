import React from "react";
import { useGlobalContext } from "../context";
const LevelInfo = () => {
  const { level } = useGlobalContext();
  return <div className="level-info">Game of Thrones / Level: {level} </div>;
};

export default LevelInfo;
