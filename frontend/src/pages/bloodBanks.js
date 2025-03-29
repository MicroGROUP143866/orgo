import React from 'react';
import InfoCard from '../components/infocard';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Images for Blood Banks
import image1 from '../images/bloodbanks/default.jpg';
import image2 from '../images/bloodbanks/DrShivajiRaoBloodBank.jpg';
import image3 from '../images/bloodbanks/GraceBloodBanks.jpg';
import image4 from '../images/bloodbanks/default.jpg';
import image5 from '../images/bloodbanks/NavrangBloodBank.jpg';
import image6 from '../images/bloodbanks/default.jpg';
// Maps for Blood Banks
import map1 from '../images/bloodbanks/maps/KarnatakaRedCrossBloodBankMap.jpg';
import map2 from '../images/bloodbanks/maps/defaultMap.jpg';
import map3 from '../images/bloodbanks/maps/GraceBloodBankMap.jpg';
import map4 from '../images/bloodbanks/maps/MinervaBloodBankMap.jpg';
import map5 from '../images/bloodbanks/maps/NavrangBloodBankMap.jpg';
import map6 from '../images/bloodbanks/maps/NaveenBloodBankMap.jpg';

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
                <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[0],
                    image:image1,
                    map:map1
                  }
                }}
                >
                  <InfoCard  image={image1} name={bloodbanks[0]}/>
                </Link>

                <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[1],
                    image:image2,
                    map:map2
                  }
                }}
                >
                  <InfoCard image={image2} name={bloodbanks[1]}/>
                </Link>

                <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[2],
                    image:image3,
                    map:map3
                  }
                }}
                >
                  <InfoCard image={image3} name={bloodbanks[2]}/>
                </Link>
            </div>
            <br></br>
            <div class="row">
            <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[3],
                    image:image4,
                    map:map4
                  }
                }}
                >
                  <InfoCard image={image4} name={bloodbanks[3]}/>
                </Link>

                <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[4],
                    image:image5,
                    map:map5
                  }
                }}
                >
                  <InfoCard image={image5} name={bloodbanks[4]}/>
                </Link>

                <Link to={{
                  pathname:'/bloodbank-info',
                  aboutProps:{
                    data:this.state.posts[5],
                    image:image6,
                    map:map6
                  }
                }}
                >
                  <InfoCard image={image6} name={bloodbanks[5]}/>
                </Link>
            </div>
            <br></br><br></br>
        </>
        );
    }
}

export default BloodBanks;