import React from 'react';
import '../../styles/pane-side-content.css';
import Row from './../table/row';
import RoadsAndSuggestions from '../../components/roads-suggestions';
import HallOfFameComponent from '../../components/hall-of-fame';


const PaneSideContent = ({ option = 0, addTravel = () => {}, handleForm = () => {}, addTravelActive = false, handleChange = () => {}, model = {}, travels = [], handleOptionRoadOrTip = () => {}, optionRoadOrTip, resetValuesRoad, openModal, closeModal, resetOption, roadInitial, roadFinish, hiddenButton }) => {
    const rows = travels.length && travels.map(travel => {
        return <Row obj={travel} />
    })

    if (option === 1) {
        return (
            <div className="main-content-pane">            
                {
                travels.length
                ?
                <div className="main-travels">
                
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Destino</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Organiza</th>
                            <th scope="col">Saber más</th>
                            </tr>
                        </thead>
                        <tbody>
                            {travels.length &&
                                rows
                            }
                        </tbody>
                    </table>
                </div>
                :
                <h2 className="text-white empty-travels">NO EXISTEN VIAJES CONFIRMADOS</h2>
                }
                {
                    !addTravelActive && 
                    <div className="check-info">
                         <div className="suggestion-add-travel text-center">
                            <p>(*)</p>
                            <p>Cada viaje registrado pasará por un proceso de auditoría y aprobración por la administración de AllMotorcycles Perú. De cumplir con los requisitos, este será publicado en la tabla de viajes dentro de las 24 horas.</p>
                        </div>
                        <div className="add-travel text-center">
                            <button type="button" className="btn btn-outline-primary waves-effect" onClick={addTravel}>Agregar un viaje</button>
                        </div>
                    </div>
                }
                {
                    addTravelActive 
                    &&
                        <div className="add-travel-form">
                            <div className="row">
                            <div  className="md-form col-md-6">
                                <i  className="fa fa-user prefix grey-text"></i>
                                <input type="text" id="names" className="form-control" name="names" value={model.names} onChange={handleChange.bind('names')}/>
                                <label for="form-name">Nombre completo</label>
                            </div>
                            <div  className="md-form col-md-5">
                                <i  className="fa fa-user prefix grey-text"></i>
                                <input type="text" id="destinity" className="form-control" name="destinity" value={model.destinity} onChange={handleChange.bind('destinity')}/>
                                <label for="form-name">Destino</label>
                            </div>
                            </div>
                            <div className="row">
                                <div  className="md-form col-md-5">
                                    <i  className="fa fa-user prefix grey-text"></i>
                                    <input type="date" id="dateSal" className="form-control" name="dateSal" value={model.dateSal} onChange={handleChange.bind('dateSal')}/>
                                    <label for="form-name" className="dateSal">Fecha de salida</label>
                                </div>
                                <div  className="md-form col-md-5">
                                    <i  className="fa fa-user prefix grey-text"></i>
                                    <input type="date" id="dateReturn" className="form-control" name="dateReturn" value={model.dateReturn} onChange={handleChange.bind('dateReturn')}/>
                                    <label for="form-name" className="dateSal">Fecha de retorno</label>
                                </div>
                            </div>
                    
                            <div className="row">
                                <div  className="md-form col-md-4">
                                    <i  className="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="point" className="form-control" name="point" value={model.point} onChange={handleChange.bind('point')}/>
                                    <label for="form-name">Punto de partida</label>
                                </div>
                                <div  className="md-form col-md-4">
                                    <i  className="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="city" className="form-control" value={model.city} onChange={handleChange.bind('city')}/>
                                    <label for="form-name">Ciudad actual</label>
                                </div>
                                <div className="col-md-3">
                                    <div class="text-center">
                                    <button class="btn btn-light-blue" onClick={handleForm}>AGREGAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
                );
    } else if (option === 2) {
        return (
            <RoadsAndSuggestions handleOptionRoadOrTip={handleOptionRoadOrTip} optionRoadOrTip={optionRoadOrTip} resetValuesRoad={resetValuesRoad} openModal={openModal} closeModal={closeModal} resetOption={resetOption} roadFinish={roadFinish} roadInitial={roadInitial}/>
        )
    } else {
        return (
            <HallOfFameComponent hiddenButton={hiddenButton} />
        )
    }
    
};

export default PaneSideContent;
