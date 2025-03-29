import React from 'react';
import DonorImg from '../images/donor.jpg';
import Button from '../components/button';
import '../App';

function Donor(){
    return (
        <>
        <br></br>
        <center>  
            <div class="donorcard">
                <h4>DONATE AND SAVE LIVES</h4>
            </div>
            <br></br>
            <img src={DonorImg} alt="DonorImg" class="donorImg"></img>
            <br></br>
            <br></br>
            <br></br>
            <Button text="Register to become a Donor" url="/registration" class="Donorbutton"></Button>
            <br></br><br></br>
        
            <div class="donorcardinfo">
                <center><h3>The Living Donation Process</h3></center>
                <br></br>
                <p>
                    1. The living donor needs to undergo some medical tests and evaluations to check and confirm her/his her medical compatibility with the recipient.
                </p>
                <br></br>
                <p>
                    2. The living donor’s medical compatibility is confirmed by a doctor. Only after all the tests have positively confirmed that the donor is compatible
                     with the recipient, can the transplant take place.
                </p>
                <br></br>
                <p>
                    3. The living donor’s organs are retrieved surgically by doctors. They will be stored in special chemical solutions briefly until they are transplanted 
                    into the recipient.
                </p>
                <br></br>
                <p>
                    4. The living donor will need to remain under medical care for a few days or weeks after organ retrieval until she/he is fit to go home.
                </p>
                <br></br>
            </div>
            <br></br>
            <div class="donorcardinfo">
                <center><h3>The Deceased Donation Process</h3></center>
                <br></br>
                <p>
                    1. A deceased donor is often someone who has suffered a fatal injury to the head or had Brain Haemorrhage. She/He is declared brain stem dead by a group of medical experts in a hospital.</p>
                <br></br>
                <p>
                    2. The donor’s family has to give consent for the donation before the process of organ retrieval can be carried out. Meanwhile, the donor is kept on life-support with Doctors looking after all her/his needs until the retrieval of the organs is allowed to move forward.
                </p>
                <br></br>
                <p>
                    3. Suitable recipients for all the organs are identified from a waiting list. They are notified and asked to reach their respective hospitals.
                </p>
                <br></br>
                <p>
                    4. After retrieval, the body of the donor is respectfully handed over to the family.</p>
                <br></br>
            </div>
            <br></br>
        </center>
        
        </>
    );
}

export default Donor;