import React from 'react';

/**
 * Created to provide flexibility in case we need to show currency after the amount
 */
class CurrencyDisplay extends React.Component {

    amount;
    currency;

    constructor(props)
    {
        super(props);
        this.amount = props.amount;
        this.currency = props.currency;
    }

    display()
    {
        return this.currency + this.amount;
    }

    render() {
        return (
            <span className="c-currency">{this.display()}</span>
        );
    }
}

export default CurrencyDisplay;