import React from 'react';

const CardItem = ({ product = {}, handleProduct = () => {} }) => {

    return (
        <div className="col-lg-4 col-md-4 mb-lg-0 mb-4 item-sell">
            <div className="card collection-card z-depth-1-half">
                <div className="view zoom">
                <img src={(product.pictures[0].url ? '../images/ACS00001/ACS00001_1.png' : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg')} className="img-fluid" alt="" />
                <div className="stripe light" onClick={handleProduct.bind(product)}>
                    <a>
                    <p>{product.name}</p>
                        <h6>S/. {product.price}</h6>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;
