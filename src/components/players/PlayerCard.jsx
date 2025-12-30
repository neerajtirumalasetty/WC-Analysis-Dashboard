export default function PlayerCard({ player, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        rounded-2xl
        bg-base-200
        p-5
        shadow-md
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="
        relative
        w-full
        aspect-[3/4]
        overflow-hidden
        rounded-xl
        bg-base-300
      ">
        <img
          src={player.image}
          alt={player.name}
          className="
            h-full w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold leading-tight">
        {player.name}
      </h3>

      {/* Role */}
      <p className="mt-0.5 text-sm opacity-60">
        {player.role}
      </p>

     
      <div className="mt-3 flex items-center justify-between text-sm opacity-70">
        <span>
          Debut {player.debut}
        </span>
        <span>
          Rank #{player.rank}
        </span>
      </div>
    </div>
  );
}
