import React, { Component } from 'react';
import CardMethodSent from './card-method-sent';
import { MDBRow } from "mdbreact";

class BuyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
        }
    }

    render() {
        const { options = [], goTobackFromBuy = () => {} } = this.props;
        console.log('renderBuyItem renderizo', options)
        return (
            <div style={{margin: "25px"}}>
                <MDBRow>                   
                        {options.length && options.map((opt, index) => {
                            return <CardMethodSent info={opt} key={index}/>
                        })}
                </MDBRow>
                <div className="super-button row" onClick={goTobackFromBuy.bind(this)}>
                <h3>
                    VOLVER
                </h3>
                </div>
            </div>
        )
    }
}

export default BuyItem;
