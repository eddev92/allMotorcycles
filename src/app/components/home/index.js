import React, { Component } from 'react';
import './home.css';

class HomeComponent extends Component {
    render() {
        return(
            <div id="homepage" className="homepage section">
                
                <div className="container">
                    <div className="sixteen columns">
                        <img alt="" className="logo" src="images/logo.png" />
                    </div>
                    
                    <div className="slider-text">
                        <div className="sixteen columns">
                            <div className="line"></div>
                        </div>
                        
                        <div className="twelve columns">
                            <div id="slidecaption"></div>
                        </div>
                        
                        <div className="four columns">
                            <a id="prevslide" className="load-item"><i className="icon-arrow-up"></i></a>
                            <a id="nextslide" className="load-item"><i className="icon-arrow-down"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default HomeComponent;
