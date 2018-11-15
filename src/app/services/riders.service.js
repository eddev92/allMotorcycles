import axios from 'axios';

class RidersService {
    getRiders() {
        return axios.get('./mocks/riders.json')
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error.data;
            });
    }
    getRiderById = () => {

    }
}

export default RidersService;
