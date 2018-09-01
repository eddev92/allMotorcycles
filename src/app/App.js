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
    componentDidMount() {}

    openModalMoteando(index) {
      const { show } = this.state;
      console.log('abrir modal moteando')
      if (index === 4) {
        this.setState({ show: true });
      }
      else {
        this.setState({ show: false });
      }
    }

  render() {
    const { show } = this.state;
    console.log(show)
    return (
      <div>
        <PaneSideComponent show={show} />
        <MenuComponent handleClick={this.openModalMoteando.bind(this)}/>
        {/* <MenuComponent/> */}
      { !show &&
          <div className="main-app">
          <HomeComponent />
            <MainStoreComponent />
            <TeamsComponent />
        </div>
      }
      </div>
    )
  }
}

export default App;
