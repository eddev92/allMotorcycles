import axios from 'axios';

class RoadsTipsService {
    getRoadsAndTips() {
        return axios.get('./mocks/tips-roads-map.json')
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error.data;
            });
    }
    getRoadsAndTipsFinish() {
        return axios.get('./mocks/tips-roads-map-finish.json')
            .then(function (response) {
                console.log(response);
                return response.data.reverse();
            })
            .catch(function (error) {
                console.log(error);
                return error.data;
            });
    }
}

export default RoadsTipsService;
