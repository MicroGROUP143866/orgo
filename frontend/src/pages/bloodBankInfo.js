import React from 'react';
import '../App';

function BloodBankInfo(prop){
    return (
        <>
        <br></br>
        <div class="row">

            <div class="infotextcard">
                    <center><h2>{prop.location.aboutProps.data.Name}</h2></center>
                    <br></br><br></br>
                    <p>
                    <b>Address:</b> {prop.location.aboutProps.data.Address}
                    <br></br><br></br>
                    <center><h3>Units of Blood Available</h3></center>
                    <br></br>
                        <b>- O Positive:</b> {prop.location.aboutProps.data["Blood-Units"]["O+"]}<br></br>
                        <b>- O Negative:</b> {prop.location.aboutProps.data["Blood-Units"]["O-"]}<br></br>
                        <b>- A Positive:</b> {prop.location.aboutProps.data["Blood-Units"]["A+"]}<br></br>
                        <b>- A Negative:</b> {prop.location.aboutProps.data["Blood-Units"]["A-"]}<br></br>
                        <b>- B Positive:</b> {prop.location.aboutProps.data["Blood-Units"]["B+"]}<br></br>
                        <b>- B Negative:</b> {prop.location.aboutProps.data["Blood-Units"]["B-"]}<br></br>
                        <b>- AB Positive:</b> {prop.location.aboutProps.data["Blood-Units"]["AB+"]}<br></br>
                        <b>- AB Negative:</b> {prop.location.aboutProps.data["Blood-Units"]["AB-"]}<br></br>
                    <br></br><br></br>
                    </p>
            </div>
            <div>
                <div class="Hoscard2">
                    <img src={prop.location.aboutProps.image} alt="hoapital" class="cardimg"></img>
                </div>
                <br></br>
                <center><img src={prop.location.aboutProps.map} alt="map" class="map"></img></center>
            </div>
        </div>
        <br></br>
        </>
    );
}

export default BloodBankInfo;