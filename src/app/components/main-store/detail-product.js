import React, { Component } from 'React';
import './../../styles/detail-product.css';

class DetailProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state =  {};
    }
    render() {
        const { showDetail } = this.props;
        if (showDetail) {
            return (
                <section className="main-detail-product row">
                      <h2 className="h1-responsive font-weight-bold text-center">ALLMOTORCYCLES STORE</h2>
                            <p className="grey-text text-center w-responsive mx-auto mb-4">Encuentra diversos accesorios para moteros como tu.</p>
                </section>
            )
        } else {
            return (
                <section className="main-detail-product row">
                    <h1>Cargando...</h1>
                </section>
            )
        }
    }

};

export default DetailProductComponent;
