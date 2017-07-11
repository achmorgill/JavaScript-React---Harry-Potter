import React from 'react';


export const HarryPotterDetails = (props) => {

  if(!props.character) return null;

  return (
    <div>
      <h2>Details</h2>
      <h3>Actor: {props.character.actor}</h3>
      <h3>Character: {props.character.name}</h3>
      <h3>House: {props.character.house}</h3>
      <h4></h4>
    </div>

    )
  
}