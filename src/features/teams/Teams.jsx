import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom";

const teams = [
  { name: "India", rank: 1, flag: "/flags/india.png", available: true },
  { name: "Australia", rank: 2, flag: "/flags/aus.png", available: false },
  { name: "England", rank: 3, flag: "/flags/eng.png", available: false },
  { name: "South Africa", rank: 4, flag: "/flags/sa.png", available: false },
  { name: "New Zealand", rank: 5, flag: "/flags/nz.png", available: false },
  { name: "Pakistan", rank: 6, flag: "/flags/pak.png", available: false },
  { name: "Sri Lanka", rank: 7, flag: "/flags/sl.png", available: false },
  { name: "West Indies", rank: 8, flag: "/flags/wi.png", available: false },
  { name: "Bangladesh", rank: 9, flag: "/flags/ban.png", available: false },
  { name: "Afghanistan", rank: 10, flag: "/flags/afg.png", available: false },
  { name: "Zimbabwe", rank: 11, flag: "/flags/zim.png", available: false },
  { name: "Ireland", rank: 12, flag: "/flags/ireland.png", available: false },
];

export default function Teams() {
const navigate = useNavigate();
  return (
    <section className="w-full px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-2xl font-bold">
          Teams
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              team={team}
              onClick={() => navigate(`/teams/${team.name.toLowerCase()}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
