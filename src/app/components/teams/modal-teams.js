import React from 'react';
import Modal from 'react-responsive-modal';
import '../../styles/modal.css';

const closeSvg = <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
const ModalTeams = ({ modalIsOpen, closeModal = () => {}, indexRider = '', showDetailRider, handleShowDetail = () => {}, team = {} }) => {
    console.log('team', team)
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
                            <div class="col-lg-4 col-xs-12 col-md-4">
                                <div class="card-wrapper">
                                <div id="card-2" class={showDetailRider ? 'card card-rotating text-center flipped' : 'card card-rotating text-center'}>
                                    {
                                        !showDetailRider
                                        &&
                                    <div class="face front">
                                        <div class="card-up">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Team member card image" />
                                        </div>
                                        <div class="avatar mx-auto white">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" class="rounded-circle" alt="Second sample avatar image" />
                                        </div>
                                        <div class="card-body">
                                            <h4 class="font-weight-bold mt-1 mb-3">Anna Deynah</h4>
                                            <p class="font-weight-bold dark-grey-text">Web Designer</p>
                                            <span class="rotate-btn grey-text" data-card="card-2" onClick={handleShowDetail}>
                                            Saber más</span>
                                        </div>
                                    </div>
                                    }
                                    {
                                        showDetailRider
                                        &&
                                    <div class="face back">
                                        <div class="card-body">
                                            <h4 class="font-weight-bold mt-4 mb-2">
                                            <strong>About me</strong>
                                            </h4>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta.
                                            Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus,
                                            voluptatum eum, officia laudantium quaerat?
                                            </p>
                                            <hr />
                                            <span class="rotate-btn grey-text" data-card="card-2" onClick={handleShowDetail}>
                                            Saber más</span>
                                        </div>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
        )
    }    
}

export default ModalTeams;
