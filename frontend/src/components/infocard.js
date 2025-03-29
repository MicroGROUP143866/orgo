import React from 'react';
import '../App';

function InfoCard(props){
    return(
        <div class="Hoscard">
            <div class="container">
                <img src={props.image} alt="hoapital" class="cardimg"></img>
                <div class="bottom-right">{props.name}</div>
            </div>
        </div>
    );
}

export default InfoCard;