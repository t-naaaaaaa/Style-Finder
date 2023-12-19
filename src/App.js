// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import WelcomeView from "./views/WelcomeView";
import StyleSelectionView from "./views/StyleSelectionView";
import "./App.css";

function App() {
  let navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/style-selection"); // '/style-selection'へ遷移
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeView onStart={handleStartClick} />} />
        <Route path="/style-selection" element={<StyleSelectionView />} />
        {/* 他のルートも必要に応じて追加 */}
      </Routes>
    </div>
  );
}

export default App;
