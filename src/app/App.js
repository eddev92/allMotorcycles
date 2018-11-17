import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';
import PaneSideComponent from './shared/pane-side';
import Modal from './shared/modal';

class App extends Component {

  constructor(props) {
    super(props);
        this.state = {
          show: false,
          option: '',
          showModal: false,
          disabled: false
        }
    }
    componentDidMount() {}

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

    resetValuesRoad(evt, key) {
        this.setState({ option: '' })
    }
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
    onChange(e) {
      console.log('Checkbox checked:', e.target.checked);
    }
  render() {
    const { show, option, showModal, disabled } = this.state;
    return (
      <div>
        <PaneSideComponent show={show} handleOptionRoadOrTip={this.handleOptionRoadOrTip.bind(this)} optionRoadOrTip={option} resetValuesRoad={this.resetValuesRoad.bind(this)} openModal={this.openModal.bind(this)} />
        <MenuComponent handleClick={this.openModalMoteando.bind(this)}/>
        {/* <MenuComponent/> */}
      { !show &&
          <div className="main-app" style={{paddingTop: '50px'}}>
          <HomeComponent />
            {/* <MainStoreComponent /> */}
            <TeamsComponent/>
        </div>
      }
       <Modal showModal={showModal} closeModal={this.closeModal.bind(this)} disabled={disabled} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

export default App;
