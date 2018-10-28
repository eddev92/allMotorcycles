import axios from 'axios';

class RoadsService {
    getRoads() {
        return axios.get('/roads')
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw(error);
        })
    }
    getRoadById(id) {
        return axios.get(`/roads/${id}`)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw(error);
        })
    }
}

export default RoadsService;
