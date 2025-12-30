import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Teams from "./features/teams/Teams";
import HomeHero from "./features/home/HomeHero";
import WinnersSlider from "./features/home/WinnerSlider";
import Squad from "./features/squad/Squad";
import PlayerOverlay from "./features/player/PlayerOverlay";

function Home() {
  return (
    <>
      <HomeHero />
      <WinnersSlider />
    </>
  );
}

function App() {
  const [activePlayer, setActivePlayer] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-base-100">
        <Navbar onPlayerSelect={setActivePlayer} />

        <main className="pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:team" element={<Squad onPlayerSelect={setActivePlayer}/>} />
          </Routes>
        </main>
      </div>

      <PlayerOverlay
        player={activePlayer}
        onClose={() => setActivePlayer(null)}
      />
    </>
  );
}

export default App;
