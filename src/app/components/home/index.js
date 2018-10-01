import React, { Component } from 'react';
import './home.css';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import 'slick-theme.css';

class HomeComponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          };
        return(
            <div id="homepage" className="homepage section">
                
                <div className="container-fluid">
                    
                    {/* <img alt="" className="logo" src="images/logo.png" /> */}
                    <Slider {...settings}>
                        <div className="slider1"><img alt="" className="" src="images/slide_1.jpg" /> </div>
                        <div className="slider2"><img alt="" className="" src="images/slider_2.jpg" /> </div>
                        <div className="slider3"><img alt="" className="" src="images/slider_3.jpg" /> </div>
                        <div className="slider4"><img alt="" className="" src="images/slider_4.jpg" /> </div>
                    </Slider>
                </div>
            </div>
        );
    }
};

export default HomeComponent;
