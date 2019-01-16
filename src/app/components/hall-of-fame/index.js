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
    }
    handleOptionFame(index) {
        const { selectOption } = this.state;
        console.log('entro handleOption', index)
        if (index > 0) {
            this.setState({ selectOption: index });
        }
    }
    render() {
        const { showAllRiders, selectOption } = this.state;
      console.log('HallOfFameComponent selectOption', selectOption)
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
                </div>
            )
    }
}

export default HallOfFameComponent;
