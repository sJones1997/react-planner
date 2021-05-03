import React from "react";
import PropTypes from 'prop-types';

export const Tile = props => {

  const details = Object.values(props)[0];
  const keys = Object.keys(details);
  return (
    <div className="tile-container">
      {
        keys.map((e, i) => {
          if(i === 0){
            return <p className="tile-title">{details[e]}</p>
          } else {
            return <p className="tile">{details[e]}</p>
          }
        })        
      }
    </div>
  );
};

Tile.propType = {
  object: PropTypes.object.isRequired
}
