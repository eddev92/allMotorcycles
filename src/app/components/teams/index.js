import React, { Component } from 'React';
import '../../styles/teams.css';

class TeamsComponent extends Component {
    render() {
        return (
            <div id="services" class="page section">
                <div class="container servicesContainer">
                    <div class="sixteen columns">
                        <h1><span>Todos</span><br/>Moteando</h1>
                        <h3><span class="mediumBold">El Portal</span> <span class="medium">que une a</span>
                        <br /><span class="medium">toda la hermandad</span> <span class="mediumBold">motera de</span>
                        <br/><span class="largeBold">LIMA...</span>
                        <br /><span class="medium">por ahora.</span> <span class="mediumBold"></span> 
                        </h3>
                    </div>
                <div class="one-third column">
                    <div class="serviceItem creativity">
                        <div class="serviceInfoWrap">
                            <div class="serviceInfo">
                                <div class="serviceInfoFront"></div>
                                <div class="serviceInfoBack">
                                    <h3>Club Motero de Marcianos</h3>
                                    <p>Más que un Team, una familia. Desde tiempos inmemorables, 3 locos sobre ruedas, A motear!</p>
                                    <button type="button" className="btn btn-outline-default waves-effect">Saber más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="one-third column">
                    <div class="serviceItem strategy">
                        <div class="serviceInfoWrap">
                            <div class="serviceInfo">
                                <div class="serviceInfoFront"></div>
                                <div class="serviceInfoBack">
                                    <h3>Los Piratas</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="one-third column">
                    <div class="serviceItem development">
                        <div class="serviceInfoWrap">
                            <div class="serviceInfo">
                                <div class="serviceInfoFront"></div>
                                <div class="serviceInfoBack">
                                    <h3>Los huesos</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ten columns marginTop">
                    <p class="introtext">
                        {/* <span class="dropcap">V</span> */}
                        <span class="highlight">(*) Para tu información</span> <br/>
                        Ahora también puedes inscribirte y pertenecer a uno de los Teams, para motear YA!</p>	
                    <p>El proceso de evaluación y/o requisitos esta sujero a criterio de cada Team</p>
                </div>
             </div>
         </div>
        )
    }
};

export default TeamsComponent;
