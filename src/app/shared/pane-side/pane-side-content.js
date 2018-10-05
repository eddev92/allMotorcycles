import React from 'react';
import '../../styles/pane-side-content.css';
import Row from './../table/row';
import RoadsAndSuggestions from '../../components/roads-suggestions'; 

const PaneSideContent = ({ option = 0, addTravel = () => {}, handleForm = () => {}, addTravelActive = false, handleChange = () => {}, model = {}, travels = [], handleOptionRoadOrTip = () => {}, optionRoadOrTip, resetValuesRoad, openModal, closeModal }) => {
    console.log(option, 'option')
    console.log(travels, 'pane-sidecomponent')
    const rows = travels.length && travels.map(travel => {
        return <Row obj={travel} />
    })
    let render;
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
                    <div className="add-travel text-center">
                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={addTravel}>Agregar un viaje</button>
                    </div>
                }
                {
                    addTravelActive &&
                <div className="add-travel-form">
                    <div className="row">
                    <div  className="md-form col-md-6">
                        <i  className="fa fa-user prefix grey-text"></i>
                        <input type="text" id="fullName" className="form-control" name="fullName" value={model.fullName} onChange={handleChange.bind('fullName')}/>
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
                        <input type="date" id="dateDeparture" className="form-control" name="dateDeparture" value={model.dateDeparture} onChange={handleChange.bind('dateDeparture')}/>
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
                        <input type="text" id="startingPoint" className="form-control" name="startingPoint" value={model.startingPoint} onChange={handleChange.bind('startingPoint')}/>
                        <label for="form-name">Punto de partida</label>
                    </div>
                    <div  className="md-form col-md-4">
                        <i  className="fa fa-user prefix grey-text"></i>
                        <input type="text" id="currentCity" className="form-control" value={model.currentCity} onChange={handleChange.bind('currentCity')}/>
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
            <RoadsAndSuggestions handleOptionRoadOrTip={handleOptionRoadOrTip} optionRoadOrTip={optionRoadOrTip} resetValuesRoad={resetValuesRoad} openModal={openModal} closeModal={closeModal}/>
        )
    } else {
        return (
            <h2>Motos</h2>
        )
    }
    
};

export default PaneSideContent;
