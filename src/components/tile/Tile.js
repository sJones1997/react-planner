import React from "react";
import PropTypes from 'prop-types';

export const Tile = props => {

  const showProps = (props) => {
    console.log(props)
  }

  showProps(props)

  const objectValues = Object.values(props)[0];
  return (
    <div className="tile-container">
        {objectValues.map(e => (
          <div key={e.name}>
            <p className="title-title">{e.name}</p>
            <p className="title">{e.phoneNumber}</p>
            <p className="title">{e.email}</p>
          </div>
        ))}
    </div>
  );
};

Tile.propType = {
  object: PropTypes.object.isRequired
}
