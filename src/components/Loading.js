import React from "react";
import { useGlobalContext } from "../context";
const Loading = () => {
  const { loading } = useGlobalContext();
  return loading && <div className="loading"></div>;
};

export default Loading;
