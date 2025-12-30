import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import SquadSection from "../../components/players/SquadSection";
import PlayerOverlay from "../player/PlayerOverlay";
import { squads } from "../../data/squads";

export default function Squad() {
  const { team } = useParams();
  const navigate = useNavigate();
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const squad = squads[team];

  // Team not available
  if (!squad) {
    return (
      <section className="w-full px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <button
            className="mb-6 btn btn-sm btn-ghost"
            onClick={() => navigate("/teams")}
          >
            ← Back to Teams
          </button>

          <h1 className="text-3xl font-bold capitalize mb-6">
            {team} Squad
          </h1>

          <p className="opacity-70 text-lg">
            Squad data coming soon.
          </p>
        </div>
      </section>
    );
  }

  // Group players by role
  const groupedPlayers = squad.players.reduce((acc, player) => {
    acc[player.role] = acc[player.role] || [];
    acc[player.role].push(player);
    return acc;
  }, {});

  return (
    <section className="w-full px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <button
          className="mb-6 btn btn-sm btn-ghost"
          onClick={() => navigate("/teams")}
        >
          ← Back to Teams
        </button>

        <h1 className="text-3xl font-bold mb-2">
          {squad.team} Squad
        </h1>
        <p className="mb-10 opacity-60">
          {squad.label}
        </p>

        {Object.entries(groupedPlayers).map(([role, players]) => (
          <SquadSection
            key={role}
            title={role}
            players={players}
            onPlayerClick={setSelectedPlayer}
          />
        ))}
      </div>

    </section>
  );
}
