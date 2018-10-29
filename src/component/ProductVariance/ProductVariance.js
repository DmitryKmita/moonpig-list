import React from 'react';
import PriceStatus from "../PriceStatus/PriceStatus";
import "./ProductVariance.scss";

class ProductVariance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render()
    {
        return (
            <div className="c-variance">
                <div className="c-variance--name">{this.state.data.DisplayName}</div>
                <div className="c-variance--price">
                    <PriceStatus value={this.state.data.Price} currency={this.state.data.Currency} soldOut={false} />
                </div>
            </div>
        );
    }
}

export default ProductVariance;