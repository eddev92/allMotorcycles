import React, { Component } from 'react';
import './main-store.css';

class MainStoreComponent extends Component {
    render() {
        return (
            <div id="folio" className="page section">
                <div className="container">
                    <div className="sixteen columns">
                        <h1>Tienda</h1>
                        <h3><span className="small">Off</span> <span className="smallBold">Road,</span>
                        <br /><span className="largeBold">ciudad</span> <span className="large">y sobre todo,</span>
                        <br/><span className="medium">la mejor</span><span className="mediumBold"> calidad pensando en tu seguridad.</span> 
                        <br/><span className="author">AllMotorycles Shop Perú</span></h3>
                    
                    </div>
                </div>
                <div className="gallerySelector">
                    <ul className="gallerySelectorList">
                        <li className="current"><a data-filter="article.portfolio" href="#">All</a></li>
                        <li><a data-filter="article.portfolio[data-category~='illustration']" href="#">Illustration</a></li>
                        <li><a data-filter="article.portfolio[data-category~='photography']" href="#">Photography</a></li>
                        <li><a data-filter="article.portfolio[data-category~='branding']" href="#">Branding</a></li>
                        <li><a data-filter="article.portfolio[data-category~='video']" href="#">Video</a></li>
                    </ul>
                </div>
                
                <section className="portfolio_container">
                    
                    <article className="portfolio" data-category="branding">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-01-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis,</p>
                                    <a className="thumbLink" href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Multi Images Gallery for one thumbnail"><i className="icon-search"></i></a>
                                    <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                    <a href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                    <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                    <a href="images/gallery/gallery-01.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                    <a href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallerymulti]" title="Lorem ipsum dolor sit amet"></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-02-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    
                                    <a className="thumbLink" href="images/gallery/gallery-02.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-03-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-04-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-04.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-05-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-05.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-06-thumb.jpg" alt="" className="fullwidth"/>
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-07-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-07.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-08-thumb.jpg" alt="" className="fullwidth"/>
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-08.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-10-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-11-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-11.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-12-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-12.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-13-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-13.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-14-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-15-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-15.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-16-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-16.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
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
                    <article className="portfolio" data-category="photography">
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
                    <article className="portfolio" data-category="branding">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-19-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-19.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-20-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-21-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-21.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-22-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-22.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="branding">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-23-thumb.jpg" alt="" className="fullwidth"/>
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-23.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-24-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-25-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-25.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="photography">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-26-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-26.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="illustration">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-28-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="images/gallery/gallery-28.jpg" rel="prettyPhoto[gallery1]" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article className="portfolio" data-category="video">
                        <section className="thumbImage">
                            <img src="images/gallery/gallery-29-thumb.jpg" alt="" className="fullwidth" />
                            <div className="thumbTextWrap">
                                <div className="thumbText">
                                    <h3 className="sectionTitle">Gallery Item</h3>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <a className="thumbLink" href="http://vimeo.com/24169968" rel="prettyPhoto" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."><i className="icon-search"></i></a>
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
                <div className="portfolioBottom" />
        </div>
        );
    }
};

export default MainStoreComponent;
