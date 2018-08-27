import React, { Component } from 'react';
import './../../styles/main-store.css';
import ProductsServices from '../../services/products.service';

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

    renderProducts() {
        const { products, categoryActive } = this.state;
        if (products) {
            console.log(categoryActive)
            const prods = products.map((prod, index) => {
                return (
                    <article className={(categoryActive === prod.categoryId ) ? 'portfolio isotope-item' : 'portfolio isotope-item isotope-hidden'} key={index} data-category={prod.categoryId}>
                            <section className="thumbImage">
                                <img src="images/gallery/gallery-01-thumb.jpg" alt="" className="fullwidth" />
                                <div className="thumbTextWrap">
                                    <div className="thumbText">
                                        <h3 className="sectionTitle">{prod.categoryId}</h3>
                                        <p>Descripcion de prod</p><br/>
                                        <p>{prod.price}</p>
                                        {/* <a className="thumbLink" href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Multi Images Gallery for one thumbnail"><i className="icon-search"></i></a>
                                        <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                        <a href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                        <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                        <a href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                        <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a> */}
                                    </div>
                                </div>
                            </section>
                        </article>
                )
            });
            return prods;
        } else {
            <h1>Se estan cargando los productos...</h1>
        }
    }

    render() {
        return (
            <div id="folio" className="page section">
                <div className="container">
                    <div className="sixteen columns">
                        <h1>Tienda</h1>
                        <h3><span className="small">OFF</span> <span className="smallBold">ROAD,</span>
                        <br /><span className="largeBold">ciudad</span> <span className="large">y sobre todo,</span>
                        <br/><span className="medium">la mejor</span><span className="mediumBold"> calidad pensando en tu seguridad.</span> 
                        <br/><span className="author">AllMotorycles Shop Perú</span></h3>
                    
                    </div>
                </div>
                <div className="gallerySelector row">
                    <div className="col-md-3 click-menu">Todos</div>
                    <div className="col-md-3 click-menu" onClick={this.selectCategory.bind(this, 'JCKT#AMS')}>Casacas</div>
                    <div className="col-md-3 click-menu" onClick={this.selectCategory.bind(this, 'GLVS#AMS')}>Guantes</div>
                    <div className="col-md-3 click-menu" onClick={this.selectCategory.bind(this, 'PNTS#AMS')}>Pantalones</div>
                </div>                
                <section className="portfolio_container" id="portfolio">
                    {this.renderProducts()}
                </section>
                <div className="portfolioBottom" />
        </div>
        );
    }
};

export default MainStoreComponent;
