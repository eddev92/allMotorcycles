import React, { Component } from 'react';
import PaneSideContent from './pane-side-content';
import '../../styles/pane-side.css';

class PaneSideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 0
        }
    }

    selectOption(index) {
        this.setState({ option: index });
    }

    render() {
        const { option } = this.state;
        const { show } = this.props;
        console.log(option)
        return(
            <div className={show ? 'main-side showSide' : 'main-side'} style={{backgroundImage: 'url(images/road.jpg)'}}>
                <div className="row">
                        <div class="card card-image mb-3 col-md-3" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 class="card-title pt-2"><strong className="text-white">PLANIFICA UN VIAJE</strong></h3>
                                <p>Piensa la ruta más larga y divertida que puedas hacer... Ahora imagínate poder publicarla y viajar en grupo con tu hermandad.</p>
                                <a class="btn btn-pink" onClick={this.selectOption.bind(this, 1)}><i class="fa fa-clone left"></i>PLANIFICAR</a>
                                <a class="btn btn-pink" onClick={this.selectOption.bind(this, 4)}><i class="fa fa-clone left"></i>VER VIAJES</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card card-image mb-3 col-md-3" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 class="card-title pt-2"><strong className="text-white">RUTAS Y TIPS</strong></h3>
                                <p>Ahora puedes conocer los mejores tips para esa ruta que pronto conquistarás. Conoce de nuestras rutas exploradas y anímate a viajar.</p>
                                <a class="btn btn-pink" onClick={this.selectOption.bind(this, 2)}><i class="fa fa-clone left"></i>SABER MÁS</a>
                            </div>
                        </div>
                    </div>


                    <div class="card card-image mb-3 col-md-3" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 class="card-title pt-2"><strong className="text-white">MOTOS</strong></h3>
                                <p>Conoce algunos modelos y sus especificaciones técnicas.</p>
                                <a class="btn btn-pink" onClick={this.selectOption.bind(this, 3)}><i class="fa fa-clone left"></i>SABER MÁS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default PaneSideComponent;
