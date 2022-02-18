import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

const PlayerList = (props) => {
  const playerDataArray = preparePlayerData(playerData);
  const updatedPlayerDataArray = addWinsToPlayers(playerDataArray, matchData);
  const onePlayer = updatedPlayerDataArray[0];
  /* 
  "Disguised Lizard": {
    gamerTag: "Disguised Lizard",
    firstName: "Daria ",
    lastName: "Stark",
    currentWins
  },*/

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player
        gamerTag={onePlayer.gamerTag}
        firstName={onePlayer.firstName}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />
    </section>
  );
};

export default PlayerList;
