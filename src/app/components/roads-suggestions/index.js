import React from 'react';
import '../../styles/roads-tips.css';
import classNames from 'classnames';
import MapMotorcycles from './../maps'

const RoadsAndSuggestions = ({ handleOptionRoadOrTip = () => {}, optionRoadOrTip = '', resetValuesRoad = () => {}, openModal = () => {}, closeModal }) => {
    let style = {};
    console.log(optionRoadOrTip, 'optionRoadOrTip')
    if (optionRoadOrTip === 'ROADS') {
        style = {
            backgroundColor: ''
        };
    } else if (optionRoadOrTip === 'TIPS'){
        style = {
            backgroundColor: ''
        };
    } else {
        style = {
            backgroundImage: 'url(images/roads-tips.jpg)'
        };
    }
    const btnClass1 = classNames({
        'road': true,
        'col-md-12': optionRoadOrTip === 'ROADS',
        'col-md-3': optionRoadOrTip === '',
        'hidden-element': optionRoadOrTip === 'TIPS'
      });
      const btnClass2 = classNames({
        'tip': true,
        'col-md-12': optionRoadOrTip === 'TIPS',
        'col-md-3': optionRoadOrTip === '',
        'hidden-element': optionRoadOrTip === 'ROADS'
      });
    return (
        <div className="row">
            <div className={btnClass1}>
                {optionRoadOrTip !== 'ROADS' && <h2 className="text-white text-center linkTo" onClick={handleOptionRoadOrTip.bind(this, 'ROADS')}>Rutas</h2>}
                {optionRoadOrTip === 'ROADS' && <MapMotorcycles
                                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                                isMarkerShown={true}
                                                loadingElement={<div style={{ height: `100%` }} />}
                                                containerElement={<div style={{ height: `320px`, marginTop: '50px' }} />}
                                                mapElement={<div style={{ height: `100%` }} />}
                                                backOptions={resetValuesRoad}
                                                showRoads={openModal}
                                                closeModal={closeModal}
                                                />}
            </div>
            {(optionRoadOrTip === '' && optionRoadOrTip === '') && <div className="col-md-6 main-roads-tips" style={style}></div>}
            <div className={btnClass2}>
                <h2 className="text-white text-center linkTo" onClick={handleOptionRoadOrTip.bind(this, 'TIPS')}>Tips</h2>

            </div>
        </div>
    )
}

export default RoadsAndSuggestions;
