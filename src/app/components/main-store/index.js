import React, { Component } from 'react';
import './../../styles/main-store.css';
import ProductsServices from '../../services/products.service';

class MainStoreComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          products: [],
          categoryActive: 0
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
                    <article className={(categoryActive > 0 ) ? 'portfolio isotope-item isotope-hidden' : 'portfolio isotope-item'} key={index} data-category={prod.categoryId}>
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
                    {/* <ul className="gallerySelectorList">
                        <li className="current"><a data-filter="article.portfolio">All</a></li>
                        <li onClick={this.selectCategory.bind(this, 1)}><a data-filter="article.portfolio[data-category~='JCKT#AMS']">Casacas</a></li>
                        <li onClick={this.selectCategory.bind(this, 2)}><a data-filter="article.portfolio[data-category~='PNTS#AMS']">Pantalon</a></li>
                        <li onClick={this.selectCategory.bind(this, 3)}><a data-filter="article.portfolio[data-category~='GLVS#AMS']">Guantes</a></li>
                        {/* <li><a data-filter="article.portfolio[data-category~='video']">Video</a></li> 
                    </ul> */}
                    <div className="col-md-3">Todos</div>
                    <div className="col-md-3" onClick={this.selectCategory.bind(this, 1)}>Casacas</div>
                    <div className="col-md-3" onClick={this.selectCategory.bind(this, 2)}>Guantes</div>
                    <div className="col-md-3" onClick={this.selectCategory.bind(this, 3)}>Pantalones</div>
                </div>
                
             <section className="portfolio_container" id="portfolio">
                {this.renderProducts()}
                    {/* <article className="portfolio" data-category="JCKT#AMS">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-17-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-17.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="PNTS#AMS">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-18-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-18.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="GLVS#AMS">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-18-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-18.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article> */}
             </section>
                <div className="portfolioBottom" />
        </div>
        );
    }
};

export default MainStoreComponent;
