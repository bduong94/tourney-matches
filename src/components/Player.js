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
    </article>
  );
};

export default Player;
