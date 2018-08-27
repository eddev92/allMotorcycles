import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';
import PaneSideComponent from './shared/pane-side';

class App extends Component {

  constructor(props) {
    super(props);
        this.state = {
          show: false
        }
    }
    openModalMoteando() {
      const { show } = this.state;
      this.setState({ show: true });
    }

  render() {
    const { show } = this.state;

    return (
      <div>
        <PaneSideComponent show={show} />
        {/* <MenuComponent handleClick={this.openModalMoteando}/> */}
        <MenuComponent/>
      {/* { !show && */}
          <div className="main-app">
            <HomeComponent />
            <MainStoreComponent />
            <TeamsComponent />
        </div>
      {/* } */}
      </div>
    )
  }
}

export default App;
