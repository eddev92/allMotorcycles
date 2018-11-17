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
    getRiderById(code) {
        console.log('code', code)
        return axios.get(`./mocks/riders.json`)
            .then((response) => {
                console.log(response);
                let riders = []; 
                response.data.forEach((elmn) =>  {
                    if (elmn.teamCode === code) {
                        riders.push(elmn);
                    } 
                })
                console.log('riders getRiderById', riders)
                return riders;
            })
            .catch((error) => {
                console.log(error);
                return error.data;
            });
    }
}

export default RidersService;
