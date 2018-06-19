import React, { Component } from 'react';

class MenuComponent extends Component {
    render() {
        return (
            <nav>	
                <div className="container">
                    <div className="sixteen columns">
                        <ul className="menu" id="nav">
                            <li><a href="#homepage">Home</a></li>
                            <li><a href="#folio">Portfolio</a></li>
                            {/* <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="blog-white.html">Blog</a></li> */}
                        </ul>	
                        <select className="dropmenu" name="dropmenu" onChange="location = this.options[this.selectedIndex].value;">
                            <option value="" selected="selected">Menu</option>
                            <option value="#homepage">Home</option>
                            <option value="#folio">Portfolio</option>
                            {/* <option value="#about">About</option>
                            <option value="#services">Services</option> 
                            <option value="#features">Features</option> 
                            <option value="#contact">Contact</option>
                            <option value="blog-white.html">Blog</option>  */}
                        </select>
                    </div>            
                </div>            
            </nav>
        );
    }

};

export default MenuComponent;
