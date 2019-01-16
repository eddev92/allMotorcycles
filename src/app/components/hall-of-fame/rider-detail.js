import React from 'react';
import RankingRiders from './ranking';

const RiderDetail = ({ option }) => {
    console.log(option, 'option riderdetail')
    if (option === 1) {
        return (
            <div className="main-rider-detail">
                <RankingRiders />
            </div>
        );
    }
    return null;
}

export default RiderDetail;
