import React, { Component } from 'react';
import PaneSideContent from './pane-side-content';
import classNames from 'classnames';
import '../../styles/pane-side.css';
import RoadsService from '../../services/roads.service';

class PaneSideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 0,
            addTravelActive: false,
            modelTravel: {
                names: '',
                destinity: '',
                dateSal: '',
                dateReturn: '',
                point: '',
                city: ''
            },
            hiddenButton: false,
            travels: []
        };
        this.hiddenButton = this.hiddenButton.bind(this);
    }
    componentDidMount() {
        this.getRoads();
    }
    handleChange(evt, key) {
        const model = { ...this.state.modelTravel };
        model[evt.target.id] = evt.target.value;
        this.setState({ modelTravel: model });
    }
    selectOption(index) {
        this.setState({ option: index });
    }
    resetOption() {
        this.setState({ option: 0 });
    }
    getRoads() {
        const service = new RoadsService();
        service.getRoads()
            .then((response) => {
                this.setState({ travels: response });
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    addTravel() {
        this.setState({ addTravelActive: true });
    }
    handleForm() {
        const { modelTravel } = this.state;
        if (modelTravel) {
            const service = new RoadsService();

            service.registerRoad(modelTravel)
                .then((res) => {
                    this.getRoads();
                    return console.log(res.data);
                })
                .catch((err) => {
                    console.log('ERROR al registrar viaje', err)
                })
        }
        
    }
    hiddenButton() {
        const { hiddenButton } = this.state;
        if (hiddenButton) {
            return this.setState({ hiddenButton: false });
        }
        this.setState({ hiddenButton: true });
    }
    render() {
        const { option, addTravelActive, modelTravel, travels, hiddenButton } = this.state;
        const { show, handleOptionRoadOrTip, optionRoadOrTip, resetValuesRoad, openModal, roadInitial, roadFinish } = this.props;
        const style = classNames(
            'card card-image mb-3 col-xs-4 col-md-3',
            {'goLeft': option > 0}
        );
        const styleContentInfo = classNames(
            'col-md-10 pane-content-info',
            {'hidden-div': option > 0}
        )
        return(
            <div className={show ? 'main-side showSide' : 'main-side'} style={{backgroundImage: 'url(images/road.jpg)'}}>
                <div className="row">
                {
                !(option > 0) &&
                <div className={style} style={{backgroundImage: 'url(images/road.jpg)'}}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 className="card-title pt-2"><strong className="text-white">PLANIFICA UN VIAJE</strong></h3>
                                <p>Piensa la ruta más larga y divertida que puedas hacer... Ahora imagínate poder publicarla y viajar en grupo con tu hermandad.</p>
                                <a className="btn btn-pink" onClick={this.selectOption.bind(this, 1)}><i className="fa fa-clone left"></i>VIAJAR</a>
                            </div>
                        </div>
                    {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i className="fa fa-clone left"></i>Volver</a>}
                </div>
                }
                {
                !(option > 0) &&
                    <div className={style} style={{backgroundImage: 'url(images/road.jpg)'}}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 className="card-title pt-2"><strong className="text-white">RUTAS Y TIPS</strong></h3>
                                <p>Ahora puedes conocer los mejores tips para esa ruta que pronto conquistarás. Conoce de nuestras rutas exploradas y anímate a viajar.</p>
                                {option !== 2 && <a className="btn btn-pink" onClick={this.selectOption.bind(this, 2)}><i className="fa fa-clone left"></i>SABER MÁS</a>}
                            </div>
                        </div>
                        {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i className="fa fa-clone left"></i>Volver</a>}
                    </div>
                }
                {
                !(option > 0) &&
                    <div class={style} style={{backgroundImage: 'url(images/road.jpg)'}}>
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 black-shadow">
                            <div className="int-card">
                                <h3 className="card-title pt-2"><strong className="text-white">SALÓN DE LA FAMA</strong></h3>
                                <p>Ahora puedes exhibir a tu engreída en nuestro Salón de la Fama y poder recibir opiniones, calificaciones y participar en nuestros sorteos de diversos premios por ranking.</p>
                                <a className="btn btn-pink" onClick={this.selectOption.bind(this, 3)}><i className="fa fa-clone left"></i>SABER MÁS</a>
                            </div>
                        </div>
                        {option > 0 && <a className="btn btn-pink" onClick={this.resetOption.bind(this)}><i className="fa fa-clone left"></i>Volver</a>}
                    </div>
                }
                <div className={styleContentInfo}>
                    <PaneSideContent option={option} addTravel={this.addTravel.bind(this)} addTravelActive={addTravelActive} handleForm={this.handleForm.bind(this)} handleChange={this.handleChange.bind(this)} model={modelTravel} travels={travels} handleOptionRoadOrTip={handleOptionRoadOrTip} optionRoadOrTip={optionRoadOrTip} resetValuesRoad={resetValuesRoad} openModal={openModal} resetOption={this.resetOption.bind(this)} roadFinish={roadFinish} roadInitial={roadInitial} hiddenButton={this.hiddenButton} />
                    {!hiddenButton && <a className="btn btn-pink volver-atras" onClick={this.resetOption.bind(this)}><i className="fa fa-clone left"></i>Volver</a>}
                </div>
            </div>
        </div>
        );
    };
}

export default PaneSideComponent;
