import React from 'react';
import '../../styles/spinner.css';

const Spinner = () => (
    <div className="containerThing">
        <a id="titleHeader" title="Hey">ALLMOTORCYCLES PERÚ</a>
            <div className="spinnerContainer">
            <div className="circle centre"></div>
            <div className="inner circle"></div>
            <div className="middle circle"></div>
            <div className="outer circle"></div>
        </div>
    </div>
);

export default Spinner;
