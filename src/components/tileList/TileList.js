import React from "react";
import PropTypes from 'prop-types';
import {Tile} from '../tile/Tile';

export const TileList = props => {
  return (
    <div>
      {
        <Tile object={props.data} />
      }
    </div>
  );
};

TileList.propTypes = {
  data: PropTypes.array.isRequired
}
