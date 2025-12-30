export default function TeamCard({ team, onClick }) {
  const { name, rank, flag, available } = team;

  return (
    <div
      onClick={available ? onClick : undefined}
      className={`
        group relative
        rounded-2xl
        bg-base-200
        p-6
        shadow-md
        transition-all duration-200 ease-out
        ${
          available
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-xl"
            : "cursor-not-allowed opacity-60"
        }
      `}
    >
      
      <div className="
        mb-4
        h-16 w-24
        overflow-hidden
        rounded-lg
        bg-base-300
      ">
        <img
          src={flag}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      
      <h3 className="text-lg font-semibold leading-tight">
        {name}
      </h3>
      <p className="mt-1 text-sm opacity-60">
        ICC T20 Rank #{rank}
      </p>

      
      {!available && (
        <span className="
          absolute right-4 top-4
          badge badge-outline
          opacity-80
        ">
          Coming Soon
        </span>
      )}
    </div>
  );
}
