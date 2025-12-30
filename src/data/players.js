import { squads } from "./squads";

export const allPlayers = Object.values(squads)
  .flatMap((squad) => squad.players)
  .map((player) => ({
    ...player,
    team: squadTeam(player),
  }));

function squadTeam(player) {
  return "India";
}
