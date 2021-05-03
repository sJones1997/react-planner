import React from "react";
import PropTypes from 'prop-types';
import {Tile} from '../tile/Tile';

export const TileList = props => {
  return (
    <div>
      {
        props.data.map((e, i) => (
            <Tile key={i} object={e} />          
        ))
      }
    </div>
  );
};

TileList.propTypes = {
  data: PropTypes.array.isRequired
}
