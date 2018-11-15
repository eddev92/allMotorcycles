import axios from 'axios';

class TeamsService {
    getTeams() {
        return axios.get('./mocks/teams.json')
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error.data;
            });
    }
}

export default TeamsService;
