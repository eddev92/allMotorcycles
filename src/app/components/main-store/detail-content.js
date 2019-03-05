import React from 'react';
import BlockText from '../../shared/block-text';

const DetailContentProduct = ({ productSelected = {} }) => {
    return(
        <div className="col-md-6 detail-item-store">
            <div className="info-product">
                <BlockText text={'LUCES LED DE 25W CON ADAPTADOR'} infoProductDelivery={false} marginTp={'0'}/>
                <BlockText text={'LUCES LED DE 25W CON ADAPTADOR DE MARCA DSADSAD VIENE CON TUERCAS Y ADAPTADOR PARA CUALQUIER MOTO, ES UBNIVERSAL'} />
            </div>
            <div className="buy-item row">
                <div className="buy-confirm col-md-6">
                <button type="button" className="btn btn-outline-danger waves-effect">Comprar</button>
                </div>
                <div className="gift-confirm  col-md-6">
                <button type="button" className="btn btn-outline-warning waves-effect">Obsequiar</button>
                </div>
            </div>
        </div>
    )
}

export default DetailContentProduct;
