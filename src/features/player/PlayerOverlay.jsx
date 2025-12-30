import { useEffect } from "react";

export default function PlayerOverlay({ player, onClose }) {
  useEffect(() => {
    if (!player) return;

    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "auto";
    };
  }, [player, onClose]);

  if (!player) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Right Panel */}
      <div
        className="fixed inset-0 z-[101]
             bg-neutral-900 shadow-2xl"
      >
        <div className="flex h-full flex-col p-6 overflow-hidden">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {player.name}
            </h2>
            <button
              className="btn btn-sm btn-ghost text-white"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* CONTENT GRID */}
          <div className="grid h-full grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 overflow-y-auto pr-2">

              {/* Profile */}
              <div className="flex gap-4 mb-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-34 w-28 rounded-xl object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-white">
                    {player.role}
                  </p>
                  <p className="text-sm text-white/70">
                    Debut: {player.debut}
                  </p>
                  <p className="text-sm text-white/70">
                    ICC Rank #{player.rank}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Runs" value={player.runs ?? "—"} />
                <Stat label="Average" value={player.average ?? "—"} />
                <Stat label="Strike Rate" value={player.strikeRate ?? "—"} />
                <Stat label="High Score" value={player.highScore ?? "—"} />
              </div>
            </div>

            {/* RIGHT COLUMN — GRAPH */}
            <div className="lg:col-span-2 flex items-center justify-center rounded-xl bg-neutral-800 text-white/70">
              Player form graph (next step)
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-neutral-800 p-4 text-center text-white">
      <p className="text-sm opacity-60">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
