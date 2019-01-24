import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';
import PaneSideComponent from './shared/pane-side';
import ModalRoads from './shared/modal';
import classNames from 'classnames';
import RoadsTipsService from './services/roads-tips.service';
import InitComponent from './components/init';

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
          roadFinish: {},
          showModalStore: false,
          isOpen: false,
          init: true
        }
        this.selectRoad = this.selectRoad.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidMount() {
      this.getRoadsTips();
      this.getRoadsTipsFinish();
      console.log('entroc omponentDidMount')
    }
    
    componentDidUpdate() {
      if (this.state.roadsInitial.length && this.state.roadsFinish.length) {
        setTimeout(() => {
          // this.setState({ init: false })
        }, 2000);
      }
    }

    openModalMoteando(index) {
      if (index === 4) {
        this.setState({ show: true, isOpen: false });
      }
      else {
        this.setState({ show: false, isOpen: false });
      }
    }
  
    handleToggle() {
      const { isOpen } = this.state;

      this.setState({isOpen: !isOpen});
    };

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
      console.log('ver ruta')
      this.setState({showModal: true});
    }
    closeModal() {
      this.setState({showModal: false, roadInitial: {}, roadFinish: {} });
    }
    handleOptionRoadOrTip(index) {
      if (index !== '') {
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
    openModalStore() {
      const { showModalStore } = this.state;

      this.setState({ showModalStore: !showModalStore });
    }
    resetValuesRoad(evt, key) {
        this.setState({ option: '' })
    }
    onChange(e) {      
      console.log('Checkbox checked:', e.target.checked);
    }
    showFullRoad() {
      this.setState({showModal: false});
    }
  render() {
    const { show, option, showModal, disabled, roadsInitial, isSelected, roadsFinish, roadInitial, roadFinish, showModalStore, isOpen, init } = this.state;
    if (init) {
      return <InitComponent />
    }
    return (
      <div className="main-app">
        <PaneSideComponent show={show} handleOptionRoadOrTip={this.handleOptionRoadOrTip.bind(this)} optionRoadOrTip={option} resetValuesRoad={this.resetValuesRoad.bind(this)} openModal={this.openModal.bind(this)} roadFinish={roadFinish} roadInitial={roadInitial}/>
        <MenuComponent handleClick={this.openModalMoteando.bind(this)} openModalStore={this.openModalStore.bind(this)} isOpen={isOpen} handleToggle={this.handleToggle} />
        <MainStoreComponent showModal={showModalStore} closeModal={this.openModalStore.bind(this)}/>
      { !show &&
          <div className="main-app" style={{paddingTop: '50px'}}>
          <HomeComponent />
            <TeamsComponent/>
        </div>
      }
      {/* modal en rutas de moteando section */}
       <ModalRoads selectRoad={this.selectRoad} showModal={showModal} closeModal={this.closeModal.bind(this)} disabled={disabled} onChange={this.onChange.bind(this)} roads={roadsInitial} isSelected={isSelected} roadInitial={roadInitial} roadsFinish={roadsFinish} roadFinish={roadFinish} showFullRoad={this.showFullRoad.bind(this)}/>
      </div>
    )
  }
}

export default App;
