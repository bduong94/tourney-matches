export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map((player) => {
    const currentWins = matchData.reduce((winCount, match) => {
      if (player.gamerTag === match.winner) {
        return (winCount += 1);
      } else {
        return winCount;
      }
    }, 0);

    player.wins = currentWins;

    return player;
  });
};
