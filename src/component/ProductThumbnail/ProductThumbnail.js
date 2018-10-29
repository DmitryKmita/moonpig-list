import React from 'react';

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

    render() {
        return (
            <div className="c-thumb">
                <div className="c-thumb--image" style={this.getBackgroundStyle()}></div>
                <div className="c-thumb--title">{this.product.Title}</div>
                <div className="c-thumb--price">Price</div>
            </div>
        );
    }
};

export default ProductThumbnail;