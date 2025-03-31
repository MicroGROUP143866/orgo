import React from 'react';
import InfoCard from '../components/infocard';
import axios from 'axios';
//import { Link } from 'react-router-dom';
// Hospital Images
import image1 from '../images/hospitals/apolloadlux.jpg'
import image2 from '../images/hospitals/lfhangamaly.png';
import image3 from '../images/hospitals/stjosephangamaly.jpg';
import '../App';

var hospitals=[" "," "," "," "," "," "] //Default Values

class Hospitals extends React.Component{

    state ={
        posts:[]
    };

    componentDidMount = () => {
        this.getHospitals();
      };
    
    getHospitals(){
        axios.get('/api/hospitals')
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
                hospitals[index]=post.Name
            ));
      };

    render(){
        return(
            <>
            {this.setData(this.state.posts)}
            <br></br>
            <div class="row">
            <a href="https://www.apolloadluxhospital.co/">
                  <InfoCard image={image1} name={hospitals[0]}/>
                  <p class="hospital-name">APOLLO ADLUX{hospitals[2]}</p> 
                  </a>

                <a href="https://www.lfhospital.org/">
                  <InfoCard image={image2} name={hospitals[1]}/>
                  <p class="hospital-name">LITTLE FLOWER{hospitals[2]}</p> 
                  </a>

                <a href="https://stjosephhospital.in/">
                  <InfoCard image={image3} name={hospitals[2]}/>
                  <p class="hospital-name">ST JOSEPH'S TRUST{hospitals[2]}</p> 
                </a>
            </div>
            <br></br>
            <div class="row">
            </div>
            <br></br><br></br>
        </>
        );
    }
}


export default Hospitals;