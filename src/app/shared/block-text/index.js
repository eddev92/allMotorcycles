import React from 'react';
import '../../styles/block-text.css';

const BlockText = ({ text = '', value = 0, infoProductDelivery = true, key = '', marginTp = '' }) =>  {
    
    if (value > 0 && key.length > 0) {
        return (
            <div className="main-content-block-text" style={{marginTop: marginTp ? marginTp : '15px'}}>
                <div className="content-block row">
                    <div className="col-md-6">{key}</div>
                    <div className="col-md-6">{value}</div>
                </div>
            </div>
        )
    }
    if (infoProductDelivery && text.length > 0) {
        return (
            <div className="main-content-block-text" style={{marginTop: marginTp ? marginTp : '15px'}}>
                <div className="content-block">
                    <h5>{text}</h5>
                </div>
                <div className="content-block">
                    <h6>*El envío de este producto es con contraentrega o delivery previo depósito. La cuenta a depositar será enviada luego de confirmar la compra.</h6>
                </div>
            </div>
        )
    }
    return (
        <div className="main-content-block-text" style={{marginTop: marginTp ? marginTp : '15px'}}>
            <div className="content-block">
                <h5>{text}</h5>
            </div>
            
        </div>
    )
    
}

export default BlockText;
