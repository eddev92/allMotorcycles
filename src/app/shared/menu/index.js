import React from 'React';
import classNames from 'classnames';
import './../../styles/menu.css';

const MenuComponent = ({ handleClick = () => {}, openModalStore = () => {}, isOpen, handleToggle = () => {}}) => {
    const menuClass = classNames({
        'list-menu show-menu': isOpen === true,
        'list-menu hidden-menu': !isOpen
      });

        return (
            <div className={isOpen ? "nav-content" : "initial-nav"}>
                <div className="main-nav row">
                    <i className="fas fa-bars" onClick={handleToggle}></i>
                    <div className="col-md-11 text-white header-title">
                        <span>
                        ALLMOTORCYCLES PERÚ
                        </span>
                    </div>
                </div>
                <div className={menuClass}>
                    <ul>
                    <li><a href="#homepage" onClick={handleClick.bind(this, 1)} >Inicio <i class="fas fa-home"></i></a></li>
                    <li><a href="#folio" onClick={openModalStore} >Tienda <i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#services" onClick={handleClick.bind(this, 3)} >Teams <i class="fas fa-motorcycle"></i></a></li>
                    <li><a href="#about" onClick={handleClick.bind(this, 4)} >Moteando <i class="fas fa-motorcycle"></i></a></li>
                    </ul>
                    <div className="div-empty" onClick={handleToggle}></div>
                </div>
            </div>

        );
};

export default MenuComponent;
