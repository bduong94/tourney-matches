import React from "react";

const Match = () => {
  return (
    <article className="Match">
      <h1>
        Joe
        <span>vs</span>
        Bob
      </h1>
      {/*To be shown when there is a winner*/}
      <h2>Joe is the winner by 1!</h2>
      {/*To be shown when there is no winnerr*/}
      <h2>No Winners Yet!</h2>
    </article>
  );
};

export default Match;
