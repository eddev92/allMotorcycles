import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './../../styles/detail-product.css';

class DetailProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state =  {};
    }
    componentDidMount() {
    }
    render() {
        const { showDetail } = this.props;
        if (showDetail) {
            return (
                <section className="main-detail-product row" style={{backgroundImage: 'url(images/macchu.jpg)'}}>
                    <div className="title-detail row">
                        <h2 className="h1-responsive font-weight-bold text-center">ALLMOTORCYCLES STORE</h2>
                        <p className="grey-text text-center w-responsive mx-auto mb-4 text-store">Encuentra diversos accesorios para moteros como tu.</p>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 pictures-item-store">
                            <Carousel
                            indicators={false}
                            // bsClass={'carousel-detail'}
                            >
                                <Carousel.Item>
                                    <img src="https://i.pinimg.com/originals/06/5c/1c/065c1c37b968165324f85d30351fffed.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="https://i.pinimg.com/originals/06/5c/1c/065c1c37b968165324f85d30351fffed.jpg" />
                                </Carousel.Item>
                                <Carousel.Item height={500}>
                                    <img src="https://i.pinimg.com/originals/06/5c/1c/065c1c37b968165324f85d30351fffed.jpg" />
                                </Carousel.Item>
                            </Carousel>
                            </div>
                            <div className="col-md-6 detail-item-store">
                                <div className="info-product">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="main-detail-product row">
                    <h1>Cargando productos...</h1>
                </section>
            )
        }
    }

};

export default DetailProductComponent;
