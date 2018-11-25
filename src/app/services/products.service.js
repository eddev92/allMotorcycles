import axios from 'axios';

class ProductsServices {
    getAllProducts() {
        return axios.get('./mocks/productos.json')
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error.data;
            });
    }
}

export default ProductsServices;
