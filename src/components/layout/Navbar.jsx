import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allPlayers } from "../../data/players";

export default function Navbar({ onPlayerSelect }) {
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Floating Header */}
      <div className="sticky top-4 z-50 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 rounded-2xl bg-base-200/80 backdrop-blur-2xl px-6 py-4 shadow-xl">
            {/* Left */}
            <div
              className="flex cursor-pointer flex-col"
              onClick={() => navigate("/")}
            >
              <span className="text-xs uppercase tracking-widest opacity-60">
                ICC Men’s T20 World Cup
              </span>
              <span className="text-lg font-semibold">2026 Dashboard</span>
            </div>

            {/* Center Search */}
            <div className="relative flex-1 px-10">
              <input
                type="text"
                placeholder="Search players…"
                className="input w-full rounded-xl bg-base-100/70
               focus:bg-base-100 border px-3 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <div
                  className="absolute top-full mt-2 w-full
                    rounded-xl bg-base-100 shadow-xl z-50"
                >
                  {allPlayers
                    .filter((p) =>
                      p.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 6)
                    .map((player) => (
                      <button
                        key={player.id}
                        className="flex w-full items-center gap-3
                       px-4 py-3 hover:bg-base-200 text-left"
                        onClick={() => {
                          onPlayerSelect(player);
                          setSearch("");
                        }}
                      >
                        <img
                          src={player.image}
                          className="h-8 w-8 rounded-full"
                          alt={player.name}
                        />
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <p className="text-xs opacity-90">
                            {player.role} · {player.team}
                          </p>
                        </div>
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Teams Button */}
              <button
                onClick={() => navigate("/teams")}
                className="btn btn-primary rounded-xl px-6"
              >
                Teams
              </button>

              {/* Profile Avatar */}
              <button
                onClick={() => setShowProfile(true)}
                className="flex h-10 w-10 items-center justify-center
                           rounded-full bg-primary text-primary-content
                           font-semibold hover:scale-105 transition"
              >
                😊
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILE MODAL */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowProfile(false)}
          />

          {/* Profile Card */}
          <div className="relative z-10 w-80 rounded-2xl bg-base-100 p-6 shadow-2xl">
            <div className="flex flex-col items-center gap-3">
              <div
                className="h-16 w-16 rounded-full bg-primary
                              text-primary-content flex items-center
                              justify-center text-xl font-bold"
              >
                G
              </div>

              <p className="text-lg font-semibold">Guest User</p>
              <p className="text-sm opacity-60">guest@email.com</p>

              <button className="btn btn-primary btn-sm mt-4 w-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
