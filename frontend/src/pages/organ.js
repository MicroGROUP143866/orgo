import React from 'react';
import Hos from '../images/hospital.jpg';
import Blood from '../images/blood.jpg'
import '../App'
import { Link } from 'react-router-dom';

function Organ(){
    return(
        <>
        <br></br><br></br>
        <center>
        <div class="organrow">

            <Link to="/hospitals">
                <div class="bigcard">
                    <h3>Hospitals</h3>
                    <br></br>
                    <img src={Hos} alt="Hospital" class="imgcard"></img>
                </div>
            </Link>

            <Link to="/Blood-banks">
                <div class="bigcard">
                    <h3>Blood Banks</h3>
                    <br></br>
                    <img src={Blood} alt="Blood Bank" class="imgcard"></img>
                </div>
            </Link>
            
        </div>
        <br></br><br></br>
        </center>
        </>
    );
}

export default Organ