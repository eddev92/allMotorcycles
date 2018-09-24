import React from 'react';
import '../../styles/map.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapMotorcycles =  withScriptjs(withGoogleMap(({ isMarkerShown, showRoads = () => {}, backOptions = () => {} }) => {
        return (
            <div className="main-map">
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -12.069188, lng: -77.041903 }}
            >
            {isMarkerShown && <Marker position={{ lat: -12.069188, lng: -77.041903 }} />}
            <div className="row map">
                <div className="add-travel text-center col-md-6">
                    <button type="button" className="btn btn-outline-primary waves-effect" onClick={showRoads}>Ver rutas</button>
                </div>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalRoads">
                Launch demo modal
                </button> */}
                <div className="add-travel text-center col-md-6">
                    <button type="button" className="btn btn-outline-primary waves-effect" onClick={backOptions.bind(this, 'INIT')}>Volver</button>
                </div>
            </div>
            </GoogleMap>
            </div>
        )
}));

export default MapMotorcycles;
