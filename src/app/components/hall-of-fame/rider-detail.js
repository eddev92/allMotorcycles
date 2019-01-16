import React from 'react';

const RiderDetail = ({ option = 0 }) => {
    if (option === 1) {
        return (
            <div className="main-rider-detail">
                <h1>RANKING MOTEROS</h1>
            </div>
        );
    }
    null;
}

export default RiderDetail;
