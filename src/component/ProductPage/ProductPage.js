import React from 'react';
import ApiService from "../../service/api.service";
import { Grid, Col, Row } from 'react-bootstrap';
import Parser from 'html-react-parser';
import Tag from "../Tag/Tag";
import BuyNowButton from "../BuyNowButton/BuyNowButton";
import "./ProductPage.scss";
import ProductVariance from "../ProductVariance/ProductVariance";
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";
import DocumentTitle from "react-document-title";


class ProductPage extends React.Component {
    slug;
    id;

    constructor(props) {
        super(props);
        let apiService = new ApiService();
        this.slug = props.match.params.slug;
        this.id = props.match.params.id;
        this.state = {
            product: {
                Description: '',
                ThumbnailUrl: null,
                DesignFeatureTags: [],
                ImageUrls: [],
                AvailableSizes: []
            }
        };
        apiService.getItem(this.id)
            .then(productInfo => {
                this.setState({
                    product: productInfo
                });
                console.log(productInfo);
            });
    }

    getTitle()
    {
        let title = '';
        if (this.state.product.Title) {
            title += this.state.product.Title;
        } else {
            title += this.state.product.Name;
        }
        return title + ' ' + this.state.product.SizeName;
    }

    render() {
        return (
            <DocumentTitle title={'Moonpig - ' + this.getTitle()}>
                <div className="c-product">
                    <div className="container">
                        <Grid>
                            <Row>
                                <Col xs={12} lg={4}>
                                    <div className="c-product--visual">
                                        <div className="c-product--visual--main">
                                            <img src={this.state.product.ThumbnailUrl} alt={this.getTitle()} />
                                        </div>
                                        <div className="c-product--visual--mini">
                                            {this.state.product.ImageUrls.map((image, i) => {
                                                return (
                                                    <div className="c-product--visual--mini--image" key={i}>
                                                        <img src={image.ImageUrl} alt="" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <div className="c-product--info">
                                        <div className="c-product--info--item">
                                            {Parser(this.state.product.Description)}
                                        </div>
                                        {this.state.product.SizeName != null ?
                                            <div className="c-product--info--item">
                                                <strong>Size:</strong> {this.state.product.SizeName} (<CurrencyDisplay currency={this.state.product.Size.Currency} amount={this.state.product.Size.Price} />)
                                            </div>
                                            : ''}
                                        <div className="c-product--info--item">
                                            {this.state.product.DesignFeatureTags.map((tag, i) => {
                                                return (
                                                    <Tag name={tag} key={i} />
                                                );
                                            })}
                                        </div>
                                        {this.state.product.AvailableSizes.map((variance, i) => {
                                            return <ProductVariance data={variance} key={i} />
                                        })}
                                        <div className="clearfix" />
                                        <BuyNowButton sold={this.state.product.SoldOut} />
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default ProductPage;