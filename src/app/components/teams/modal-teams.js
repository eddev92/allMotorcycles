import React from 'react';
import Modal from 'react-responsive-modal';
import '../../styles/modal.css';
import RiderComponent from './rider';

const closeSvg = <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
const ModalTeams = ({ modalIsOpen, closeModal = () => {}, indexRider = '', showDetailRider, handleShowDetail = () => {}, team = {}, riders = [], positionRiderSelected, handleResetValues }) => {
    const rides = riders.length && riders.map((rider, index) => {
        return <RiderComponent rider={rider} index={index} handleShowDetail={handleShowDetail} showDetailRider={showDetailRider} positionRiderSelected={positionRiderSelected} handleResetValues={handleResetValues}/>;
    })
    if (team) {
        return (
        <Modal
            open={modalIsOpen}
            onClose={closeModal}
            closeIconSvgPath={closeSvg}
            center={true}
            >
            <section class="my-5 riders">
                <h2 class="h1-responsive font-weight-bold text-center my-5">{team.name} </h2>
                <p class="grey-text text-center w-responsive mx-auto mb-5">{team.description}</p>
                <div class="row">
                        {rides}
                </div>
            </section>
        </Modal>
        )
    }    
}

export default ModalTeams;
