import React from 'react';
import '../../styles/pane-side-content.css';

const PaneSideContent = ({ option = 0, addTravel = () => {}, handleForm = () => {}, addTravelActive = false, handleChange = () => {}, model = {} }) => {
    return (
    <div className="main-content-pane">
        <div className="main-travels">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Destino</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Saber más</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                    <tr/>
                </tbody>
            </table>
        </div>
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
                <input type="text" id="form-name" className="form-control" value={model.fullName} oncChange={handleChange.bind(this, 'fullName')}/>
                <label for="form-name">Nombre completo</label>
            </div>
            <div  className="md-form col-md-5">
                <i  className="fa fa-user prefix grey-text"></i>
                <input type="text" id="form-name" className="form-control" value={model.destinity} oncChange={handleChange.bind(this, 'destinity')}/>
                <label for="form-name">Destino</label>
            </div>
            </div>
        <div className="row">
            <div  className="md-form col-md-5">
                <i  className="fa fa-user prefix grey-text"></i>
                <input type="date" id="form-name" className="form-control" value={model.dateDeparture} oncChange={handleChange.bind(this, 'dateDeparture')}/>
                <label for="form-name" className="dateSal">Fecha de salida</label>
            </div>
            <div  className="md-form col-md-5">
                <i  className="fa fa-user prefix grey-text"></i>
                <input type="date" id="form-name" className="form-control dateRet" value={model.dateReturn} oncChange={handleChange.bind(this, 'dateReturn')}/>
                <label for="form-name" className="dateSal">Fecha de retorno</label>
            </div>
        </div>

        <div className="row">
            <div  className="md-form col-md-4">
                <i  className="fa fa-user prefix grey-text"></i>
                <input type="text" id="form-name" className="form-control" value={model.startingPoint} oncChange={handleChange.bind(this, 'startingPoint')}/>
                <label for="form-name">Punto de partida</label>
            </div>
            <div  className="md-form col-md-4">
                <i  className="fa fa-user prefix grey-text"></i>
                <input type="text" id="form-name" className="form-control" value={model.currentCity} oncChange={handleChange.bind(this, 'currentCity')}/>
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
};

export default PaneSideContent;
