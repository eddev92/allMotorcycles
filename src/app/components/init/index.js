import React, { Component } from 'react';
import  '../../styles/init.css';
import Spinner from '../../shared/spinner';

class InitComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: true
        };
    }
    render() {
        const { showSpinner } = this.state;

        if (showSpinner) {
            return <Spinner/>
        }
        return (
            <div className="main-init">
                <div class="row">
                    <div class="col-md-6 mb-4">
                    <div class="card gradient-card">
                        <div class="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                            <a href="#!">
                            <div class="text-white d-flex h-100 mask blue-gradient-rgba">
                                <div class="first-content align-self-center p-3">
                                <h3 class="card-title">Today's sales</h3>
                                <p class="lead mb-0">Click on this card to see details</p>
                                </div>
                                <div class="second-content align-self-center mx-auto text-center">
                                <i class="far fa-money-bill-alt fa-3x"></i>
                                </div>
                            </div>
                            </a>

                        </div>
                        <div class="third-content ml-auto mr-4 mb-2">
                            <p class="text-uppercase text-muted">Today's sale</p>
                            <h4 class="font-weight-bold float-right">2000$</h4>
                        </div>
                        <div class="card-body white">
                            <div class="progress md-progress">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text-muted">Better than last week (25%)</p>
                            <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
                            <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6 mb-4">
                    <div class="card gradient-card">
                        <div class="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                            <a href="#!">
                            <div class="text-white d-flex h-100 mask purple-gradient-rgba">
                                <div class="first-content align-self-center p-3">
                                <h3 class="card-title">Subscriptions</h3>
                                <p class="lead mb-0">Click on this card to see details</p>
                                </div>
                                <div class="second-content  align-self-center mx-auto text-center">
                                <i class="fas fa-chart-line fa-3x"></i>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="third-content  ml-auto mr-4 mb-2">
                            <p class="text-uppercase text-muted">Subscriptions</p>
                            <h4 class="font-weight-bold float-right">200</h4>
                        </div>
                        <div class="card-body white">
                            <div class="progress md-progress">
                            <div class="progress-bar purple lighten-2" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text-muted">Worse than last week (25%)</p>
                            <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
                            <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
                        </div>
                    </div>
                    </div>                   
                </div>
            </div>
        )
    }
};

export default InitComponent;
