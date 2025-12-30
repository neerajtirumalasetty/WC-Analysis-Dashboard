import { useEffect, useState } from "react";
import PlayerFormChart from "../../components/players/PlayerFormChart";

export default function PlayerOverlay({ player, onClose }) {
  const [mode, setMode] = useState("batting");

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

  const batting = player.stats?.batting;
  const bowling = player.stats?.bowling;
  const isAllRounder = batting && bowling;

  const sum = (arr) => arr?.reduce((a, b) => a + b, 0);
  const avg = (arr) => (sum(arr) / arr.length).toFixed(1);

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[101] bg-neutral-900 text-neutral-100">
        <div className="mx-auto h-full w-full max-w-[1440px] px-8 py-6 overflow-y-auto">

        
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-wide">
              {player.name}
            </h1>
            <button
              onClick={onClose}
              className="
                rounded-lg px-3 py-1
                text-xl opacity-60
                hover:opacity-100
                hover:bg-white/5
                transition
              "
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
     
            <div>
     
              <div className="mb-10 flex gap-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-48 w-36 rounded-xl object-cover"
                />
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-lg font-semibold">
                    {player.role}
                  </p>
                  <p className="text-sm opacity-70">
                    Debut · {player.debut}
                  </p>
                  <p className="text-sm opacity-70">
                    ICC Rank #{player.rank}
                  </p>
                </div>
              </div>

              {isAllRounder && (
                <div className="mb-6 flex gap-4">
                  <button
                    className={`btn btn-sm ${
                      mode === "batting" ? "btn-primary" : "btn-ghost"
                    }`}
                    onClick={() => setMode("batting")}
                  >
                    Batting
                  </button>
                  <button
                    className={`btn btn-sm ${
                      mode === "bowling" ? "btn-primary" : "btn-ghost"
                    }`}
                    onClick={() => setMode("bowling")}
                  >
                    Bowling
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {(player.role === "Batter" ||
                  player.role === "Wicket Keeper" ||
                  (player.role === "All-rounder" && mode === "batting")) &&
                  batting && (
                    <>
                      <Stat label="Total Runs" value={sum(batting.yearlyRuns)} />
                      <Stat label="Avg / Year" value={avg(batting.yearlyRuns)} />
                      <Stat label="Strike Rate" value={batting.strikeRate ?? "—"} />
                      <Stat label="High Score" value={batting.highScore ?? "—"} />
                    </>
                  )}

                {(player.role === "Bowler" ||
                  (player.role === "All-rounder" && mode === "bowling")) &&
                  bowling && (
                    <>
                      <Stat
                        label="Total Wickets"
                        value={sum(bowling.yearlyWickets)}
                      />
                      <Stat
                        label="Avg / Year"
                        value={avg(bowling.yearlyWickets)}
                      />
                      <Stat label="Economy" value={bowling.economy ?? "—"} />
                      <Stat label="Best" value={bowling.best ?? "—"} />
                    </>
                  )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="
                rounded-2xl
                bg-neutral-800/60
                p-4
                shadow-lg
              ">
                {batting &&
                  (player.role === "Batter" ||
                    player.role === "Wicket Keeper" ||
                    (player.role === "All-rounder" && mode === "batting")) && (
                    <PlayerFormChart data={batting.yearlyRuns} />
                  )}

                {bowling &&
                  (player.role === "Bowler" ||
                    (player.role === "All-rounder" && mode === "bowling")) && (
                    <PlayerFormChart data={bowling.yearlyWickets} />
                  )}

                {!batting && !bowling && (
                  <div className="h-[320px] flex items-center justify-center opacity-60">
                    No performance data available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-neutral-800 p-4 text-center">
      <p className="text-sm opacity-60">{label}</p>
      <p className="mt-1 text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}
