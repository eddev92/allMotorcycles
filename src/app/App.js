import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';
import PaneSideComponent from './shared/pane-side';
import ModalRoads from './shared/modal';
import classNames from 'classnames';
import RoadsTipsService from './services/roads-tips.service';

class App extends Component {

  constructor(props) {
    super(props);
        this.state = {
          show: false,
          option: '',
          showModal: false,
          disabled: false,
          roadsInitial: [],
          roadsFinish: [],
          isSelected: false,
          roadInitial: {},
          roadFinish: {}
        }
        this.selectRoad = this.selectRoad.bind(this);
    }
    componentDidMount() {
      this.getRoadsTips();
      this.getRoadsTipsFinish();
    }
    openModalMoteando(index) {
      const { show } = this.state;
      if (index === 4) {
        this.setState({ show: true });
      }
      else {
        this.setState({ show: false });
      }
    }
    toggle() {
      this.setState((state) => ({
        disabled: !state.disabled,
      }));
    }
    selectRoad(road, isInitial) {
      const { roadsInitial, roadsFinish } = this.state;
      let aux = [];
      if (isInitial) {
          aux = [ ...roadsInitial ];
          aux.length && aux.map((el) => {
            if (el.roadCode === road.roadCode) {     
              if (road.isSelected) {
                el.isSelected = false;
              } else {
                el.isSelected = true;              
              }
            } else {
              el.isSelected = false;
            }
          })      
        this.setState({ roadsInitial: aux, roadInitial: road });
          } else {
            aux = [ ...roadsFinish ]
            aux.length && aux.map((el) => {
              if (el.roadCode === road.roadCode) {     
                if (road.isSelected) {
                  el.isSelected = false;
                } else {
                  el.isSelected = true;              
                }
              } else {
                el.isSelected = false;
              }
            })      
          this.setState({ roadsFinish: aux, roadFinish: road});
          }
          
    }
    openModal() {
      this.setState({showModal: true});
    }
    closeModal() {
      this.setState({showModal: false});
    }
    handleOptionRoadOrTip(index) {
      const { option } = this.state;
      if (index != '') {
        this.setState({ option: index })
      }
    }
    getRoadsTips() {
      const service = new RoadsTipsService();

      service.getRoadsAndTips()
        .then((res) => {
          this.setState({ roadsInitial: res });
        })
        .catch((err) => {
          return console.log(err)
        })
    }
    getRoadsTipsFinish() {
      const service = new RoadsTipsService();

      service.getRoadsAndTipsFinish()
        .then((res) => {
          this.setState({ roadsFinish: res });
        })
        .catch((err) => {
          return console.log(err)
        })
    }
    resetValuesRoad(evt, key) {
        this.setState({ option: '' })
    }
    onChange(e) {
      
      console.log('Checkbox checked:', e.target.checked);
    }
  render() {
    const { show, option, showModal, disabled, roadsInitial, isSelected, roadsFinish, roadInitial, roadFinish } = this.state;
    console.log('roads', roadsInitial)
    return (
      <div>
        <PaneSideComponent show={show} handleOptionRoadOrTip={this.handleOptionRoadOrTip.bind(this)} optionRoadOrTip={option} resetValuesRoad={this.resetValuesRoad.bind(this)} openModal={this.openModal.bind(this)} roadFinish={roadFinish} roadInitial={roadInitial}/>
        <MenuComponent handleClick={this.openModalMoteando.bind(this)}/>
        {/* <MenuComponent/> */}
      { !show &&
          <div className="main-app" style={{paddingTop: '50px'}}>
          <HomeComponent />
            {/* <MainStoreComponent /> */}
            <TeamsComponent/>
        </div>
      }
      {/* modal en rutas de moteando section */}
       <ModalRoads selectRoad={this.selectRoad} showModal={showModal} closeModal={this.closeModal.bind(this)} disabled={disabled} onChange={this.onChange.bind(this)} roads={roadsInitial} isSelected={isSelected} roadInitial={roadInitial} roadsFinish={roadsFinish} roadFinish={roadFinish}/>
      </div>
    )
  }
}

export default App;
