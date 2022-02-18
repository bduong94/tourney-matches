import React from "react";
import Player from "./Player";

const PlayerList = (props) => {
  const players = props.playerData.map((player) => (
    <Player
      gamerTag={player.gamerTag}
      firstName={player.firstName}
      lastName={player.lastName}
      wins={player.wins}
      key={player.gamerTag}
    />
  ));

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
};

export default PlayerList;
