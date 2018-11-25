import React from 'react';
import Modal from 'react-responsive-modal';
import './modal.css';
import Checkbox from 'rc-checkbox';
const closeSvg = <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />

const ModalRoads = ({ selectRoad = () => {}, showModal, closeModal, disabled = false, onChange = () => {}, roads = [], isSelected, roadInitial = {}, roadsFinish, roadFinish, showFullRoad = () => {} }) => {
    console.log('isSelected', isSelected)
    console.log('roadInitial', roadInitial)
    console.log('roadFinish', roadFinish)
    console.log('roads', roads)
    const listRoadsInitial = roads.length && roads.map((road, index) => {
        return (
            <div className="road-check row" key={index}>
                <div className="col-md-8">{road.nameRoad}</div>
                    <div className="check col-md-4 checkItem">
                        <label>
                            <Checkbox
                                checked={roadInitial.nameRoad || (roadInitial.nameRoad && roadFinish.nameRoad) ? road.isSelected : false}
                                // onChange={onChange}
                                onClick={selectRoad.bind(this, road, true)}
                                disabled={false}
                            />
                            </label>
                    </div>
                </div>
                )
            })
    const listRoadsFinish = roadsFinish.length && roadsFinish.map((road, index) => {
        return (
            <div className="road-check row" key={index}>
                <div className="col-md-8">{road.nameRoad}</div>
                    <div className="check col-md-4 checkItem">
                        <label>
                            <Checkbox
                                checked={roadFinish.nameRoad || (roadFinish.nameRoad && roadFinish.nameRoad) ? road.isSelected : false}
                                // onChange={onChange}
                                onClick={selectRoad.bind(this, road, false)}
                                disabled={false}
                            />
                            </label>
                    </div>
                </div>
                )
            })
            let width = 0;
            let aux = 0;
            if (roadInitial.nameRoad && roadFinish.nameRoad) {
                for (let i = 1; i <= 100; i++) {
                    width = i;
                }
                console.log(width)
                aux = `${width}%`;
            }
            console.log('aux', aux)
    return (
        <Modal
        open={showModal}
        onClose={closeModal}
        closeIconSvgPath={closeSvg}
        center={true}
        >
                <section className="road-modal">
                    <h2 class="h1-responsive font-weight-bold text-center">Rutas y tips</h2>
                    <p class="grey-text text-center w-responsive mx-auto mb-4">Selecciona alguna de las rutas para visualizar sus detalles.</p>
                        <div className="row">
                            <div className="initial col-md-5">
                            <h4 class="h4-responsive font-weight-bold text-center">Punto de partida</h4>
                                {listRoadsInitial}
                            </div>
                            <div className="col-md-2 iconGo">
                                <span>
                                <i class="fas fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="finish col-md-5">
                            <h4 class="h4-responsive font-weight-bold text-center">Destino</h4>
                                {listRoadsFinish}
                            </div>
                        </div>
                        <div className="main-progress text-center">
                            <div className="progress">                    
                                <div className="progress-bar" role="progressbar" style={{width: aux}} ariaValuenow="100" ariaValuemin="0" ariaValuemax="100">
                            </div>                        
                            </div>
                            {roadInitial.nameRoad && <span className="col-md-3 nameInitial">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                {roadInitial.nameRoad}
                            </span>}
                            {(roadInitial.nameRoad && roadFinish.nameRoad) && <span className="col-md-3 nameFinish">
                                {roadFinish.nameRoad}
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                </span>
                            }
                            <button type="button" className="btn btn-primary col-6" onClick={showFullRoad} disabled={!(roadInitial.nameRoad && roadFinish.nameRoad)}>Ver esta ruta</button>
                        </div>
                     
                    </section>
        </Modal>
    )
}

export default ModalRoads;
