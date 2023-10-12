import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import StoryaiScreen from "./screens/StoryaiScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/storyai" element={<StoryaiScreen />} />
      </Routes>
    </>
  );
}

export default App;
