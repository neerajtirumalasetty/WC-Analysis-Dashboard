export default function TeamCard({ team, onClick }) {
  const { name, rank, flag, available } = team;

  return (
    <div
      onClick={available ? onClick : undefined}
      className={`group relative cursor-pointer rounded-2xl bg-base-200 p-6 shadow-lg transition-all
        ${available ? "hover:scale-[1.03] hover:shadow-2xl" : "opacity-50 cursor-not-allowed"}
      `}
    >
      {/* Flag */}
      <div className="mb-4 h-16 w-24 overflow-hidden rounded-lg bg-base-300">
        <img
          src={flag}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Team Info */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm opacity-60">
        ICC T20 Rank #{rank}
      </p>

      {/* Badge */}
      {!available && (
        <span className="absolute right-4 top-4 badge badge-outline">
          Coming Soon
        </span>
      )}
    </div>
  );
}
