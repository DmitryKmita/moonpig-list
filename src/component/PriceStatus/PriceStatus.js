import React from 'react';
import './PriceStatus.scss';
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";

class PriceStatus extends React.Component {
    amount;
    currency;
    soldOut;

    constructor(props) {
        super(props);
        this.amount = props.value;
        this.currency = props.currency;
        this.soldOut = props.soldOut;
    }

    generateClasses() {
        let classes = ['c-price'];

        if (this.soldOut) {
            classes.push('c-price__soldout');
        }
        return classes.join(' ');
    }

    render() {
        return (
            <div className={this.generateClasses()}>
                <CurrencyDisplay amount={this.amount} currency={this.currency} />
            </div>
        );
    }
}

export default PriceStatus;