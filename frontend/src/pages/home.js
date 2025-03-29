import React from 'react';
import SlideShow from '../components/slideshow';
import Bcard from '../components/bcard';
import Button from '../components/button';
import Intro from '../components/intro';
import '../App.css';

function Home(){
        return(
            <>
                <center><SlideShow></SlideShow></center>    
                <br></br>
                <center><Intro></Intro></center>
                <br></br><br></br>
                <center><Bcard></Bcard></center>
                <br></br><br></br>
                <center class="Homerow">
                    <Button text="View Hospitals" url="/services" class="Homebutton"></Button>
                    <Button text="Become a Donor" url="/become-a-donor" class="Homebutton"></Button> 
                </center>
                <br></br><br></br><br></br>
            </>
        );
}
      
export default Home;