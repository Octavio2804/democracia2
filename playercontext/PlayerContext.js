import React, { createContext, useState } from 'react';

const PlayerContext = React.createContext({
  players: [],
});

const MantenerPlayers = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player.toUpperCase()]);
  };

  const removePlayer = (player) => { 
    const updatedPlayers = players.filter((p) => p !== player.toUpperCase());
    setPlayers(updatedPlayers);
    };

  return (
    <PlayerContext.Provider value={{ players, addPlayer, removePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext, MantenerPlayers };
