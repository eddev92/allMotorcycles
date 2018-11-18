import React from 'react';
import '../../styles/rider-card.css';

const RiderComponent = ({ rider= {}, index, handleShowDetail = () => {}, showDetailRider = false, positionRiderSelected, handleResetValues }) => {

    return (
        <div class="col-lg-4 col-xs-12 col-md-4 main-card" key={index}>
            <div class="card-wrapper">
                <div id="card-2" class={(showDetailRider && (positionRiderSelected === index)) ? 'card card-rotating text-center flipped' : 'card card-rotating text-center'}>
                    {
                        !(showDetailRider && (positionRiderSelected === index))
                        &&
                    <div class="face front">
                        <div class="card-up">
                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Team member card image" />
                        </div>
                        <div class="avatar mx-auto white">
                            <img src={rider.urlProfile} class="rounded-circle" alt="Second sample avatar image" />
                        </div>
                        <div class="card-body">
                            <h4 class="font-weight-bold mt-1 mb-3">{rider.firstName} {rider.secondName} {rider.firstLastName} {rider.secondLastName}</h4>
                            <p class="font-weight-bold dark-grey-text">{rider.role}</p>
                            <span class="rotate-btn grey-text" data-card="card-2" onClick={handleShowDetail.bind(this, index)}>
                            Saber más</span>
                        </div>
                    </div>
                    }
                    {
                        (showDetailRider && (positionRiderSelected === index))
                        &&
                    <div class="face back">
                        <div class="card-body">
                            <h4 class="font-weight-bold mt-4 mb-2">
                            <strong>About me</strong>
                            </h4>
                            <hr />
                            <p>{rider.description}</p>
                            <hr />
                            <span class="rotate-btn grey-text" data-card="card-2" onClick={!showDetailRider ? handleShowDetail.bind(this, index) : handleResetValues.bind(this, index)}>Volver</span>
                        </div>
                    </div>
                    }
            </div>
        </div>
    </div>
    )
}

export default RiderComponent;
