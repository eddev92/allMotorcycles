import React, { Component } from 'React';
import '../../styles/teams.css';
import ModalTeams from './modal-teams';
import TeamsService from '../../services/teams.service';

class TeamsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            showDetailRider: false,
            indexRider: '',
            teams: []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.detailRider = this.detailRider.bind(this);
    }
    openModal() {
        console.log('open modal')
        this.setState({ modalIsOpen: true });
    }
    componentDidMount() {
        this.getTeams();
    }
    getTeams() {
        const service = new TeamsService();
        
        service.getTeams()
            .then((res) => {
                this.setState({ teams: res });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    closeModal() {
    this.setState({modalIsOpen: false});
    }
    detailRider() {
        const { showDetailRider } = this.state;
        console.log('detailRider')
        this.setState({ showDetailRider: !showDetailRider });
    }
    
    render() {
        const { modalIsOpen, showDetailRider, teams } = this.state;
        console.log(teams)

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
                    <div className="row">

                        <div class="col-xs-12 col-md-4">
                            <div class="serviceItem creativity">
                                <div class="serviceInfoWrap">
                                    <div class="serviceInfo">
                                        <div class="serviceInfoFront"></div>
                                        <div class="serviceInfoBack">
                                            <h3>Club Motero de Marcianos</h3>
                                            <p>Más que un Team, una familia. Desde tiempos inmemorables, 3 locos sobre ruedas, A motear!</p>
                                            <button type="button" onClick={this.openModal} className="btn btn-outline-default waves-effect">Saber más</button>
                                        </div>
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
             <ModalTeams 
                modalIsOpen={modalIsOpen}
                afterOpenModal={this.afterOpenModal}
                closeModal={this.closeModal}
                showDetailRider={showDetailRider}
                handleShowDetail={this.detailRider}
                />
         </div>
        )
    }
};

export default TeamsComponent;
