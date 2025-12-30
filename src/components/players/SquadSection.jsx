import PlayerCard from "./PlayerCard";

export default function SquadSection({ title, players, onPlayerClick }) {
  if (!players || players.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-xl font-semibold">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players.map((player) => (
          <PlayerCard
            key={player.name}
            player={player}
            onClick={() => onPlayerClick(player)}
          />
        ))}
      </div>
    </div>
  );
}
