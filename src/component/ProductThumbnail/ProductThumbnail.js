import React from 'react';
import './ProductThumbnail.scss';
import PriceStatus from "../PriceStatus/PriceStatus";
import { Link } from "react-router-dom";

class ProductThumbnail extends React.Component {
    product;

    constructor(props) {
        super(props);
        this.product = props.product;
        console.log(this.product);
    }

    getBackgroundStyle()
    {
        return {
            backgroundImage: 'url(' + this.product.ProductImage.Link.Href + ')'
        }
    }

    buildUrl()
    {
        return '/product/' + this.product.SeoPath + '/' + this.product.MoonpigProductNo;
    }

    render() {
        return (
            <div className="c-thumb">
                <Link to={this.buildUrl()}>
                    <div className="c-thumb--image" style={this.getBackgroundStyle()} />
                    {this.product.Title != null ? <div className="c-thumb--title">{this.product.Title}</div> : ''}
                    <div className="c-thumb--price">
                        <PriceStatus value={this.product.Price.Value} currency={this.product.Price.Currency} soldOut={this.product.SoldOut} />
                    </div>
                </Link>
            </div>
        );
    }
};

export default ProductThumbnail;