import React from "react";

const Match = (props) => {
  return (
    <article className="Match">
      <h1>
        {props.players[0]}
        <span>vs</span>
        {props.players[1]}
      </h1>
      {/*To be shown when there is a winner*/}
      <h2>
        {props.winner} is the winner by {props.scoreDifference}!
      </h2>
      {/*To be shown when there is no winnerr*/}
      <h2>No Winners Yet!</h2>
    </article>
  );
};

export default Match;
