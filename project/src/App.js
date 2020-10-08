import React from "react";
import PlayerForm from "./components/PlayerForm";

import "./App.css";
import PlayerList from "./components/PlayerList";

const App = () => {
  return (
    <div className="center">
      <PlayerForm />
      <PlayerList />
    </div>
  );
};

export default App;
