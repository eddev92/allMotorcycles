import React, { Component } from 'react';
import  '../../styles/init.css';
import { MDBInput } from "mdbreact";
import Spinner from '../../shared/spinner';

class InitComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: true,
            showOptions: false,
            isShow: false
        };
        this.toggleTab = this.toggleTab.bind(this);
    }
    componentDidMount() {
        if (this.state.showSpinner) {
          setTimeout(() => {
            // this.setState({ showSpinner: false })
            this.setState({showOptions: true})
          }, 1500);
        }
      }
      toggleTab() {
          const { isShow } = this.state;
console.log('entro')
        if (this.state.showOptions) {
            setTimeout(() => {
                // this.setState({ showSpinner: false })
                this.setState({ isShow: !isShow });
            }, 1500);
        }
      }
    render() {
        const { showSpinner, showOptions, isShow } = this.state;
        const { enterSiteWeb, authRider = () => {} } = this.props;

        return (
            <div className="main-init" style={{backgroundImage: 'url(./images/roads/rodada1.jpg)'}}>
            {showSpinner && <Spinner/>}
                <div class={showOptions ? 'row showOptions' : 'row hiddenOptions'}>
                    <div class="col-md-8 mb-4">
                    <div class="card gradient-card">
                        <div class="card-image"  onClick={this.toggleTab} /*style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}*/>
                            <a href="#!">
                            <div class="d-flex h-100 mask blue-gradient-rgba">
                                <div class="first-content align-self-center p-3">
                                <h3 class="card-title">SOY UN MOTERO</h3>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class={isShow ? 'card-body white showForm' : 'card-body white'}>
                            <h4 class="text-uppercase font-weight-bold my-4 text-center">BIENVENIDO MOTERO </h4>
                            <p class="text-muted" align="center">Ingresa tu usuario y password para acceder a nuestra plataforma.</p>
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleInput">Usuario</label>
                                <input type="text" id="user" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInput">Password</label>
                                <input type="password" id="password" className="form-control" />
                            </div>
                            <button type="button" className="btn btn-outline-danger waves-effect" onClick={authRider}>INGRESAR</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 mb-4">
                    <div class="card gradient-card">
                        <div class="card-image">
                            <a href="#!">
                            <div class="d-flex h-100 mask purple-gradient-rgba">
                                <div class="first-content align-self-center p-3">
                                <h3 class="card-title">VISÍTANOS</h3>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="card-body white">
                            <h4 class="text-uppercase font-weight-bold my-4 text-center">Bienvenido!</h4>
                            <p class="text-muted" align="center">Aquí podrás encontrar entre accesorios, conocer los mejores tips y conocer a nuestra comunidad motera, adelante!</p>
                            <button type="button" className="btn btn-outline-danger waves-effect" onClick={enterSiteWeb}>ENTRAR</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>                
        )
    }
};

export default InitComponent;
