import React, { Component } from 'react';
import HomeComponent from './components/home';
import MenuComponent from './shared/menu';

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
      </div>
    )
  }
}

export default App;
