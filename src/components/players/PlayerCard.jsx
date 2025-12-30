export default function PlayerCard({ player, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-base-200 p-5 shadow
                 transition hover:scale-[1.03] hover:shadow-xl"
    >
      <div className="h-100 w-full overflow-hidden rounded-xl bg-base-300">
        <img
          src={player.image}
          alt={player.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {player.name}
      </h3>

      <p className="text-sm opacity-60">
        {player.role}
      </p>

      <div className="mt-2 flex justify-between text-sm opacity-70">
        <span>Debut {player.debut}</span>
        <span>Rank : {player.rank}</span>
      </div>
    </div>
  );
}
