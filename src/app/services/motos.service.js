import axios from 'axios';

class MotosService {
    getMotos() {
        return axios.get('./mocks/motos.json')
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error.data;
            });
    }
    getMotoById = () => {
        
    }
}

export default MotosService;
