import React from 'react';
import {Link} from 'react-router-dom';
import '../App';

function Button(props){
    return (
        <Link to={props.url}>
            <div class={props.class}>
                <p>{props.text}</p>
            </div>
        </Link>
       
    );
}

export default Button ;