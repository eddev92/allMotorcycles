import React from 'react';
import Modal from 'react-responsive-modal';

const ModalBasic = ({ children = {} }) => {
    return (
        <Modal
        open={showModal}
        onClose={closeModal}
        closeIconSvgPath={closeSvg}
        center={true}
        >
            {children || null}
        </Modal>
    )
}

export default ModalBasic;
