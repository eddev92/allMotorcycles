import React, { Component } from 'react';
import './../../styles/main-store.css';
import Modal from 'react-responsive-modal';
import ProductsServices from '../../services/products.service';
import DetailProductComponent from './detail-product';
import CardItem from '../../shared/card-item';
import BuyItem from './buy-item';
const closeSvg = <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />

class MainStoreComponent extends Component {
  constructor(props) {  
      super(props);
      this.state = {
          products: [],
          categoryActive: {},
          showDetail: false,
          productSelected: {},
          showBuyItem: false
      }
  }
    componentDidMount() {
        this.getAllProductsStore();
    }
    selectCategory(index) {
        const { categoryActive } = this.state;

        this.setState({ categoryActive: index })
    }
    getAllProductsStore() {
        const service = new ProductsServices();

        return service.getAllProducts()
                    .then((response) => {
                        this.setState({ products: response });
                        console.log('getAllProducts', response)
                    })
        
    };
    showDetail(product) {
        const {  showDetail } = this.state;

        this.setState({ showDetail: !showDetail, productSelected: product })
    }
    goToback() {
        this.setState({ showDetail: false })
    }
    buyItem() {
        const { productSelected } = this.state;

        if (productSelected) console.log('comprar el item: ', productSelected)
        this.setState({ showBuyItem: true })

    }
    resetBuyItem() {
        this.setState({ showBuyItem: false, showDetail: true });
    }
    renderBuyItem() {
        const { showBuyItem } = this.state;
        const options = [
            {
                price: 100
            },
            {
                price: 200
            }
        ]

        if (showBuyItem) {
            
            return <BuyItem options={options} goTobackFromBuy={this.resetBuyItem.bind(this)}/>
        }
        return null;
    }
    render() {
        const { products, showDetail, productSelected, showBuyItem } = this.state;
        const { showModal, closeModal } = this.props;
        console.log('productSelected', productSelected)
        const styles = {
            padding: "15px"
        }

     
        return (
            <Modal
                open={showModal}
                onClose={closeModal}
                closeIconSvgPath={closeSvg}
                center={true}
                styles={styles}
                >
                    {
                        showBuyItem ? this.renderBuyItem()
                        :
                        showDetail
                        ?
                        <div>
                            <DetailProductComponent showDetail={showDetail} productSelected={productSelected} buyItem={this.buyItem.bind(this)}/>
                            {showDetail 
                                &&
                             <div className="super-button row" onClick={this.goToback.bind(this)}>
                                <h3>
                                    VOLVER
                                </h3>
                             </div>
                            }
                        </div>
                        :
                    <section className="main-store row">
                        <div>
                            <h2 className="h1-responsive font-weight-bold text-center">ALLMOTORCYCLES STORE</h2>
                                <p className="grey-text text-center w-responsive mx-auto mb-4">Encuentra diversos accesorios para moteros como tu.</p>
                            <div className="row row-store">
                                {products && products.length
                                    ?
                                    products.map((prod) => {
                                        return <CardItem product={prod} handleProduct={this.showDetail.bind(this, prod)}/>
                                    })
                                    :
                                    "Cargando productos..."
                                }                                
                            </div>
                        </div>
                    </section>
                    }
                </Modal>
            )
    }
};

export default MainStoreComponent;
