import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';
import PaneSideComponent from './shared/pane-side';

class App extends Component {

  constructor() {
    super();
        this.state = {
        }
    }


  render() {
    return (
      <div className="main-app">
          <PaneSideComponent />
          <HomeComponent />
          <MenuComponent />
          <MainStoreComponent />
          <TeamsComponent />
      </div>
    )
  }
}

export default App;
