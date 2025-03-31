import React from 'react';
import InfoCard from '../components/infocard';
import axios from 'axios';
//import { Link } from 'react-router-dom';
// Images for Blood Banks
import image1 from '../images/bloodbanks/amritabb.jpg';
import image2 from '../images/bloodbanks/imabb.jpg';
import image3 from '../images/bloodbanks/renaibb.jpg';


import '../App';

var bloodbanks=[" "," "," "," "," "," "] //Default Names

class BloodBanks extends React.Component{

    state ={
        posts:[]
    };

    componentDidMount = () => {
        this.getBloodbanks();
      };
    
      getBloodbanks(){
        axios.get('/api/bloodbanks')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            console.log('Error retrieving data!!!');
          });
    }

    setData=(posts) => {
        if (!posts.length) 
            return null;
            posts.map((post, index) => (
                bloodbanks[index]=post.Name
            ));
      };

    render(){
        return(
            <>
            {this.setData(this.state.posts)}
            <br></br>
            <div class="row">
  <div class="info-container">
    <a href="https://www.amrita.edu/tag/amrita-institute-of-medical-sciences-research-center/">
      <InfoCard image={image1} name={bloodbanks[0]} />
    </a>
    <p class="hospital-name">AMRITA{bloodbanks[0]}</p> 
  </div>

  <div class="info-container">
    <a href="https://imacochin.org/blood-bank.php">
      <InfoCard image={image2} name={bloodbanks[1]} />
    </a>
    <p class="hospital-name">IMA{bloodbanks[1]}</p> 
  </div>

  <div class="info-container">
    <a href="https://www.renaimedicity.org/facilities/blood-bank-and-donation/">
      <InfoCard image={image3} name={bloodbanks[2]} />
    </a>
    <p class="hospital-name">RENAI{bloodbanks[2]}</p> 
  </div>
</div>

            <br></br>
            <div class="row">
   

               

               
            </div>
            <br></br><br></br>
        </>
        );
    }
}

export default BloodBanks;