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
        };
    }
    handleOption(index) {
        if (index) {
            console.log(this.state.selectOption)
            this.setState({ selectOption: index })
        }
    }
    render() {
        const { showAllRiders, selectOption } = this.state;
      console.log('selectOption', selectOption)
            if (selectOption > 0) {
                return ( 
                    <div className="main-hall-of-fame">
                        {showAllRiders ?
                            <RiderDetail />
                        :
                            <CarouselRiders />
                        }
                    </div>
                )
            }
            return <DashoardHallOfFame handleOption={this.handleOption.bind(this)}/>
            
    }
}

export default HallOfFameComponent;
