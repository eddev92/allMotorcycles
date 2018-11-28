import React from 'react';
import '../../styles/map.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapMotorcycles =  withScriptjs(withGoogleMap(({ isMarkerShown, showRoads = () => {}, backOptions = () => {}, roadInitial = {}, roadFinish = {} }) => {
    console.log('roadInitial', roadInitial)
    console.log('roadFinish', roadFinish)
        return (
            <div className="main-map">
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: -12.069188, lng: -77.041903 }}
            >
            {(roadInitial && roadInitial.nameRoad && roadInitial.nameRoad.length) && <Marker position={{ lat: -12.069188, lng: -77.041903 }} />}
            {(roadFinish && roadFinish.nameRoad && roadFinish.nameRoad.length) && <Marker position={{ lat: -12.069188, lng: -77.091903 }} />}
            <div className="row map">
                <div className="see-roads text-center col-md-6">
                    <button type="button" className="btn btn-outline-primary waves-effect" onClick={showRoads}>Ver rutas</button>
                </div>
                <div className="back-roads text-center col-md-6">
                    <button type="button" className="btn btn-outline-primary waves-effect" onClick={backOptions.bind(this, 'INIT')}>Ver tips</button>
                </div>
            </div>
            </GoogleMap>
            </div>
        )
}));

export default MapMotorcycles;
