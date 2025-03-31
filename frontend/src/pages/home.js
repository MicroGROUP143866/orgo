import React from 'react';
import SlideShow from '../components/slideshow';
import Bcard from '../components/bcard';
import Button from '../components/button';
import Intro from '../components/intro';
import '../App.css';

function Home(){
        return(
            <>
                <div class="slideshowhome"><SlideShow></SlideShow></div>
                <br></br>
                <center><Intro></Intro></center>
                <br></br><br></br>
                <center><Bcard></Bcard></center>
                <br></br><br></br>
                <center class="Homerow">
                    <Button text="View Hospitals" url="/hospitals" class="Homebutton"></Button>
                    <a href="https://ksotto.kerala.gov.in"><button  class="Homebutton">Become a Donor</button></a>
                    <Button text="View Blood Banks" url="/Blood-banks" class="Homebutton"></Button>
                    {/* <Link to="/Blood-banks"><button class="Homebutton">View Bloodbanks </button></Link> */}
                </center>
                <br></br><br></br><br></br>
            </>
        );
}
      
export default Home;