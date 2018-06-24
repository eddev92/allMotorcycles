import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';
import MainStoreComponent from './components/main-store';

class App extends Component {

  constructor() {
    super();
        this.state = {
        }
    }


  render() {
    return (
      <div>
          <HomeComponent />
          <MenuComponent />
          <MainStoreComponent />
      </div>
    )
  }
}

export default App;
