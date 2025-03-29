import React from 'react';
import '../App';

function HospitalInfo(prop){
    return (
        <>
        <br></br>
        <div class="row">

            <div class="infotextcard">
                    <center><h2>{prop.location.aboutProps.data.Name}</h2></center>
                    <br></br>
                    <p>{prop.location.aboutProps.data.Information}</p>
                    <br></br><br></br>
                    <p>
                    <b>Address:</b> {prop.location.aboutProps.data.Address}
                    <br></br><br></br>
                    <center><h3>Specialities Available</h3></center>
                    <br></br>
                        <b>- Dialysis:</b> {prop.location.aboutProps.data.Specialities.Dialysis}<br></br>
                        <b>- CT scan:</b> {prop.location.aboutProps.data.Specialities["CT scan"]}<br></br>
                        <b>- Intensive Care:</b> {prop.location.aboutProps.data.Specialities["Intensive Care"]}<br></br>
                        <b>- Rheumatology:</b> {prop.location.aboutProps.data.Specialities.Rheumatology}<br></br>
                        <b>- Nephrology:</b> {prop.location.aboutProps.data.Specialities.Nephrology}<br></br>
                        <b>- Neuropsychology:</b> {prop.location.aboutProps.data.Specialities.Neuropsychology}<br></br>
                        <b>- OB-GYN:</b> {prop.location.aboutProps.data.Specialities["OB-GYN"]}<br></br>
                        <b>- Psychiatry:</b> {prop.location.aboutProps.data.Specialities.Psychiatry}<br></br>
                        <b>- Pulmonology:</b> {prop.location.aboutProps.data.Specialities.Pulmonology}<br></br>
                        <b>- Vascular Medicine:</b> {prop.location.aboutProps.data.Specialities["Vascular Medicine"]}<br></br>
                        <b>- Bariatric Surgery:</b> {prop.location.aboutProps.data.Specialities["Bariatric Surgery"]}<br></br>
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

export default HospitalInfo;