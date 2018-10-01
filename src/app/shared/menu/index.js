import React from 'React';

const MenuComponent = ({ handleClick = () => {} }) => {
        return (
            <nav style={{position: 'fixed'}}>	
                <div className="container">
                    <div className="sixteen columns">
                        <ul className="menu" id="nav">
                            <li><a href="#homepage" onClick={handleClick.bind(this, 1)} >Inicio</a></li>
                            <li><a href="#folio" onClick={handleClick.bind(this, 2)} >Tienda</a></li>
                            <li><a href="#services" onClick={handleClick.bind(this, 3)} >Teams</a></li>
                            <li><a href="#about" onClick={handleClick.bind(this, 4)} >Moteando...</a></li>
                            {/* 
                            
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="blog-white.html">Blog</a></li> */}
                        </ul>	
                        <select className="dropmenu" name="dropmenu" onChange="location = this.options[this.selectedIndex].value;">
                            <option value="" selected="selected">Menu</option>
                            <option value="#homepage">Inicio</option>
                            <option value="#folio">Tienda</option>
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
};

export default MenuComponent;
