import React from 'react';
import InfoCard from '../components/infocard';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Hospital Images
import image1 from '../images/hospitals/ManipalHospital.jpg';
import image2 from '../images/hospitals/ApolloHospital.jpg';
import image3 from '../images/hospitals/BGSGlobalHospital.jpg';
import image4 from '../images/hospitals/FortisHospital.jpg';
import image5 from '../images/hospitals/BowringandLadyCurzonHospital.jpg';
import image6 from '../images/hospitals/CentralLeprosoriumHospital.jpg';
// Hospital Maps
import map1 from '../images/hospitals/map/ManipalMap.jpg';
import map2 from '../images/hospitals/map/ApolloMap.jpg';
import map3 from '../images/hospitals/map/BGSGlobalMap.jpg';
import map4 from '../images/hospitals/map/FortisMap.jpg';
import map5 from '../images/hospitals/map/BowringandLadyCurzonMap.jpg';
import map6 from '../images/hospitals/map/CentralLeprosoriumMap.jpg';
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
                <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[0],
                    image:image1,
                    map:map1
                  }
                }}
                >
                  <InfoCard image={image1} name={hospitals[0]}/>
                </Link>

                <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[1],
                    image:image2,
                    map:map2
                  }
                }}
                >
                  <InfoCard image={image2} name={hospitals[1]}/>
                </Link>

                <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[2],
                    image:image3,
                    map:map3
                  }
                }}
                >
                  <InfoCard image={image3} name={hospitals[2]}/>
                </Link>
            </div>
            <br></br>
            <div class="row">
            <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[3],
                    image:image4,
                    map:map4
                  }
                }}
                >
                  <InfoCard image={image4} name={hospitals[3]}/>
                </Link>

                <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[4],
                    image:image5,
                    map:map5
                  }
                }}
                >
                  <InfoCard image={image5} name={hospitals[4]}/>
                </Link>

                <Link to={{
                  pathname:'/hospital-info',
                  aboutProps:{
                    data:this.state.posts[5],
                    image:image6,
                    map:map6
                  }
                }}
                >
                  <InfoCard image={image6} name={hospitals[5]}/>
                </Link>
            </div>
            <br></br><br></br>
        </>
        );
    }
}


export default Hospitals;