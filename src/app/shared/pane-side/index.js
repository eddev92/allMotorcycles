import React, { Component } from 'react';
import PaneSideContent from './pane-side-content';
import classNames from 'classnames';
import '../../styles/pane-side.css';

class PaneSideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 0,
            addTravelActive: false,
            modelTravel: {
                fullName: '',
                destinity: '',
                dateDeparture: '',
                dateReturn: '',
                startingPoint: '',
                currentCity: ''
            }
        }
    }
    handleChange(evt, key) {
        const model = { ...this.state.modelTravel };
        console.log(evt.target.value)
        console.log(evt.target)
        console.log(key)
        
    }
    selectOption(index) {
        this.setState({ option: index });
    }
    resetOption() {
        this.setState({ option: 0 });
    }
    addTravel() {
        this.setState({ addTravelActive: true });
    }
    handleForm(form) {
        console.log(form)
    }
    render() {
        const { option, addTravelActive, modelTravel } = this.state;
        const { show } = this.props;
        console.log('option', option)
        console.log(modelTravel)
        const style = classNames(
            'card card-image mb-3 col-md-3',
            {'goLeft': option > 0}
        );
        const styleContentInfo = classNames(
            'col-md-7 pane-content-info',
            {'hidden-div': option > 0}
        )
        return(
            <div className={show ? 'main-side showSide' : 'main-side'} style={{backgroundImage: 'url(images/road.jpg)'}}>
                <div className="row">
                {
                (option === 1 || option === 0 || option === 4) &&
                <div className={style} style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 class="card-title pt-2"><strong className="text-white">PLANIFICA UN VIAJE</strong></h3>
                                <p>Piensa la ruta más larga y divertida que puedas hacer... Ahora imagínate poder publicarla y viajar en grupo con tu hermandad.</p>
                                <a className="btn btn-pink" onClick={this.selectOption.bind(this, 1)}><i class="fa fa-clone left"></i>VIAJAR</a>
                            </div>
                        </div>
                    {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i class="fa fa-clone left"></i>Volver</a>}
                </div>
                }
                {
                (option === 2 || option === 0) &&
                    <div className={style} style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 className="card-title pt-2"><strong className="text-white">RUTAS Y TIPS</strong></h3>
                                <p>Ahora puedes conocer los mejores tips para esa ruta que pronto conquistarás. Conoce de nuestras rutas exploradas y anímate a viajar.</p>
                                <a className="btn btn-pink" onClick={this.selectOption.bind(this, 2)}><i class="fa fa-clone left"></i>SABER MÁS</a>
                            </div>
                        </div>
                        {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i class="fa fa-clone left"></i>Volver</a>}
                    </div>
                }
                {
                (option === 3 || option === 0) &&
                    <div class={style} style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 className="card-title pt-2"><strong className="text-white">MOTOS</strong></h3>
                                <p>Conoce algunos modelos y sus especificaciones técnicas.</p>
                                <a className="btn btn-pink" onClick={this.selectOption.bind(this, 3)}><i class="fa fa-clone left"></i>SABER MÁS</a>
                            </div>
                        </div>
                        {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i class="fa fa-clone left"></i>Volver</a>}
                    </div>
                }
                <div className={styleContentInfo}>
                    <PaneSideContent option={option} addTravel={this.addTravel.bind(this)} addTravelActive={addTravelActive} handleForm={this.handleForm.bind(this)} handleChange={this.handleChange.bind(this, '')} model={modelTravel}/>
                </div>
            </div>
        </div>
        );
    };
}

export default PaneSideComponent;
