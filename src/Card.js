import React from 'react';
import './Card.css';

const Card = (props) =>{
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robot"/>
            <div className="cardText">
              <h2>{props.name}</h2>
              <p>{props.email}</p>
            </div>
        </div>


    );
}
export default Card;