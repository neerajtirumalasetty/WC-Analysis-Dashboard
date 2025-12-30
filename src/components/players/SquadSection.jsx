import PlayerCard from "./PlayerCard";

export default function SquadSection({ title, players, onPlayerClick }) {
  if (!players || players.length === 0) return null;

  return (
    <section className="mb-16">
      
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-wide">
          {title}
        </h2>
        <span className="text-sm opacity-60">
          {players.length} players
        </span>
      </div>

      <div className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {players.map((player) => (
          <PlayerCard
            key={player.id ?? player.name}
            player={player}
            onClick={() => onPlayerClick(player)}
          />
        ))}
      </div>
    </section>
  );
}
