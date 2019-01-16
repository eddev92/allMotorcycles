import React, { Component } from 'react';
import CarouselRiders from '../../shared/carousel';
import '../../styles/hall-of-fame.css';
import RiderDetail from './rider-detail';
import DashoardHallOfFame from './dashboard';

class HallOfFameComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectOption: 0,
            showRanking: false,
            riderSelected: {},
            showAllRiders: false,
            showRiderSelected: false
        }
        this.handleOptionFame = this.handleOptionFame.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    handleOptionFame(index) {
        console.log('entro handleOption', index)
        if (index > 0) {
            this.setState({ selectOption: index }, () => {
                this.props.hiddenButton();
            });
        }
    }
    goBack() {
        this.setState({ selectOption: 0 });
        this.props.hiddenButton();
    }
    render() {
        const { showAllRiders, selectOption } = this.state;
      console.log('HallOfFameComponent selectOption', selectOption)
      console.log('showAllRiders', showAllRiders)
            if (selectOption === 0) {
                return <DashoardHallOfFame handleOption={this.handleOptionFame}/>
            }
            return ( 
                <div className="main-hall-of-fame">
                    {showAllRiders ?
                        <RiderDetail option={selectOption}/>
                    :
                        <CarouselRiders option={selectOption}/>
                    }
                    <a className="btn btn-pink volver-atras" onClick={this.goBack}><i class="fa fa-clone left"></i>Volver</a>
                </div>
            )
    }
}

export default HallOfFameComponent;
