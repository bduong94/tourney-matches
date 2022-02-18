import React from "react";
import Match from "./Match";

const MatchList = (props) => {
  const matches = props.matchData.map((match) => (
    <Match
      players={match.players}
      winner={match.winner}
      scoreDifference={match.scoreDifference}
      key={match.matchNumber}
    />
  ));

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches};
    </section>
  );
};

export default MatchList;
