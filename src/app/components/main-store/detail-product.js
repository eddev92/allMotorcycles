import React from 'react';
import { Carousel } from 'react-bootstrap';
import './../../styles/detail-product.css';
import DetailContentProduct from './detail-content';

const DetailProductComponent = ({ showDetail = false, productSelected = {} }) => {
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
                            {productSelected && productSelected.pictures.length
                                ?
                                productSelected.pictures.map((pic) => {
                                   return (
                                    <Carousel.Item>
                                        <img src={pic.url} />
                                    </Carousel.Item>
                                   )
                                })
                                :
                                    'Cargando imágenes...'
                                }                            
                                {/* <Carousel.Item>
                                    <img src="https://i.pinimg.com/originals/06/5c/1c/065c1c37b968165324f85d30351fffed.jpg" />
                                </Carousel.Item>
                                <Carousel.Item height={500}>
                                    <img src="https://i.pinimg.com/originals/06/5c/1c/065c1c37b968165324f85d30351fffed.jpg" />
                                </Carousel.Item> */}
                            </Carousel>
                            </div>
                            <DetailContentProduct productSelected={productSelected}/>
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
};

export default DetailProductComponent;
