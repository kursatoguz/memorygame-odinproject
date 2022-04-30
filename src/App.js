import "./App.css";
import Cards from "./components/Cards";
import LevelInfo from "./components/LevelInfo";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  return (
    <>
      <Modal />
      <Loading />
      <Navbar />
      <LevelInfo />
      <Cards />
    </>
  );
}

export default App;
