import React from 'react';
import ApiService from '../../service/api.service';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import { Grid, Col, Button } from 'react-bootstrap';
import "./ListPage.scss";
import DocumentTitle from 'react-document-title';

class ListPage extends React.Component {
    apiService;
    page = 1;

    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            items: []
        };
        this.apiService = new ApiService();
        this.loadItems();
        this.loadNext = this.loadNext.bind(this);
    }

    loadItems()
    {
        this.apiService.getItems(this.page)
            .then(resultData => {
                let newList = this.state.items.concat(resultData.Products);
                this.setState({
                    totalItems: resultData.NumberOfProducts,
                    items: newList
                });
            });
    }

    loadNext()
    {
        this.page++;
        this.loadItems();
    }

    render() {
        return (
            <DocumentTitle title='Moonpig - Celebrate new job cards'>
                <div className="c-list">
                    <header className="App-header">

                    </header>
                    <main>
                        <div className="container">
                            <Grid>
                            {this.state.items.map((product, key) => {
                                return (
                                    <Col xs={6} md={4} lg={3} key={key}>
                                        <ProductThumbnail product={product} />
                                    </Col>
                                )
                            })}
                            </Grid>
                            <div className="text-center">
                                {this.state.totalItems > this.state.items.length ? <Button onClick={this.loadNext}>More</Button> : ''}
                            </div>
                        </div>
                    </main>
                </div>
            </DocumentTitle>
        );
    }
}

export default ListPage;