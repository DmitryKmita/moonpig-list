import React from 'react';
import ApiService from '../../service/api.service';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import { Grid, Col } from 'react-bootstrap';


class ListPage extends React.Component {
    apiService;

    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            items: []
        };

        this.apiService = new ApiService();
        this.apiService.getItems()
            .then(resultData => {
                this.setState({
                    totalItems: resultData.NumberOfProducts,
                    items: resultData.Products
                });
            });
    }

    render() {
        return (
            <div className="ListPage App">
                <header className="App-header">

                </header>
                <main>
                    <div className="container">
                        <Grid>
                        {this.state.items.map(product => {
                            return (
                                <Col xs={4}>
                                    <ProductThumbnail product={product} key={product.MoonpigProductNo}></ProductThumbnail>
                                </Col>
                            )
                        })}
                        </Grid>
                    </div>
                </main>
            </div>
        );
    }
}

export default ListPage;