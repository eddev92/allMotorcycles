import React, { Component } from 'react';
import './home.css';
import Slider from "react-slick";

class HomeComponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2300
          };

        return(
            <div id="homepage" className="homepage section">
                
                <div className="container">
                    
                    {/* <img alt="" className="logo" src="images/logo.png" /> */}
                    <Slider {...settings}>
                        <div className="slider1"><img alt="" className="img-responsive" src="images/slider_01.jpg" /> </div>
                        <div className="slider2"><img alt="" className="img-responsive" src="images/slider_02.jpg" /> </div>
                        <div className="slider3"><img alt="" className="img-responsive" src="images/slider_003.jpeg" /> </div>
                        <div className="slider4"><img alt="" className="img-responsive" src="images/slider_04.jpeg" /> </div>
                    </Slider>
                </div>
            </div>
        );
    }
};

export default HomeComponent;
