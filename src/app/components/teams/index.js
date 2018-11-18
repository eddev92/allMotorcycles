import React, { Component } from 'React';
import '../../styles/teams.css';
import ModalTeams from './modal-teams';
import TeamsService from '../../services/teams.service';
import RidersService from '../../services/riders.service';

class TeamsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            showDetailRider: false,
            indexRider: '',
            teams: [],
            team: {},
            riders: [],
            positionRiderSelected: 0
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.detailRider = this.detailRider.bind(this);
        this.handleResetValues = this.handleResetValues.bind(this);
    }
    openModal(team) {
        if (team) {
            this.setState({ team, modalIsOpen: true }, () => {
                this.getRiders(team)
            });            
        }
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
    getRiders(team) {
        const service = new RidersService();

        service.getRiderById(team.teamCode)
            .then((res) => {
                this.setState({ riders: res });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    closeModal() {
    this.setState({modalIsOpen: false});
    }
    detailRider(index) {
        this.setState({ showDetailRider: true, positionRiderSelected: index });
    }
    handleResetValues(option) {
        const { showDetailRider, positionRiderSelected  } = this.state;

        if (showDetailRider && (positionRiderSelected === option)) {
            this.setState({ showDetailRider: false, positionRiderSelected: 0 })        //     return null;
        }
    }
    renderTeams() {
        const { teams } = this.state;
        let listTeams = [];

        if (teams && teams.length > 0) {
            listTeams = teams.map((team, index) => {
                return (
                        <div class="col-xs-12 col-md-4" key={index}>
                            <div class="serviceItem creativity">
                                <div class="serviceInfoWrap">
                                    <div class="serviceInfo">
                                        <div class="serviceInfoFront"></div>
                                        <div class="serviceInfoBack">
                                            <h3>{team.name}</h3>
                                            <p>{team.description}</p>
                                            <button type="button" onClick={this.openModal.bind(this, team)} className="btn btn-outline-default waves-effect">Saber más</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            })
        }
        return listTeams;
        
    }
    render() {
        const { modalIsOpen, showDetailRider, teams, team, riders, positionRiderSelected } = this.state;

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
                        {this.renderTeams()}
                    </div>
                <div class="ten columns marginTop">
                    <p class="introtext">
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
                team={team}
                riders={riders}
                positionRiderSelected={positionRiderSelected}
                handleResetValues={this.handleResetValues}
                />
         </div>
        )
    }
};

export default TeamsComponent;
