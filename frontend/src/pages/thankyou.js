import React from 'react';
import smile from '../images/smile.png';
import '../App';

function Thankyou(){
    return (
        <div class="thankyou">
            <br></br>
            <center>
                <div class="thankyouBox">
                    <h1>Thank You For Registering</h1>
                    <br></br>
                    <img src={smile} alt="Thank you" class="smile"></img>
                </div>
            </center>
        </div>
    );
}

export default Thankyou;