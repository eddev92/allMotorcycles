import React, { Component } from 'react';
import './../../styles/main-store.css';
import Modal from 'react-responsive-modal';
import ProductsServices from '../../services/products.service';
const closeSvg = <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />

class MainStoreComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          products: [],
          categoryActive: ''
      }
  }
    componentDidMount() {
        this.getAllProductsStore();
    }
    selectCategory(index) {
        const { categoryActive } = this.state;
        console.log(index)
        this.setState({ categoryActive: index })
    }
    getAllProductsStore() {
        const service = new ProductsServices();

        return service.getAllProducts()
                    .then((response) => {
                        this.setState({ products: response });
                        console.log(response)
                    })
        
    };

    render() {
        const { products } = this.state;
        const { showModal, closeModal } = this.props;
        console.log('products', products)

        return (
            <Modal
                open={showModal}
                onClose={closeModal}
                closeIconSvgPath={closeSvg}
                center={true}
                >
                    <section className="main-store row">
                            <h2 className="h1-responsive font-weight-bold text-center">ALLMOTORCYCLES STORE</h2>
                            <p className="grey-text text-center w-responsive mx-auto mb-4">Encuentra diversos accesorios para moteros como tu.</p>
                        <div className="row row-store">
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-lg-0 mb-4 item-sell">
                                <div className="card collection-card z-depth-1-half">
                                    <div className="view zoom">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt="" />
                                    <div className="stripe light">
                                        <a>
                                        <p>Sweatshirt
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal>
            )
    }
};

export default MainStoreComponent;
