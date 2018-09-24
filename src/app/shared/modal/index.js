import React from 'react';
import './modal.css';
import Checkbox from 'rc-checkbox';

const Modal = ({ showModal, closeModal, disabled = false, onChange = () => {} }) => {
    return (
        <div className={showModal ? 'modal fade show' : 'modal fade'} id="modalRoads" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">INFÓRMATE ACERCA DE ALGUNAS RUTAS</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="road col-md-8">Lomas de Lachay</div>
                        <div className="check col-md-4">
                            <label>
                                <Checkbox
                                    defaultChecked
                                    onChange={onChange}
                                    disabled={disabled}
                                />
                                </label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Seleccionar</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Cerrar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
