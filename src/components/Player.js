import React from "react";

const Player = (props) => {
  return (
    <article className="Player">
      <h1>
        {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
      </h1>

      {props.wins ? (
        props.wins > 1 ? (
          <h2>Currently at {props.wins} wins</h2>
        ) : (
          <h2>Currently at 1 win</h2>
        )
      ) : (
        <h2 className="zero">Currently with no wins :(</h2>
      )}
      {/* To be shown when there is no wins */}

      {/* To be shown when there is 1 win */}

      {/* To be shown when there is more than one win */}
    </article>
  );
};

export default Player;
