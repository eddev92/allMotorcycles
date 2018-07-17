import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';
import TeamsComponent from './components/teams';

class App extends Component {

  constructor() {
    super();
        this.state = {
        }
    }


  render() {
    return (
      <div className="main-app">
          <HomeComponent />
          <MenuComponent />
          <MainStoreComponent />
          <TeamsComponent />
      </div>
    )
  }
}

export default App;
