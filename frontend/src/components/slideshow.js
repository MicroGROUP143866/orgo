import React from 'react';
import image1 from '../images/carousel/manipal.png';
import image2 from '../images/carousel/pic2.png';
import image3 from '../images/carousel/pic3.jpg';
import '../App.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

function SlideShow(){
    return(
        <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner >
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 slideShow"
              src={image1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 slideShow"
              src={image2}
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 slideShow"
              src={image3}
              alt="Third slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    );
}
        
export default SlideShow;