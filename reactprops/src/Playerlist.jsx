import React from 'react';
import Player from './player';
import players from './players';

const PlayersList = () => {
  return (
    <div>
      <h2 className='text-center mt-5 text-warning'>Player List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
